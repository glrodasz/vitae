import profileContent from "../content/profile.yml";
import type { ProfileContent } from "../types/content";

/** Year the professional career started (content/profile.yml → careerStart). */
export const careerStartYear = (profileContent as ProfileContent).careerStart;

export const yearsOfExperience = new Date().getFullYear() - careerStartYear;
