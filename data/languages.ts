import profileContent from "../content/profile.yml";
import type { ProfileContent } from "../types/content";
import { Language } from "../types/data";

export const languages: Language[] = (profileContent as ProfileContent).languages.map(
  (language) => ({
    title: language.name,
    flag: language.flag,
    proeficiency: language.level,
  })
);
