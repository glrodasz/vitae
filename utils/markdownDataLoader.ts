import type {
  AchievementSection,
  Career,
  ExpertiseItem,
  FrameworkItem,
  KnowledgeSection,
  Language,
  StackItem,
} from "../types/data";

export interface MarkdownData {
  summary: string[];
  languages: Language[];
  expertises: ExpertiseItem[];
  stack: StackItem[];
  frameworks: FrameworkItem[];
  careers: Career[];
  knowledge: KnowledgeSection[];
  achievements: AchievementSection[];
}

type SectionMap = Map<string, string>;

type BulletGroup = {
  text: string;
  children: string[];
};

const HEADING_REGEX = /^#\s+(.+?)\s*$/gm;

const REQUIRED_SECTIONS: (keyof MarkdownData)[] = [
  "summary",
  "languages",
  "expertises",
  "stack",
  "frameworks",
  "careers",
  "knowledge",
  "achievements",
];

function normaliseHeading(heading: string): string {
  return heading.trim().toLowerCase();
}

function extractSections(markdown: string): SectionMap {
  const sections: SectionMap = new Map();
  const matches = [...markdown.matchAll(HEADING_REGEX)];

  matches.forEach((match, index) => {
    const heading = match[1];
    const start = match.index ?? 0;
    const end =
      index < matches.length - 1
        ? (matches[index + 1].index as number)
        : markdown.length;
    const sectionBody = markdown.slice(start, end);
    sections.set(normaliseHeading(heading), sectionBody.trim());
  });

  return sections;
}

function stripHeading(section: string): string {
  return section.replace(/^#.+?(\n|$)/, "").trim();
}

function splitBySubheading(
  section: string,
  level: number,
  context: string,
): { title: string; body: string }[] {
  const headingPrefix = "#".repeat(level);
  const regex = new RegExp(`^${headingPrefix}\\s+(.+?)\\s*$`, "gm");
  const body = stripHeading(section);
  const matches = [...body.matchAll(regex)];

  if (matches.length === 0) {
    throw new Error(
      `${context} section must include at least one ${headingPrefix} subheading.`,
    );
  }

  return matches.map((match, index) => {
    const title = match[1].trim();
    const start = match.index ?? 0;
    const end =
      index < matches.length - 1 ? (matches[index + 1].index as number) : body.length;
    const subsectionBody = body.slice(start, end);

    return {
      title,
      body: subsectionBody.replace(regex, "").trim(),
    };
  });
}

function parseParagraphs(body: string, context: string): string[] {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  if (paragraphs.length === 0) {
    throw new Error(`${context} section must include at least one paragraph.`);
  }

  return paragraphs;
}

function ensureNonEmpty(value: string | null, context: string): string {
  if (!value) {
    throw new Error(`${context} must not be empty.`);
  }

  return value;
}

function parseHumanReadableLanguageHeader(
  line: string,
  index: number,
): { flag: string; title: string } {
  const cleanedLine = line.replace(/^[-*]\s*/, "").trim();
  const boldMatch = /\*\*(.+?)\*\*/.exec(cleanedLine);

  if (!boldMatch) {
    throw new Error(
      `languages[${index}] must wrap the language name in **double asterisks**.`,
    );
  }

  const title = boldMatch[1].trim();
  const prefix = cleanedLine.slice(0, boldMatch.index).trim();

  if (!prefix) {
    throw new Error(
      `languages[${index}] must include a flag emoji before the language name.`,
    );
  }

  const tokens = prefix.split(/\s+/);
  const flag = tokens[tokens.length - 1];

  if (!flag) {
    throw new Error(
      `languages[${index}] must include a flag emoji before the language name.`,
    );
  }

  return { flag, title };
}

function parseHumanReadableLanguages(section: string): Language[] {
  const body = stripHeading(section);

  if (!body) {
    throw new Error("languages section must include at least one language entry.");
  }

  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) {
    throw new Error("languages section must include at least one language entry.");
  }

  return paragraphs.map((paragraph, index) => {
    const lines = paragraph
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length < 2) {
      throw new Error(
        `languages[${index}] must include a proficiency line beneath the language name.`,
      );
    }

    const [header, ...rest] = lines;
    const { flag, title } = parseHumanReadableLanguageHeader(header, index);
    const proficiency = rest.join(" ").trim();

    if (!proficiency) {
      throw new Error(
        `languages[${index}] must provide a proficiency description on the following line(s).`,
      );
    }

    return {
      title,
      flag,
      proeficiency: proficiency,
    };
  });
}

function parseLanguages(section: string): Language[] {
  if (section.includes("```")) {
    throw new Error("languages section no longer supports fenced JSON blocks.");
  }

  return parseHumanReadableLanguages(section);
}

function parseSimpleBulletList(
  lines: string[],
  context: string,
): string[] {
  const items: string[] = [];
  let current: string | null = null;

  const flush = () => {
    if (current) {
      items.push(current.trim());
      current = null;
    }
  };

  lines.forEach((line) => {
    if (!line.trim()) {
      flush();
      return;
    }

    const match = /^\s*[-*]\s+(.*)$/.exec(line);

    if (match) {
      flush();
      current = match[1].trim();
      return;
    }

    if (!current) {
      throw new Error(`${context} contains text outside of a bullet list.`);
    }

    current += ` ${line.trim()}`;
  });

  flush();

  if (items.length === 0) {
    throw new Error(`${context} must include at least one bullet item.`);
  }

  return items;
}

function parseExpertises(section: string): ExpertiseItem[] {
  const subsections = splitBySubheading(section, 2, "expertises");

  return subsections.map(({ title, body }, index) => {
    const lines = body.split(/\r?\n/);
    const firstContentLineIndex = lines.findIndex((line) => line.trim().length > 0);

    if (firstContentLineIndex === -1) {
      throw new Error(`expertises[${index}] must include a subtitle and bullet list.`);
    }

    const subtitleLine = lines[firstContentLineIndex].trim();
    const remainingLines = lines.slice(firstContentLineIndex + 1);

    const subtitleMatch = /^Since\s+(\d{4})(?:\s+[—-]\s+(.+))?$/.exec(subtitleLine);

    if (!subtitleMatch) {
      throw new Error(
        `expertises[${index}] subtitle must follow the pattern "Since <year> — <label>".`,
      );
    }

    const year = Number.parseInt(subtitleMatch[1], 10);
    const label = subtitleMatch[2]?.trim() ?? "years of experience";
    const currentYear = new Date().getFullYear();
    const subtitle = `${currentYear - year} ${label}`;

    const items = parseSimpleBulletList(
      remainingLines,
      `expertises[${index}].items`,
    );

    return {
      title,
      subtitle,
      items,
    };
  });
}

function parseStackLikeSection(
  section: string,
  sectionName: "stack" | "frameworks",
): StackItem[] | FrameworkItem[] {
  const body = stripHeading(section);
  const lines = body.split(/\r?\n/);
  const items = parseSimpleBulletList(lines, `${sectionName}`);

  return items.map((item, index) => {
    const match = /^\*\*(.+?)\*\*\s*(?:[-—:]\s*)(.+)$/.exec(item);

    if (!match) {
      throw new Error(
        `${sectionName}[${index}] must follow the pattern "- **Title** — Description".`,
      );
    }

    const [, title, text] = match;

    return {
      title: title.trim(),
      text: text.trim(),
    };
  });
}

function parseTupleEntry(
  text: string,
  context: string,
  index: number,
): [string, string] {
  const match = /^(.*?)\s*(?:[-—:]\s+)(.+)$/.exec(text);

  if (!match) {
    throw new Error(
      `${context}[${index}] must follow the pattern "Label — Value". Received: ${text}`,
    );
  }

  return [match[1].trim(), match[2].trim()];
}

function parseBulletGroups(body: string, context: string): BulletGroup[] {
  const lines = body.split(/\r?\n/);
  const groups: BulletGroup[] = [];
  const bullets: { level: number; text: string }[] = [];
  let current: { level: number; text: string } | null = null;

  const flushCurrent = () => {
    if (current) {
      bullets.push(current);
      current = null;
    }
  };

  lines.forEach((line) => {
    if (!line.trim()) {
      flushCurrent();
      return;
    }

    const match = /^(\s*)[-*]\s+(.*)$/.exec(line);

    if (match) {
      flushCurrent();
      const indent = match[1];
      const level = Math.floor(indent.length / 2);
      current = { level, text: match[2].trim() };
      return;
    }

    if (!current) {
      throw new Error(`${context} contains text outside of a bullet list.`);
    }

    current.text += ` ${line.trim()}`;
  });

  flushCurrent();

  bullets.forEach((bullet) => {
    if (bullet.level === 0) {
      groups.push({ text: bullet.text, children: [] });
      return;
    }

    if (bullet.level !== 1) {
      throw new Error(`${context} only supports one level of nested bullets.`);
    }

    const parent = groups[groups.length - 1];

    if (!parent) {
      throw new Error(`${context} has a nested bullet without a parent item.`);
    }

    parent.children.push(bullet.text);
  });

  if (groups.length === 0) {
    throw new Error(`${context} must include at least one bullet item.`);
  }

  return groups;
}

function extractFooter(text: string): { content: string; footer?: string } {
  const footerMatch = /_(.+)_$/.exec(text.trim());

  if (!footerMatch) {
    return { content: text.trim() };
  }

  const content = text.slice(0, footerMatch.index).trim();
  const footer = footerMatch[1].trim();

  return { content, footer };
}

function parseRichListItem(
  group: BulletGroup,
  context: string,
  index: number,
): KnowledgeSection["items"][number] {
  const titleMatch = /^\*\*(.+?)\*\*/.exec(group.text);

  if (!titleMatch) {
    throw new Error(
      `${context}[${index}] must wrap the item title in **double asterisks**.`,
    );
  }

  const title = titleMatch[1].trim();
  const afterTitle = group.text.slice(titleMatch[0].length).trim();
  const { content, footer } = extractFooter(afterTitle);
  let text: string | string[][] | null = null;

  if (group.children.length > 0) {
    if (content) {
      throw new Error(
        `${context}[${index}] cannot include both nested entries and inline text.`,
      );
    }

    text = group.children.map((child, childIndex) =>
      parseTupleEntry(child, `${context}[${index}].text`, childIndex),
    );
  } else {
    const cleanedContent = content.replace(/^[-—:]\s*/, "").trim();

    text = ensureNonEmpty(cleanedContent, `${context}[${index}].text`);
  }

  const item: KnowledgeSection["items"][number] = {
    title,
    text,
  };

  if (footer) {
    item.footer = ensureNonEmpty(footer, `${context}[${index}].footer`);
  }

  return item;
}

function parseRichListSection(
  section: string,
  sectionName: "knowledge" | "achievements",
): KnowledgeSection[] | AchievementSection[] {
  const subsections = splitBySubheading(section, 2, sectionName);

  return subsections.map(({ title, body }, sectionIndex) => {
    const groups = parseBulletGroups(
      body,
      `${sectionName}[${sectionIndex}]`,
    );

    return {
      title,
      items: groups.map((group, index) =>
        parseRichListItem(group, `${sectionName}[${sectionIndex}].items`, index),
      ),
    } as KnowledgeSection | AchievementSection;
  });
}

function parseCareers(section: string): Career[] {
  const subsections = splitBySubheading(section, 2, "careers");

  return subsections.map(({ title, body }, index) => {
    const lines = body.split(/\r?\n/);
    const keyMap: Record<string, keyof Career> = {
      Date: "date",
      "Start Date": "startDate",
      "End Date": "endDate",
      URL: "url",
      Logo: "logo",
      About: "about",
      Functions: "functions",
    };
    const details: Partial<Career> = { company: title };
    let currentKey: keyof Career | null = null;

    const achievementsHeadingIndex = lines.findIndex((line) =>
      /^###\s+/i.test(line.trim()),
    );

    const detailLines =
      achievementsHeadingIndex === -1 ? lines : lines.slice(0, achievementsHeadingIndex);

    detailLines.forEach((line) => {
      const trimmed = line.trim();

      if (!trimmed) {
        currentKey = null;
        return;
      }

      const kvMatch = /^([A-Za-z ]+):\s*(.*)$/.exec(trimmed);

      if (kvMatch) {
        const [, rawKey, rawValue] = kvMatch;
        const mappedKey = keyMap[rawKey];

        if (!mappedKey) {
          throw new Error(
            `careers[${index}] contains unknown field "${rawKey}". Expected one of: ${Object.keys(
              keyMap,
            ).join(", ")}.`,
          );
        }

        currentKey = mappedKey;
        details[mappedKey] = rawValue.trim() || null;
        return;
      }

      if (!currentKey) {
        throw new Error(
          `careers[${index}] has text outside recognised key/value lines: "${trimmed}".`,
        );
      }

      const previousValue = details[currentKey];
      const nextValue = previousValue ? `${previousValue} ${trimmed}` : trimmed;
      details[currentKey] = nextValue as Career[keyof Career];
    });

    (details.startDate as string | undefined) = ensureNonEmpty(
      (details.startDate as string | null) ?? "",
      `careers[${index}].startDate`,
    );
    (details.url as string | undefined) = ensureNonEmpty(
      (details.url as string | null) ?? "",
      `careers[${index}].url`,
    );
    (details.logo as string | undefined) = ensureNonEmpty(
      (details.logo as string | null) ?? "",
      `careers[${index}].logo`,
    );
    (details.about as string | undefined) = ensureNonEmpty(
      (details.about as string | null) ?? "",
      `careers[${index}].about`,
    );
    (details.functions as string | undefined) = ensureNonEmpty(
      (details.functions as string | null) ?? "",
      `careers[${index}].functions`,
    );

    const achievementsLines =
      achievementsHeadingIndex === -1 ? [] : lines.slice(achievementsHeadingIndex + 1);
    const achievements = parseSimpleBulletList(
      achievementsLines,
      `careers[${index}].achievements`,
    );

    return {
      date: (details.date as string | null) ?? null,
      startDate: details.startDate as string,
      endDate: (details.endDate as string | null) ?? null,
      company: title,
      url: details.url as string,
      logo: details.logo as string,
      about: details.about as string,
      functions: details.functions as string,
      achievements,
    };
  });
}

export function parseMarkdownData(markdown: string): MarkdownData {
  const sections = extractSections(markdown);

  REQUIRED_SECTIONS.forEach((sectionName) => {
    if (!sections.has(sectionName)) {
      throw new Error(`Missing required section "${sectionName}" in Markdown.`);
    }
  });

  const summary = parseParagraphs(stripHeading(sections.get("summary") as string), "summary");
  const languages = parseLanguages(sections.get("languages") as string);
  const expertises = parseExpertises(sections.get("expertises") as string);
  const stack = parseStackLikeSection(sections.get("stack") as string, "stack") as StackItem[];
  const frameworks = parseStackLikeSection(
    sections.get("frameworks") as string,
    "frameworks",
  ) as FrameworkItem[];
  const careers = parseCareers(sections.get("careers") as string);
  const knowledge = parseRichListSection(
    sections.get("knowledge") as string,
    "knowledge",
  ) as KnowledgeSection[];
  const achievements = parseRichListSection(
    sections.get("achievements") as string,
    "achievements",
  ) as AchievementSection[];

  return {
    summary,
    languages,
    expertises,
    stack,
    frameworks,
    careers,
    knowledge,
    achievements,
  };
}

export function loadMarkdownDataFromFile(filePath: string): MarkdownData {
  // Use a dynamic require so the dependency on `fs` is not bundled into client code.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { readFileSync } = require("node:fs") as typeof import("node:fs");
  const content = readFileSync(filePath, "utf8");
  return parseMarkdownData(content);
}
