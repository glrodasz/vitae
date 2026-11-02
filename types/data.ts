export interface Language {
  title: string;
  flag: string;
  proeficiency: string;
}

export interface Career {
  date: string | null;
  startDate: string;
  endDate: string | null;
  company: string;
  url: string;
  logo: string;
  about: string;
  functions: string;
  achievements: string[];
}

export interface StackItem {
  title: string;
  text: string;
}

export interface FrameworkItem {
  title: string;
  text: string;
}

export interface ExpertiseItem {
  title: string;
  subtitle: string;
  items: string[];
}

export interface KnowledgeItem {
  title: string;
  text: string | string[][];
  footer?: string;
}

export interface KnowledgeSection {
  title: string;
  items: KnowledgeItem[];
}

export interface AchievementItem {
  title: string;
  text: string | string[][];
  footer?: string;
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
