import { Career } from "../types/data";

export const careers: Career[] = [
  {
    date: null,
    startDate: "August 2021",
    endDate: null,
    company: "EQT Group",
    url: "www.eqtgroup.com",
    logo: "eqt",
    tagline: "Global investment organization, €350B+ in assets",
    about:
      "EQT is a global investment organization managing €350B+ in assets. Its proprietary AI platform, Motherbrain, monitors 10M+ companies and has directly sourced investments valued at hundreds of millions of euros.",
    functions: "Senior Forward Deployed Engineer.",
    achievements: [
      {
        title: "Forward Deployed Engineer, Infrastructure",
        description:
          "Take the investment team's hackathon prototypes to production, starting with agentic screening of add-on M&A targets and an earnings-call screener for listed infrastructure companies, delivered as reusable agent skills over MCP data connectors.",
        resume:
          "Take the investment team's hackathon prototypes to production: agentic screening of add-on M&A targets and an earnings-call screener, delivered as reusable agent skills over MCP data connectors.",
      },
      {
        title: "AI Platform",
        description:
          "Contributed to EQT's internal platform for AI agents (model gateway, agent identity, MCP layer); defined its adoption funnel metrics and built the dashboard tracking agent registrations, model traffic and MCP tool usage.",
        resume:
          "Contributed to the internal platform for AI agents (model gateway, agent identity, MCP layer); defined its adoption funnel metrics and built the usage dashboard.",
      },
      {
        title: "AI-Powered Deal Intelligence Tools",
        description:
          "Built and shipped internal AI tools that leverage LLMs to streamline investment opportunity screening and enable faster, data-driven decision-making. Implemented RAG pipelines with PGVector for semantic search over proprietary deal data, and integrated LangChain-based workflows with LangSmith observability for production monitoring.",
        tech: ["Next.js", "TypeScript", "Python", "LangChain", "LangSmith", "Google ADK", "CopilotKit", "PostgreSQL", "PGVector", "GCP", "BigQuery", "ElasticSearch", "Datadog"],
        resume:
          "Built LLM tools for investment screening, with RAG over proprietary deal data (PGVector, LangChain) and LangSmith observability in production.",
      },
      {
        title: "Design System Foundations",
        description:
          "Established the foundations of a shared Design System with component scaffolding and automated testing infrastructure, enabling consistent UI/UX patterns across internal products and reducing frontend fragmentation across teams.",
        tech: ["React", "TypeScript", "Storybook", "Playwright", "Design Tokens"],
        resume:
          "Established the foundations of a shared Design System with component scaffolding and automated testing across internal products.",
      },
      {
        title: "Engineering Culture & Tech Debt Reduction",
        description:
          "Led cross-team technical improvement initiatives, introduced new technologies, and organized recurring knowledge-sharing sessions that improved engineering practices and accelerated onboarding for new team members.",
      },
    ],
  },
  {
    date: "2019",
    startDate: "September 2019",
    endDate: "August 2021",
    company: "Klarna",
    url: "www.klarna.com",
    logo: "klarna",
    tagline: "Global fintech serving 87M+ consumers",
    about:
      "Klarna is a global fintech serving 87M+ consumers and 250,000+ merchants, processing over 1M transactions daily across 17 markets. Valued at $10.65B in 2020 and later at $45.6B in 2021.",
    functions: "Engineer (Foundations team).",
    achievements: [
      {
        title: "Microfrontend Platform Infrastructure",
        description:
          "As a member of the Foundations team, designed and maintained 20+ shared UI packages consumed by 5+ product teams. These microfrontend packages formed the core interface layer used in Klarna's flagship checkout, payments, and consumer-facing products, supporting experiences that served millions of transactions daily.",
        tech: ["React", "TypeScript", "JavaScript", "Microfrontend Architecture", "NPM", "Yarn Workspaces"],
        resume:
          "Designed and maintained 20+ shared microfrontend UI packages consumed by 5+ product teams across checkout, payments and consumer products.",
      },
      {
        title: "Continuous Delivery Transformation",
        description:
          "Drove improvements to the continuous delivery pipeline, transitioning the team from 5–10 scattered micro-deployments to a streamlined daily deployment cadence with on-demand hotfix capability, directly reducing deployment friction and improving release reliability for dependent teams.",
        tech: ["CI/CD", "NPM scripts", "automated testing", "deployment pipelines"],
        resume:
          "Moved the team from 5–10 scattered micro-deployments to a daily deployment cadence with on-demand hotfixes.",
      },
    ],
  },
  {
    date: "2016",
    startDate: "October 2016",
    endDate: "September 2019",
    company: "Auth0",
    url: "www.auth0.com",
    logo: "auth0",
    tagline: "Cloud identity platform, now part of Okta",
    about:
      "Auth0 is a cloud identity platform (now part of Okta) that safeguards billions of login transactions monthly. During this period, the company achieved 80–100% annual growth in revenue and customers, raised a $103M Series E reaching $1B+ valuation, and expanded from ~100 to 578 employees across 33 countries.",
    functions: "Engineer.",
    achievements: [
      {
        title: "Internal Products & Developer Tooling",
        description:
          "Developed multiple internal products powering Auth0's platform operations, using Hapi.js, MongoDB, React, and Redux. Enhanced the team's development workflow by introducing Storybook for component development and snapshot testing for regression prevention, which improved development velocity and reduced visual regressions across the product suite.",
        tech: ["React", "Redux", "Hapi.js", "MongoDB", "Node.js", "Storybook", "snapshot testing"],
        resume:
          "Developed internal products powering platform operations (React, Redux, Hapi.js, MongoDB); introduced Storybook and snapshot testing to prevent regressions.",
      },
    ],
  },
  {
    date: "2015",
    startDate: "May 2015",
    endDate: "October 2016",
    company: "Huge",
    url: "www.huge.com",
    logo: "huge",
    tagline: "Global digital agency for Fortune 500 brands",
    about:
      "Huge is a global digital agency working with Fortune 500 brands to redefine what's possible for the world's most ambitious companies.",
    functions: "Web Engineer.",
    achievements: [
      {
        title: "Fintech Web Application",
        description:
          "Contributed to a Fintech web app using React and Redux, optimized for cross-browser and cross-device compatibility, including legacy support for IE10 on Windows and Safari on iPhone 4S.",
        tech: ["React", "Redux", "Vanilla JavaScript", "cross-browser development"],
        resume:
          "Built a cross-browser, cross-device fintech web app with React and Redux, and led frontend on a performance-critical mobile web app.",
      },
      {
        title: "Mobile Web Performance",
        description:
          "Led frontend development on a performance-critical mobile web app, ensuring seamless behavior across diverse devices and browsers.",
      },
      {
        title: "Technical Training",
        description:
          "Facilitated multiple technical training sessions for both Frontend and QA teams, raising engineering standards across the office.",
      },
    ],
  },
  {
    date: "2012",
    startDate: "August 2012",
    endDate: "May 2015",
    company: "Komet Sales",
    url: "www.kometsales.com",
    logo: "komet",
    tagline: "SaaS platform for the floral industry",
    about:
      "Komet is a SaaS platform for the floral industry that gives businesses the tools to automate processes while connecting with their key business partners.",
    functions: "Full-stack Developer.",
    achievements: [
      {
        title: "Platform Engineering",
        description:
          "Played a key role in multiple corporate projects using MySQL and Java (Spring, Hibernate), and led the definition of the frontend architecture and tech stack for the company's products.",
        tech: ["Java", "Spring", "Hibernate", "MySQL", "JavaScript"],
        resume:
          "Delivered corporate projects in Java (Spring, Hibernate) and MySQL, and led the definition of the frontend architecture.",
      },
      {
        title: "Process Modernization",
        description:
          "Drove the migration from SVN to Git and championed the adoption of Scrum, fundamentally improving development velocity and team collaboration.",
        resume:
          "Drove the migration from SVN to Git and the adoption of Scrum.",
      },
    ],
  },
];
