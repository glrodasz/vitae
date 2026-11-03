export interface Language {
  title: string;
  flag: string;
  proeficiency: string;
}

export interface Achievement {
  title: string;
  description: string;
  tech?: string[];
  /** Short bullet for the one-page CV. Omit to keep it off the CV. */
  resume?: string;
}

export interface Career {
  date: string | null;
  startDate: string;
  endDate: string | null;
  company: string;
  url: string;
  logo: string;
  /** One-line company description for the CV. */
  tagline: string;
  about: string;
  functions: string;
  achievements: Achievement[];
}

export interface StackItem {
  title: string;
  text: string;
  /** Comma-separated keywords for the CV. Omit to keep it off the CV. */
  resume?: string;
}

export interface FrameworkItem {
  title: string;
  text: string;
  resume?: string;
}

export interface ExpertiseItem {
  title: string;
  subtitle: string;
  items: string[];
}

export interface KnowledgeItem {
  title: string;
  /** Short qualifier shown as a tag next to the title, e.g. "Undergraduate". */
  badge?: string;
  text: string | string[][];
  footer?: string;
  /** Show this item on the CV. */
  resume?: boolean;
}

export interface KnowledgeSection {
  title: string;
  items: KnowledgeItem[];
}

export interface AchievementItem {
  title: string;
  text: string | string[][];
  footer?: string;
  /** Show this item on the CV. */
  resume?: boolean;
}

export interface AchievementSection {
  title: string;
  items: AchievementItem[];
}

export interface Data {
  languages: Language[];
  summary: string[];
  expertises: ExpertiseItem[];
  stack: StackItem[];
  frameworks: FrameworkItem[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  /** One-line pitch shown under the role on the web CV. */
  tagline: string;
  /** Country of origin, shown next to the current location. */
  origin: string;
  /** Label of the document, shown in the CV's top bar. */
  documentLabel: string;
  location: string;
  website: ContactLink;
  email: string;
  links: ContactLink[];
}
