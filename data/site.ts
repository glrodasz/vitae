/**
 * Canonical site URL for absolute OG/Twitter image URLs and canonical links.
 * Set NEXT_PUBLIC_SITE_URL in production (see .env.example).
 */
export const siteUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
  "https://vitae.guillermorodas.com";

export const pageTitle = "Guillermo Rodas | Curriculum Vitae";

export const printPageTitle = "Guillermo Rodas | Curriculum Vitae — Print";

export const defaultDescription =
  "Senior full-stack JavaScript engineer in Sweden. I help developers grow while shipping quality products. Google Developer Expert, Auth0 Ambassador, and Twitch Partner.";

export const printDescription =
  "Print-friendly curriculum vitae for Guillermo Rodas — senior full-stack engineer, educator, and community contributor.";

export const ogImagePath = "/images/guillermo-rodas.png";

export function absoluteUrl(path: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const sameAs = [
  "https://guillermorodas.com",
  "https://youtube.com/c/guillermorodas",
  "https://twitch.tv/guillermorodas",
  "https://x.com/guillermorodas",
  "https://instagram.com/_guillermorodas",
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Guillermo Rodas",
  jobTitle: "Senior Full-stack Engineer",
  url: absoluteUrl("/"),
  image: absoluteUrl(ogImagePath),
  sameAs: [...sameAs],
} as const;
