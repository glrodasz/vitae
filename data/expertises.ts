import { ExpertiseItem } from "../types/data";

export const expertises: ExpertiseItem[] = [
  {
    title: "AI & LLM Engineering",
    subtitle: "Hands-on in production",
    items: [
      "Building RAG pipelines with PGVector, LangChain, and LangSmith for semantic search and agentic workflows, integrating LLM APIs from OpenAI, Anthropic, and Google in production systems at EQT.",
    ],
  },
  {
    title: "Full-stack Web Engineering",
    subtitle: `${new Date().getFullYear() - 2012} years of experience`,
    items: [
      "React, TypeScript, and Next.js on the frontend; Node.js, Python, and GraphQL on the backend, shipping at scale across Klarna, Auth0, and EQT with microfrontend architectures and design systems.",
    ],
  },
  {
    title: "Developer Enablement",
    subtitle: "Former Google Developer Expert",
    items: [
      "Trained hundreds of developers as a bootcamp instructor and online teacher across Latin America and Europe, and shared knowledge at international conferences including DevFest, Nerdearla, and EpicHey!.",
    ],
  },
];
