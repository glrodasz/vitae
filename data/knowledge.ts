import educationContent from "../content/education.yml";
import type { SectionContent } from "../types/content";
import { KnowledgeSection } from "../types/data";
import { toSections } from "./content";

export const knowledge: KnowledgeSection[] = toSections(educationContent as SectionContent[]);
