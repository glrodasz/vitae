import { FrameworkItem } from "../types/data";
import { skillsContent, toSkillItem } from "./skills";

export const frameworks: FrameworkItem[] = skillsContent.frameworks.map(toSkillItem);
