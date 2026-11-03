import profileContent from "../content/profile.yml";
import type { ProfileContent } from "../types/content";
import { Profile } from "../types/data";

const content = profileContent as ProfileContent;

export const profile: Profile = {
  name: content.name,
  role: content.role,
  tagline: content.tagline,
  location: content.location,
  origin: content.origin,
  documentLabel: content.documentLabel,
  email: content.email,
  website: content.website,
  links: content.links,
};
