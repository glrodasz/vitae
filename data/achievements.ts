import achievementsContent from "../content/achievements.yml";
import type { SectionContent } from "../types/content";
import { AchievementSection } from "../types/data";
import { toSections } from "./content";

export const achievements: AchievementSection[] = toSections(
  achievementsContent as SectionContent[]
);
