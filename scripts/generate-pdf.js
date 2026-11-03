/**
 * Renders /resume to public/guillermo-rodas-cv.pdf with headless Chromium.
 *
 * Usage:
 *   yarn build && yarn generate:pdf          # starts `next start` itself
 *   BASE_URL=https://… yarn generate:pdf    # renders an already running site
 *
 * Playwright is not a project dependency; CI installs it on the side and
 * exposes it through NODE_PATH (see .github/workflows/pdf.yml).
 */
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const projectRoot = path.resolve(__dirname, "..");
const outputs = [
  { theme: "light", file: path.join(projectRoot, "public", "guillermo-rodas-cv.pdf") },
  { theme: "dark", file: path.join(projectRoot, "public", "guillermo-rodas-cv-dark.pdf") },
];
const port = Number(process.env.PORT || 3100);
const maxPages = 2;

async function waitForServer(url, timeoutMs = 60000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Server not up yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Server did not respond at ${url}`);
}

function startServer() {
  const nextBin = require.resolve("next/dist/bin/next", { paths: [projectRoot] });
  return spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    cwd: projectRoot,
    stdio: "inherit",
  });
}

/**
 * Chromium leaves the page margins white. For the dark PDF the side margins
 * move into the sheet's padding and the top/bottom margins are painted by
 * header and footer templates, so every page is dark edge to edge.
 */
async function darkPdfOptions(page) {
  const verticalMargin = "14mm";
  await page.addStyleTag({
    content: `@page { margin: ${verticalMargin} 0; } .resume { padding: 0 16mm !important; }`,
  });
  const band = `<div style="width:100%;height:${verticalMargin};margin:0;background:#1a1a1a;-webkit-print-color-adjust:exact;print-color-adjust:exact;"></div>`;
  const reset = "<style>#header,#footer{padding:0 !important;}</style>";
  return {
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: reset + band,
    footerTemplate: reset + band,
    margin: { top: verticalMargin, bottom: verticalMargin, left: "0", right: "0" },
  };
}

/** Chromium stamps creation dates into the PDF; ignore them when comparing. */
function sameContent(a, b) {
  const strip = (pdf) =>
    pdf.toString("latin1").replace(/\/(CreationDate|ModDate)\s*\([^)]*\)/g, "");
  return strip(a) === strip(b);
}

function countPages(pdf) {
  return (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
}

async function main() {
  const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;
  const server = process.env.BASE_URL ? null : startServer();

  try {
    await waitForServer(`${baseUrl}/resume`);

    const browser = await chromium.launch();
    let overLimit = null;

    for (const { theme, file } of outputs) {
      const page = await browser.newPage();
      await page.goto(`${baseUrl}/resume`, { waitUntil: "networkidle" });
      await page.evaluate((isDark) => {
        document.documentElement.classList.toggle("dark", isDark);
      }, theme === "dark");
      await page.evaluate(() => document.fonts.ready);
      await page.emulateMedia({ media: "print" });

      const pdf = await page.pdf(theme === "dark" ? await darkPdfOptions(page) : {
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
      });
      await page.close();

      const pages = countPages(pdf);
      const relativeOutput = path.relative(projectRoot, file);
      if (fs.existsSync(file) && sameContent(fs.readFileSync(file), pdf)) {
        console.log(`${relativeOutput} is up to date (${pages} pages)`);
      } else {
        fs.writeFileSync(file, pdf);
        console.log(`Wrote ${relativeOutput} (${pages} pages)`);
      }

      if (pages > maxPages) {
        overLimit = `${relativeOutput} is ${pages} pages; the limit is ${maxPages}.`;
      }
    }

    await browser.close();
    if (overLimit) {
      throw new Error(overLimit);
    }
  } finally {
    if (server) server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
