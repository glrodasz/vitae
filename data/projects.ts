import { Project } from "../types/data";

export const projects: Project[] = [
  {
    name: "Haggler",
    description:
      "Google ADK + Gemini agents tracking subscription prices in 67 countries. Grounded research, deterministic verdicts, hard cost ceilings.",
    stack: ["Python", "Vertex AI", "Astro"],
    links: [
      { label: "Repo", url: "github.com/glrodasz/haggler-agent" },
      { label: "Live", url: "haggler.guillermorodas.com" },
    ],
  },
  {
    name: "Nido",
    description:
      "Family viewing agent on ADK + Gemini, with prompt-injection evals and a shared multi-family app in three languages.",
    stack: ["Python", "Firebase", "Astro"],
    links: [
      { label: "Repo", url: "github.com/glrodasz/nido-agent" },
      { label: "Live", url: "nido.guillermorodas.com" },
    ],
  },
  {
    name: "Walleto",
    description: "Personal-finance planner with multi-currency and net worth.",
    stack: ["Next.js", "TypeScript", "Firestore", "Auth0"],
    links: [
      { label: "Repo", url: "github.com/glrodasz/walleto" },
      { label: "Live", url: "walleto.guillermorodas.com" },
    ],
  },
  {
    name: "Timepass",
    description: "Native Apple Silicon menu bar world clock with country flags. Pure AppKit + SwiftUI, no Electron.",
    stack: ["Swift", "SwiftUI", "AppKit", "macOS"],
    links: [
      { label: "Repo", url: "github.com/glrodasz/timepass" },
      { label: "Live", url: "timepass.guillermorodas.com" },
    ],
  },
];
