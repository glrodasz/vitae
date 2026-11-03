import siteYaml from "../content/site.yml";
import type { SiteContent } from "../types/content";
import { fillYears } from "./content";
import { yearsOfExperience } from "./experience";
import { profile } from "./profile";

const content = siteYaml as SiteContent;

/**
 * Canonical site URL for absolute OG/Twitter image URLs and canonical links.
 * Set NEXT_PUBLIC_SITE_URL in production (see .env.example).
 */
export const siteUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
  "https://vitae.guillermorodas.com";

/** Host shown in the CV's top bar so visitors know which site they are on. */
export const siteHost = new URL(siteUrl).host;

export const pageTitle = content.title;

export const resumePageTitle = content.cvTitle;

/** Static PDF generated from /resume by scripts/generate-pdf.mjs. */
export const pdfPath = "/guillermo-rodas-cv.pdf";
export const pdfDarkPath = "/guillermo-rodas-cv-dark.pdf";

/** The PDF that matches the theme the reader is looking at. */
export const pdfPathFor = (isDarkMode: boolean) => (isDarkMode ? pdfDarkPath : pdfPath);

export const defaultDescription = fillYears(content.description, yearsOfExperience);

export const resumeDescription = content.cvDescription;

/** 1200×630 social card (Open Graph / Twitter). */
export const ogImagePath = "/images/og-card.png";
export const ogImageAlt = content.socialImageAlt;

/** Portrait used as the Person image in structured data. */
export const portraitPath = "/images/guillermo-rodas.png";

export function absoluteUrl(path: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const sameAs = content.socialProfiles;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: defaultDescription,
  url: absoluteUrl("/"),
  image: absoluteUrl(portraitPath),
  email: `mailto:${profile.email}`,
  worksFor: { "@type": "Organization", name: "EQT Group", url: "https://eqtgroup.com" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockholm",
    addressCountry: "SE",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad Nacional de Colombia" },
    { "@type": "EducationalOrganization", name: "Hyper Island" },
  ],
  knowsAbout: content.topics,
  knowsLanguage: ["en", "es", "sv"],
  sameAs: [...sameAs],
} as const;
