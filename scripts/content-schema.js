/**
 * Reads and validates the CV content in content/*.yml.
 *
 * Used by the Next.js loader (scripts/yaml-loader.js), the README/resume.md
 * generators and `yarn validate:content`, so a typo fails dev, build,
 * pre-push and CI with the file and line of the problem.
 * The shapes mirror types/content.ts.
 */
const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

const projectRoot = path.resolve(__dirname, "..");
const contentDir = path.join(projectRoot, "content");

// ── Shape descriptors ───────────────────────────────────────────────────────
const string = { kind: "string" };
const number = { kind: "number" };
const boolean = { kind: "boolean" };
const list = (of) => ({ kind: "list", of });
/** Keys ending in "?" are optional. */
const object = (fields, check) => ({ kind: "object", fields, check });

const MONTH_YEAR =
  /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{4}$/;

const link = object({ label: string, url: string });

const entry = object({ name: string, date: string });

const sectionItem = object(
  {
    title: string,
    "badge?": string,
    "description?": string,
    "entries?": list(entry),
    "date?": string,
    "cv?": boolean,
  },
  (item) =>
    (item.description === undefined) === (item.entries === undefined)
      ? "needs either description: or entries: (exactly one)"
      : null
);

const section = object({ title: string, items: list(sectionItem) });

const skill = object({ title: string, description: string, "cv?": string });

const schemas = {
  profile: object({
    name: string,
    role: string,
    tagline: string,
    location: string,
    origin: string,
    documentLabel: string,
    email: string,
    careerStart: number,
    website: link,
    links: list(link),
    languages: list(object({ name: string, flag: string, level: string })),
  }),
  summary: object({ cv: string, paragraphs: list(string) }),
  careers: list(
    object(
      {
        company: string,
        url: string,
        logo: string,
        start: string,
        "end?": string,
        role: string,
        tagline: string,
        about: string,
        achievements: list(
          object({ title: string, description: string, "tech?": list(string), "cv?": string })
        ),
      },
      (career) => {
        if (!MONTH_YEAR.test(career.start)) return `start: "${career.start}" must look like "August 2021"`;
        if (career.end !== undefined && !MONTH_YEAR.test(career.end))
          return `end: "${career.end}" must look like "August 2021"`;
        if (!fs.existsSync(path.join(projectRoot, "public", "logos", `${career.logo}.svg`)))
          return `logo: "${career.logo}" has no public/logos/${career.logo}.svg`;
        return null;
      }
    )
  ),
  projects: list(
    object({ name: string, description: string, stack: list(string), links: list(link) })
  ),
  skills: object(
    {
      expertises: list(object({ title: string, subtitle: string, items: list(string) })),
      stack: list(skill),
      frameworks: list(skill),
      cvOrder: list(string),
    },
    (skills) => {
      const titles = [...skills.stack, ...skills.frameworks].map((item) => item.title);
      const unknown = skills.cvOrder.filter((title) => !titles.includes(title));
      return unknown.length
        ? `cvOrder lists groups that don't exist in stack or frameworks: ${unknown.join(", ")}`
        : null;
    }
  ),
  education: list(section),
  achievements: list(section),
  site: object({
    title: string,
    cvTitle: string,
    description: string,
    cvDescription: string,
    socialImageAlt: string,
    topics: list(string),
    socialProfiles: list(string),
  }),
};

// ── Validation ──────────────────────────────────────────────────────────────
const typeOf = (value) =>
  value === null ? "empty" : Array.isArray(value) ? "list" : typeof value;

function check(value, schema, at, errors) {
  if (schema.kind === "list") {
    if (!Array.isArray(value)) return errors.push({ at, message: `expected a list, got ${typeOf(value)}` });
    return value.forEach((item, index) => check(item, schema.of, [...at, index], errors));
  }
  if (schema.kind === "object") {
    if (typeOf(value) !== "object") return errors.push({ at, message: `expected fields, got ${typeOf(value)}` });
    const errorsBefore = errors.length;
    const known = Object.keys(schema.fields).map((key) => key.replace(/\?$/, ""));
    for (const [rawKey, fieldSchema] of Object.entries(schema.fields)) {
      const optional = rawKey.endsWith("?");
      const key = rawKey.replace(/\?$/, "");
      if (value[key] === undefined || value[key] === null) {
        if (!optional) errors.push({ at, message: `missing ${key}:` });
        continue;
      }
      check(value[key], fieldSchema, [...at, key], errors);
    }
    for (const key of Object.keys(value)) {
      if (!known.includes(key))
        errors.push({ at: [...at, key], message: `unknown field ${key}: (expected one of ${known.join(", ")})` });
    }
    const problem = errors.length === errorsBefore && schema.check ? schema.check(value) : null;
    if (problem) errors.push({ at, message: problem });
    return;
  }
  if (typeof value !== schema.kind) {
    errors.push({ at, message: `expected ${schema.kind}, got ${typeOf(value)}` });
  } else if (schema.kind === "string" && value.trim() === "") {
    errors.push({ at, message: "is empty" });
  }
}

/** Removes keys left empty (e.g. `end:` with no value), which mean "not set". */
function dropEmpty(value) {
  if (Array.isArray(value)) return value.map(dropEmpty);
  if (typeOf(value) !== "object") return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== null && v !== undefined)
      .map(([k, v]) => [k, dropEmpty(v)])
  );
}

/** Parses one content file, throwing a readable error with file:line on any problem. */
function parseContent(source, filePath) {
  const name = path.basename(filePath).replace(/\.ya?ml$/, "");
  const relative = path.relative(projectRoot, filePath);
  const schema = schemas[name];
  if (!schema) throw new Error(`${relative}: no schema for "${name}" (see scripts/content-schema.js)`);

  const lineCounter = new YAML.LineCounter();
  const doc = YAML.parseDocument(source, { lineCounter, prettyErrors: true, uniqueKeys: true });
  if (doc.errors.length) {
    throw new Error(doc.errors.map((error) => `${relative}: ${error.message}`).join("\n"));
  }

  const data = dropEmpty(doc.toJS());
  const errors = [];
  check(data, schema, [], errors);
  if (!errors.length) return data;

  const lineOf = (at) => {
    for (let depth = at.length; depth >= 0; depth--) {
      const node = doc.getIn(at.slice(0, depth), true);
      if (node && node.range) return lineCounter.linePos(node.range[0]).line;
    }
    return 1;
  };
  throw new Error(
    errors
      .map(({ at, message }) => `${relative}:${lineOf(at)}  ${at.join(".") || "(file)"} ${message}`)
      .join("\n")
  );
}

function readContent(name) {
  const filePath = path.join(contentDir, `${name}.yml`);
  return parseContent(fs.readFileSync(filePath, "utf8"), filePath);
}

if (require.main === module) {
  let failed = false;
  for (const name of Object.keys(schemas)) {
    try {
      readContent(name);
    } catch (error) {
      failed = true;
      console.error(error.message);
    }
  }
  const extra = fs
    .readdirSync(contentDir)
    .filter((file) => /\.ya?ml$/.test(file) && !schemas[file.replace(/\.ya?ml$/, "")]);
  extra.forEach((file) => {
    failed = true;
    console.error(`content/${file}: not used by the site (expected one of ${Object.keys(schemas).join(", ")}.yml)`);
  });
  if (failed) process.exit(1);
  console.log(`content/*.yml OK (${Object.keys(schemas).length} files)`);
}

module.exports = { parseContent, readContent, schemas };
