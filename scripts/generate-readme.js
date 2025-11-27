const fs = require("fs");
const path = require("path");
const ts = require("typescript");

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

function formatSummary(lines, summary) {
  addLine(lines, "# Summary");
  addLine(lines);

  summary.forEach((paragraph, index) => {
    addLine(lines, paragraph);
    if (index !== summary.length - 1) {
      addLine(lines);
    }
  });

  addLine(lines);
}

function formatLanguages(lines, languages) {
  addLine(lines, "# Languages");
  addLine(lines);

  languages.forEach((language, index) => {
    addLine(lines, `${language.flag} **${language.title}**`);
    addLine(lines, language.proeficiency);
    if (index !== languages.length - 1) {
      addLine(lines);
    }
  });

  addLine(lines);
}

function formatExpertises(lines, expertises) {
  addLine(lines, "# Expertises");
  addLine(lines);

  expertises.forEach((expertise, index) => {
    addLine(lines, `## ${expertise.title}`);
    if (expertise.subtitle) {
      addLine(lines, expertise.subtitle);
    }
    expertise.items.forEach((item) => {
      addLine(lines, `- ${item}`);
    });
    if (index !== expertises.length - 1) {
      addLine(lines);
    }
  });

  addLine(lines);
}

function formatStack(lines, stack) {
  addLine(lines, "# Stack");
  addLine(lines);

  stack.forEach((item) => {
    addLine(lines, `- **${item.title}** — ${item.text}`);
  });

  addLine(lines);
}

function formatFrameworks(lines, frameworks) {
  addLine(lines, "# Frameworks");
  addLine(lines);

  frameworks.forEach((item) => {
    addLine(lines, `- **${item.title}** — ${item.text}`);
  });

  addLine(lines);
}

function formatCareers(lines, careers) {
  addLine(lines, "# Careers");
  addLine(lines);

  careers.forEach((career, index) => {
    addLine(lines, `## ${career.company}`);
    if (career.date) {
      addLine(lines, `Date: ${career.date}`);
    }
    addLine(lines, `Start Date: ${career.startDate}`);
    if (career.endDate) {
      addLine(lines, `End Date: ${career.endDate}`);
    }
    addLine(lines, `URL: ${formatLink(career.url)}`);
    addLine(lines, `About: ${career.about}`);
    addLine(lines, `Functions: ${career.functions}`);
    if (career.achievements.length > 0) {
      addLine(lines);
      addLine(lines, "### Achievements");
      career.achievements.forEach((achievement) => {
        addLine(lines, `- ${achievement}`);
      });
    }
    if (index !== careers.length - 1) {
      addLine(lines);
    }
  });

  addLine(lines);
}

function formatKnowledge(lines, knowledge) {
  addLine(lines, "# Knowledge");
  addLine(lines);

  knowledge.forEach((section, sectionIndex) => {
    addLine(lines, `## ${section.title}`);
    addLine(lines);

    section.items.forEach((item) => {
      const text = item.text;
      if (Array.isArray(text)) {
        addLine(lines, `- **${item.title}**`);
        text.forEach((entry) => {
          const [title, detail] = entry;
          addLine(lines, `  - ${title} — ${detail}`);
        });
        if (item.footer) {
          addLine(lines, `  - _${item.footer}_`);
        }
      } else {
        const footer = item.footer ? ` _(${item.footer})_` : "";
        addLine(lines, `- **${item.title}** — ${text}${footer}`);
      }
    });

    if (sectionIndex !== knowledge.length - 1) {
      addLine(lines);
    }
  });

  addLine(lines);
}

function formatAchievements(lines, achievements) {
  addLine(lines, "# Achievements");
  addLine(lines);

  achievements.forEach((section, sectionIndex) => {
    addLine(lines, `## ${section.title}`);
    addLine(lines);

    section.items.forEach((item) => {
      const text = item.text;
      if (Array.isArray(text)) {
        addLine(lines, `- **${item.title}**`);
        text.forEach((entry) => {
          const [title, detail] = entry;
          addLine(lines, `  - ${title} — ${detail}`);
        });
        if (item.footer) {
          addLine(lines, `  - _${item.footer}_`);
        }
      } else {
        const footer = item.footer ? ` _(${item.footer})_` : "";
        addLine(lines, `- **${item.title}** — ${text}${footer}`);
      }
    });

    if (sectionIndex !== achievements.length - 1) {
      addLine(lines);
    }
  });
}

function main() {
  const lines = [];

  const summaryModule = loadTsModule(path.join(projectRoot, "data", "summary"));
  const languagesModule = loadTsModule(path.join(projectRoot, "data", "languages"));
  const expertisesModule = loadTsModule(path.join(projectRoot, "data", "expertises"));
  const stackModule = loadTsModule(path.join(projectRoot, "data", "stack"));
  const frameworksModule = loadTsModule(path.join(projectRoot, "data", "frameworks"));
  const careersModule = loadTsModule(path.join(projectRoot, "data", "careers"));
  const knowledgeModule = loadTsModule(path.join(projectRoot, "data", "knowledge"));
  const achievementsModule = loadTsModule(path.join(projectRoot, "data", "achievements"));

  formatSummary(lines, summaryModule.summary);
  formatLanguages(lines, languagesModule.languages);
  formatExpertises(lines, expertisesModule.expertises);
  formatStack(lines, stackModule.stack);
  formatFrameworks(lines, frameworksModule.frameworks);
  formatCareers(lines, careersModule.careers);
  formatKnowledge(lines, knowledgeModule.knowledge);
  formatAchievements(lines, achievementsModule.achievements);

  const output = lines.join("\n").replace(/\n{3,}/g, "\n\n");
  fs.writeFileSync(path.join(projectRoot, "README.md"), `${output}\n`, "utf8");
}

main();
