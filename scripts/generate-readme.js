const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const { parseContent } = require("./content-schema");

const readContentFile = (filePath) => parseContent(fs.readFileSync(filePath, "utf8"), filePath);

const projectRoot = path.resolve(__dirname, "..");

const moduleCache = new Map();

function resolveModulePath(requestPath) {
  const candidates = [];

  if (path.extname(requestPath)) {
    candidates.push(requestPath);
  } else {
    candidates.push(`${requestPath}.ts`);
    candidates.push(path.join(requestPath, "index.ts"));
    candidates.push(`${requestPath}.js`);
    candidates.push(path.join(requestPath, "index.js"));
  }

  for (const candidate of candidates) {
    if (candidate && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  throw new Error(`Unable to resolve module: ${requestPath}`);
}

function loadTsModule(requestPath) {
  const resolvedPath = resolveModulePath(requestPath);

  if (moduleCache.has(resolvedPath)) {
    return moduleCache.get(resolvedPath).exports;
  }

  if (/\.ya?ml$/.test(resolvedPath)) {
    const module = { exports: readContentFile(resolvedPath) };
    moduleCache.set(resolvedPath, module);
    return module.exports;
  }

  const code = fs.readFileSync(resolvedPath, "utf8");
  const transpiled = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: resolvedPath,
  });

  const module = { exports: {} };
  moduleCache.set(resolvedPath, module);

  const dirname = path.dirname(resolvedPath);

  function customRequire(specifier) {
    if (specifier.startsWith(".")) {
      const absolute = path.resolve(dirname, specifier);
      return loadTsModule(absolute);
    }

    return require(specifier);
  }

  const wrapper = new Function(
    "exports",
    "require",
    "module",
    "__filename",
    "__dirname",
    transpiled.outputText
  );

  wrapper(module.exports, customRequire, module, resolvedPath, dirname);

  return module.exports;
}

function addLine(lines, line = "") {
  lines.push(line);
}

function formatLink(url) {
  const trimmed = url.trim();
  const hasProtocol = /^https?:\/\//i.test(trimmed);
  const href = hasProtocol ? trimmed : `https://${trimmed}`;
  return `[${trimmed}](${href})`;
}

/** "www.eqtgroup.com" → "[eqtgroup.com](https://www.eqtgroup.com)" */
function formatShortLink(url) {
  const trimmed = url.trim();
  const href = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const label = trimmed.replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/\/$/, "");
  return `[${label}](${href})`;
}

/**
 * A button image from public/readme/. GitHub strips target="_blank" from READMEs,
 * so these open in the same tab (the PDF opens in the browser's viewer).
 */
function button(image, label, href) {
  return `<a href="${href}"><img src="public/readme/${image}" alt="${label}" height="40" /></a>`;
}

const SECTIONS = [
  ["Summary", "summary"],
  ["Expertise", "expertise"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Selected Projects", "selected-projects"],
  ["Knowledge", "knowledge"],
  ["Recognition", "recognition"],
];

function formatHeader(lines, { profile, languages, site }) {
  const contacts = [
    `[${profile.email}](mailto:${profile.email})`,
    `[${profile.website.label}](${profile.website.url})`,
    ...profile.links.map((link) => `[${link.label}](${link.url})`),
  ];

  addLine(lines, "<!-- Generated from content/*.yml by scripts/generate-readme.js. Edit the YAML, not this file. -->");
  addLine(lines);
  addLine(lines, '<div align="center">');
  addLine(lines);
  addLine(lines, `# ${profile.name}`);
  addLine(lines);
  addLine(lines, `**${profile.role}** · ${profile.location}`);
  addLine(lines);
  addLine(lines, `_${profile.tagline}_`);
  addLine(lines);
  addLine(lines, contacts.join(" · "));
  addLine(lines);
  addLine(
    lines,
    [
      button("download-pdf.svg", "Download PDF", site.absoluteUrl(site.pdfPath)),
      button("view-online.svg", "View online", site.absoluteUrl("/")),
    ].join("&nbsp;")
  );
  addLine(lines);
  addLine(
    lines,
    languages.map((language) => `${language.flag} ${language.title} (${language.proeficiency})`).join(" · ")
  );
  addLine(lines);
  addLine(lines, SECTIONS.map(([title, anchor]) => `[${title}](#${anchor})`).join(" · "));
  addLine(lines);
  addLine(lines, "</div>");
  addLine(lines);
}

function formatSummary(lines, summary) {
  addLine(lines, "## Summary");
  addLine(lines);
  summary.forEach((paragraph) => {
    addLine(lines, paragraph);
    addLine(lines);
  });
}

function formatExpertises(lines, expertises) {
  addLine(lines, "## Expertise");
  addLine(lines);
  expertises.forEach((expertise) => {
    const subtitle = expertise.subtitle ? ` · _${expertise.subtitle}_` : "";
    addLine(lines, `**${expertise.title}**${subtitle}`);
    expertise.items.forEach((item) => addLine(lines, `- ${item}`));
    addLine(lines);
  });
}

function formatSkills(lines, stack, frameworks) {
  addLine(lines, "## Skills");
  addLine(lines);
  addLine(lines, "| Area | Tools and practice |");
  addLine(lines, "| :--- | :--- |");
  [...stack, ...frameworks].forEach((item) => {
    addLine(lines, `| **${item.title}** | ${item.text.replace(/\|/g, "\\|")} |`);
  });
  addLine(lines);
}

function formatCareers(lines, careers) {
  addLine(lines, "## Experience");
  addLine(lines);

  careers.forEach((career, index) => {
    const role = career.functions.replace(/\.$/, "");
    const dates = `${career.startDate} – ${career.endDate ?? "Present"}`;

    addLine(lines, `### ${career.company}`);
    addLine(lines);
    addLine(lines, `**${role}** · ${dates} · ${formatShortLink(career.url)}`);
    addLine(lines);
    addLine(lines, `> ${career.about}`);
    addLine(lines);
    career.achievements.forEach((achievement) => {
      addLine(lines, `- **${achievement.title}.** ${achievement.description}`);
      if (achievement.tech?.length) {
        addLine(lines, `  <br /><sub>${achievement.tech.join(" · ")}</sub>`);
      }
    });
    addLine(lines);
    if (index !== careers.length - 1) {
      addLine(lines, "---");
      addLine(lines);
    }
  });
}

function formatProjects(lines, projects) {
  addLine(lines, "## Selected Projects");
  addLine(lines);
  projects.forEach((project) => {
    const links = project.links
      .map((link) => {
        const href = /^https?:\/\//i.test(link.url) ? link.url : `https://${link.url}`;
        return `[${link.label}](${href})`;
      })
      .join(" · ");
    addLine(lines, `- **${project.name}** · ${links}`);
    addLine(lines, `  <br />${project.description}`);
    addLine(lines, `  <br /><sub>${project.stack.join(" · ")}</sub>`);
  });
  addLine(lines);
}

/** Items of the Knowledge and Recognition sections. */
function formatSectionItems(lines, items) {
  items.forEach((item) => {
    const title = item.badge ? `${item.title} (${item.badge.toLowerCase()})` : item.title;
    const date = item.footer ? ` · _${item.footer}_` : "";
    if (Array.isArray(item.text)) {
      addLine(lines, `- **${title}**${date}`);
      item.text.forEach(([name, detail]) => addLine(lines, `  - ${name} · _${detail}_`));
    } else {
      addLine(lines, `- **${title}** — ${item.text}${date}`);
    }
  });
  addLine(lines);
}

function formatSections(lines, heading, sections) {
  addLine(lines, `## ${heading}`);
  addLine(lines);
  sections.forEach((section) => {
    addLine(lines, `### ${section.title}`);
    addLine(lines);
    formatSectionItems(lines, section.items);
  });
}

function main() {
  const lines = [];
  const load = (name) => loadTsModule(path.join(projectRoot, "data", name));

  const site = load("site");
  formatHeader(lines, {
    profile: load("profile").profile,
    languages: load("languages").languages,
    site,
  });
  formatSummary(lines, load("summary").summary);
  formatExpertises(lines, load("expertises").expertises);
  formatSkills(lines, load("stack").stack, load("frameworks").frameworks);
  formatCareers(lines, load("careers").careers);
  formatProjects(lines, load("projects").projects);
  formatSections(lines, "Knowledge", load("knowledge").knowledge);
  formatSections(lines, "Recognition", load("achievements").achievements);

  const output = lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd();
  fs.writeFileSync(path.join(projectRoot, "README.md"), `${output}\n`, "utf8");
}

if (require.main === module) {
  main();
}

module.exports = { loadTsModule, formatLink, projectRoot };
