import { StackItem } from "../types/data";
import { skillsContent, toSkillItem } from "./skills";

export const stack: StackItem[] = skillsContent.stack.map(toSkillItem);
