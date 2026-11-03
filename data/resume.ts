/**
 * View model for the CV (/resume, the PDF and resume.md).
 * Everything comes from the other data files; this only selects and
 * formats what is relevant for a short, Harvard-style CV.
 */
import { careers } from "./careers";
import { projects } from "./projects";
import { stack } from "./stack";
import { frameworks } from "./frameworks";
import { knowledge } from "./knowledge";
import { achievements } from "./achievements";
import { resumeSummary } from "./summary";
import { profile } from "./profile";

export interface ResumeExperience {
  company: string;
  tagline: string;
  role: string;
  dates: string;
  bullets: string[];
}

export interface ResumeLine {
  label: string;
  text: string;
  meta?: string;
}

const withoutTrailingPeriod = (text: string) => text.replace(/\.$/, "");

const formatEntries = (text: string | string[][]) =>
  Array.isArray(text)
    ? text.map(([title, date]) => `${title} (${date})`).join(", ")
    : text;

export const resumeProfile = profile;

export { resumeSummary };

export const resumeExperience: ResumeExperience[] = careers.map((career) => ({
  company: career.company,
  tagline: career.tagline,
  role: withoutTrailingPeriod(career.functions),
  dates: `${career.startDate} – ${career.endDate ?? "Present"}`,
  bullets: career.achievements
    .map((achievement) => achievement.resume)
    .filter((bullet): bullet is string => Boolean(bullet)),
}));

export const resumeProjects = projects;

/** Most relevant first; groups not listed keep their data order after these. */
const skillOrder = [
  "AI & LLM",
  "AI-first engineering",
  "Backend platforms",
  "Frontend frameworks",
  "Cloud & DevOps",
  "Data",
];

const skillRank = (title: string) => {
  const index = skillOrder.indexOf(title);
  return index === -1 ? skillOrder.length : index;
};

export const resumeSkills: ResumeLine[] = [...stack, ...frameworks]
  .filter((item) => item.resume)
  .sort((a, b) => skillRank(a.title) - skillRank(b.title))
  .map((item) => ({ label: item.title, text: item.resume as string }));

export const resumeEducation: ResumeLine[] = knowledge
  .flatMap((section) => section.items)
  .filter((item) => item.resume)
  .map((item) => ({
    label: item.badge ? `${item.title} (${item.badge.toLowerCase()})` : item.title,
    text: formatEntries(item.text),
    meta: item.footer,
  }));

export const resumeRecognition: ResumeLine[] = achievements
  .flatMap((section) => section.items)
  .filter((item) => item.resume)
  .map((item) => ({
    label: item.title,
    text: item.footer
      ? `${formatEntries(item.text)} (${item.footer})`
      : formatEntries(item.text),
  }));
