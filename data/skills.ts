import skillsYaml from "../content/skills.yml";
import type { SkillContent, SkillsContent } from "../types/content";

export const skillsContent = skillsYaml as SkillsContent;

export const toSkillItem = (skill: SkillContent) => ({
  title: skill.title,
  text: skill.description,
  ...(skill.cv && { resume: skill.cv }),
});
