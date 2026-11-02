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
const outputPath = path.join(projectRoot, "public", "guillermo-rodas-cv.pdf");
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
    const page = await browser.newPage();
    await page.goto(`${baseUrl}/resume`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: "print" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });
    await browser.close();

    const pages = countPages(pdf);
    const relativeOutput = path.relative(projectRoot, outputPath);
    if (fs.existsSync(outputPath) && sameContent(fs.readFileSync(outputPath), pdf)) {
      console.log(`${relativeOutput} is up to date (${pages} pages)`);
    } else {
      fs.writeFileSync(outputPath, pdf);
      console.log(`Wrote ${relativeOutput} (${pages} pages)`);
    }

    if (pages > maxPages) {
      throw new Error(`The CV is ${pages} pages; the limit is ${maxPages}.`);
    }
  } finally {
    if (server) server.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
