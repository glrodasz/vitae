/** Helpers shared by the data files that read content/*.yml. */
import type { SectionContent } from "../types/content";

/** Replaces the {years} placeholder with the years of experience. */
export const fillYears = (text: string, years: number) =>
  text.split("{years}").join(String(years));

/** Maps an education/achievements section to the view shape used by the pages. */
export const toSections = (sections: SectionContent[]) =>
  sections.map((section) => ({
    title: section.title,
    items: section.items.map((item) => ({
      title: item.title,
      ...(item.badge !== undefined && { badge: item.badge }),
      text: item.entries
        ? item.entries.map((entry) => [entry.name, entry.date])
        : (item.description as string),
      ...(item.date !== undefined && { footer: item.date }),
      ...(item.cv !== undefined && { resume: item.cv }),
    })),
  }));
