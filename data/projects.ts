import projectsContent from "../content/projects.yml";
import type { ProjectContent } from "../types/content";
import { Project } from "../types/data";

export const projects: Project[] = projectsContent as ProjectContent[];
