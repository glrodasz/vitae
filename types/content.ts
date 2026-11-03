/**
 * Shapes of the editable content in content/*.yml.
 * scripts/content-schema.js validates the files against the same shapes;
 * data/*.ts maps them to the view types in types/data.ts.
 */

export interface LinkContent {
  label: string;
  url: string;
}

export interface ProfileContent {
  name: string;
  role: string;
  tagline: string;
  location: string;
  origin: string;
  documentLabel: string;
  email: string;
  /** Year the professional career started; drives {years}. */
  careerStart: number;
  website: LinkContent;
  links: LinkContent[];
  languages: { name: string; flag: string; level: string }[];
}

export interface SummaryContent {
  cv: string;
  paragraphs: string[];
}

export interface AchievementContent {
  title: string;
  description: string;
  tech?: string[];
  cv?: string;
}

export interface CareerContent {
  company: string;
  url: string;
  logo: string;
  start: string;
  /** Omitted for the current job. */
  end?: string;
  role: string;
  tagline: string;
  about: string;
  achievements: AchievementContent[];
}

export interface ProjectContent {
  name: string;
  description: string;
  stack: string[];
  links: LinkContent[];
}

export interface SkillContent {
  title: string;
  description: string;
  cv?: string;
}

export interface SkillsContent {
  expertises: { title: string; subtitle: string; items: string[] }[];
  stack: SkillContent[];
  frameworks: SkillContent[];
  cvOrder: string[];
}

export interface EntryContent {
  name: string;
  date: string;
}

export interface SectionItemContent {
  title: string;
  badge?: string;
  description?: string;
  entries?: EntryContent[];
  date?: string;
  cv?: boolean;
}

export interface SectionContent {
  title: string;
  items: SectionItemContent[];
}

export interface SiteContent {
  title: string;
  cvTitle: string;
  description: string;
  cvDescription: string;
  socialImageAlt: string;
  topics: string[];
  socialProfiles: string[];
}
