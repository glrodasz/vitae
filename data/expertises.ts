import { ExpertiseItem } from "../types/data";
import { fillYears } from "./content";
import { yearsOfExperience } from "./experience";
import { skillsContent } from "./skills";

export const expertises: ExpertiseItem[] = skillsContent.expertises.map((expertise) => ({
  title: expertise.title,
  subtitle: fillYears(expertise.subtitle, yearsOfExperience),
  items: expertise.items,
}));
