import careersContent from "../content/careers.yml";
import type { CareerContent } from "../types/content";
import { Career } from "../types/data";

const startYear = (date: string) => date.split(" ").pop() as string;

export const careers: Career[] = (careersContent as CareerContent[]).map((career) => ({
  // The timeline shows the start year; the current job shows this year instead.
  date: career.end ? startYear(career.start) : null,
  startDate: career.start,
  endDate: career.end ?? null,
  company: career.company,
  url: career.url,
  logo: career.logo,
  tagline: career.tagline,
  about: career.about,
  functions: `${career.role}.`,
  achievements: career.achievements.map((achievement) => ({
    title: achievement.title,
    description: achievement.description,
    ...(achievement.tech && { tech: achievement.tech }),
    ...(achievement.cv && { resume: achievement.cv }),
  })),
}));
