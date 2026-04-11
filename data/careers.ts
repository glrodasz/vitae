import { Career } from "../types/data";

export const careers: Career[] = [
  {
    date: null,
    startDate: "August 2021",
    endDate: null,
    company: "EQT Group",
    url: "www.eqtgroup.com",
    logo: "eqt",
    about:
      "EQT is a global investment organization managing €130B+ in assets. Its proprietary AI platform, Motherbrain, monitors 10M+ companies and has directly sourced investments valued at hundreds of millions of euros.",
    functions: "Senior Full-stack AI Engineer.",
    achievements: [
      "AI-Powered Deal Intelligence Tools — Built and shipped internal AI tools that leverage LLMs to streamline investment opportunity screening and enable faster, data-driven decision-making. Implemented RAG pipelines with PGVector for semantic search over proprietary deal data, and integrated LangChain-based workflows with LangSmith observability for production monitoring. Tech: Next.js, TypeScript, Python, LangChain, LangSmith, Google ADK, CopilotKit, PostgreSQL, PGVector, GCP, BigQuery, ElasticSearch, Datadog.",
      "Design System Foundations — Established the foundations of a shared Design System with component scaffolding and automated testing infrastructure, enabling consistent UI/UX patterns across internal products and reducing frontend fragmentation across teams. Tech: React, TypeScript, Storybook, Playwright, Design Tokens.",
      "Engineering Culture & Tech Debt Reduction — Led cross-team technical improvement initiatives, introduced new technologies, and organized recurring knowledge-sharing sessions that improved engineering practices and accelerated onboarding for new team members.",
    ],
  },
  {
    date: "2019",
    startDate: "September 2019",
    endDate: "August 2021",
    company: "Klarna",
    url: "www.klarna.com",
    logo: "klarna",
    about:
      "Klarna is a global fintech serving 87M+ consumers and 250,000+ merchants, processing over 1M transactions daily across 17 markets. Valued at $10.65B in 2020 and later at $45.6B in 2021.",
    functions: "Engineer (Foundations team).",
    achievements: [
      "Microfrontend Platform Infrastructure — As a member of the Foundations team, designed and maintained 20+ shared UI packages consumed by 5+ product teams. These microfrontend packages formed the core interface layer used in Klarna's flagship checkout, payments, and consumer-facing products — supporting experiences that served millions of transactions daily. Tech: React, TypeScript, JavaScript, Microfrontend Architecture, NPM, Yarn Workspaces.",
      "Continuous Delivery Transformation — Drove improvements to the continuous delivery pipeline, transitioning the team from 5–10 scattered micro-deployments to a streamlined daily deployment cadence with on-demand hotfix capability, directly reducing deployment friction and improving release reliability for dependent teams. Tech: CI/CD, NPM scripts, automated testing, deployment pipelines.",
    ],
  },
  {
    date: "2016",
    startDate: "October 2016",
    endDate: "September 2019",
    company: "Auth0",
    url: "www.auth0.com",
    logo: "auth0",
    about:
      "Auth0 is a cloud identity platform (now part of Okta) that safeguards billions of login transactions monthly. During this period, the company achieved 80–100% annual growth in revenue and customers, raised a $103M Series E reaching $1B+ valuation, and expanded from ~100 to 578 employees across 33 countries.",
    functions: "Engineer.",
    achievements: [
      "Internal Products & Developer Tooling — Developed multiple internal products powering Auth0's platform operations, using Hapi.js, MongoDB, React, and Redux. Enhanced the team's development workflow by introducing Storybook for component development and snapshot testing for regression prevention — tools that improved development velocity and reduced visual regressions across the product suite. Tech: React, Redux, Hapi.js, MongoDB, Node.js, Storybook, snapshot testing.",
    ],
  },
  {
    date: "2015",
    startDate: "May 2015",
    endDate: "October 2016",
    company: "Huge",
    url: "www.huge.com",
    logo: "huge",
    about:
      "Huge is a global digital agency working with Fortune 500 brands to redefine what's possible for the world's most ambitious companies.",
    functions: "Web Engineer.",
    achievements: [
      "Fintech Web Application — Contributed to a Fintech web app using React and Redux, optimized for cross-browser and cross-device compatibility, including legacy support for IE10 on Windows and Safari on iPhone 4S. Tech: React, Redux, Vanilla JavaScript, cross-browser development.",
      "Mobile Web Performance — Led frontend development on a performance-critical mobile web app, ensuring seamless behavior across diverse devices and browsers.",
      "Technical Training — Facilitated multiple technical training sessions for both Frontend and QA teams, raising engineering standards across the office.",
    ],
  },
  {
    date: "2012",
    startDate: "August 2012",
    endDate: "May 2015",
    company: "Komet Sales",
    url: "www.kometsales.com",
    logo: "komet",
    about:
      "Komet is a SaaS platform for the floral industry that gives businesses the tools to automate processes while connecting with their key business partners.",
    functions: "Full-stack Developer.",
    achievements: [
      "Platform Engineering — Played a key role in multiple corporate projects using MySQL and Java (Spring, Hibernate), and led the definition of the frontend architecture and tech stack for the company's products. Tech: Java, Spring, Hibernate, MySQL, JavaScript.",
      "Process Modernization — Drove the migration from SVN to Git and championed the adoption of Scrum, fundamentally improving development velocity and team collaboration.",
    ],
  },
];
