import summaryContent from "../content/summary.yml";
import type { SummaryContent } from "../types/content";
import { fillYears } from "./content";
import { yearsOfExperience } from "./experience";

const content = summaryContent as SummaryContent;

export const summary: string[] = content.paragraphs.map((paragraph) =>
  fillYears(paragraph, yearsOfExperience)
);

/** Short summary for the CV (2–3 lines). */
export const resumeSummary = fillYears(content.cv, yearsOfExperience);
