import { yearsOfExperience } from "./experience";

/**
 * Canonical site URL for absolute OG/Twitter image URLs and canonical links.
 * Set NEXT_PUBLIC_SITE_URL in production (see .env.example).
 */
export const siteUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
  "https://vitae.guillermorodas.com";

/** Host shown in the CV's top bar so visitors know which site they are on. */
export const siteHost = new URL(siteUrl).host;

export const pageTitle = "Guillermo Rodas · Curriculum Vitae";

export const resumePageTitle = "Guillermo Rodas · CV";

/** Static PDF generated from /resume by scripts/generate-pdf.mjs. */
export const pdfPath = "/guillermo-rodas-cv.pdf";
export const pdfDarkPath = "/guillermo-rodas-cv-dark.pdf";

/** The PDF that matches the theme the reader is looking at. */
export const pdfPathFor = (isDarkMode: boolean) => (isDarkMode ? pdfDarkPath : pdfPath);

export const defaultDescription = `Senior Forward Deployed Engineer in Sweden building production AI systems: agents, RAG and MCP. ${yearsOfExperience} years across web, backend and developer enablement.`;

export const resumeDescription =
  "Short CV of Guillermo Rodas, Senior Forward Deployed Engineer in Sweden.";

/** 1200×630 social card (Open Graph / Twitter). */
export const ogImagePath = "/images/og-card.png";
export const ogImageAlt =
  "Guillermo Rodas, Senior Forward Deployed Engineer. Curriculum Vitae.";

/** Portrait used as the Person image in structured data. */
export const portraitPath = "/images/guillermo-rodas.png";

export function absoluteUrl(path: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const sameAs = [
  "https://guillermorodas.com",
  "https://linkedin.com/in/guillermorodas",
  "https://github.com/glrodasz",
  "https://youtube.com/c/guillermorodas",
  "https://twitch.tv/guillermorodas",
  "https://x.com/germorodas",
  "https://instagram.com/germorodas",
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guillermo Rodas",
  jobTitle: "Senior Forward Deployed Engineer",
  description: defaultDescription,
  url: absoluteUrl("/"),
  image: absoluteUrl(portraitPath),
  email: "mailto:me@guillermorodas.com",
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
  knowsAbout: [
    "AI engineering",
    "AI agents",
    "Retrieval-augmented generation",
    "Model Context Protocol",
    "LangChain",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Google Cloud",
  ],
  knowsLanguage: ["en", "es", "sv"],
  sameAs: [...sameAs],
} as const;
