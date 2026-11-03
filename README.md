<!-- Generated from content/*.yml by scripts/generate-readme.js. Edit the YAML, not this file. -->

<div align="center">

# Guillermo Rodas

**Senior Forward Deployed Engineer** · Stockholm, Sweden

_I build production AI systems and help developer communities level up._

[me@guillermorodas.com](mailto:me@guillermorodas.com) · [guillermorodas.com](https://guillermorodas.com) · [github.com/glrodasz](https://github.com/glrodasz) · [linkedin.com/in/guillermorodas](https://linkedin.com/in/guillermorodas)

<a href="https://vitae.guillermorodas.com/guillermo-rodas-cv.pdf"><img src="public/readme/download-pdf.svg" alt="Download PDF" height="40" /></a>&nbsp;<a href="https://vitae.guillermorodas.com/"><img src="public/readme/view-online.svg" alt="View online" height="40" /></a>

🇬🇧 English (Fluent) · 🇪🇸 Spanish (Native) · 🇸🇪 Swedish (Elementary)

[Summary](#summary) · [Expertise](#expertise) · [Skills](#skills) · [Experience](#experience) · [Selected Projects](#selected-projects) · [Knowledge](#knowledge) · [Recognition](#recognition)

</div>

## Summary

Senior Forward Deployed Engineer with 14 years of experience building production systems at the intersection of web engineering and AI.

At EQT Group, I contribute to the Motherbrain ecosystem, the private equity industry's pioneering AI platform, monitoring 10M+ companies, delivering AI-powered tools using LangChain, PGVector, and LLM integrations.

Previously, I built microfrontend platform infrastructure at Klarna (serving 87M+ global consumers) and shipped identity management products at Auth0 during its hypergrowth from startup to $1B+ valuation.

Outside work, I build open-source agents on Google ADK and Gemini, designed so the model proposes and deterministic code decides.

I combine deep JavaScript, TypeScript, and React expertise with hands-on AI engineering (RAG, agents, embeddings) and a strong track record of developer enablement, as a former Google Developer Expert (2019–2025), international conference speaker, and bootcamp instructor who has trained hundreds of developers across Latin America and Europe.

## Expertise

**AI & LLM Engineering** · _Hands-on in production_
- Building RAG pipelines with PGVector, LangChain, and LangSmith for semantic search and agentic workflows, integrating LLM APIs from OpenAI, Anthropic, and Google in production systems at EQT.

**Full-stack Web Engineering** · _14 years of experience_
- React, TypeScript, and Next.js on the frontend; Node.js, Python, and GraphQL on the backend, shipping at scale across Klarna, Auth0, and EQT with microfrontend architectures and design systems.

**Developer Enablement** · _Former Google Developer Expert_
- Trained hundreds of developers as a bootcamp instructor and online teacher across Latin America and Europe, and shared knowledge at international conferences including DevFest, Nerdearla, and EpicHey!.

## Skills

| Area | Tools and practice |
| :--- | :--- |
| **AI & LLM** | LangChain, LangSmith, Google ADK, CopilotKit, PGVector, RAG pipelines, MCP servers and connectors, Gemini on Vertex AI, Ollama for local models, agent evals (prompt injection, grounding checks) and cost guardrails, prompt engineering, and LLM API integrations with OpenAI, Anthropic, and Google. |
| **Data** | PostgreSQL, BigQuery, MySQL, MongoDB, ElasticSearch, Kafka, and Firebase/Firestore, managing and querying datasets across millions of records in production. |
| **Cloud & DevOps** | GCP (CloudRun, CloudBuild, Cloud Workflows, BigQuery, BigTable), AWS (S3, EC2, SQS, DynamoDB), Cloudflare (Workers, D1, Pages), Firebase Hosting, Docker, Kubernetes, Datadog, CI/CD pipelines, and Linux (CentOS, Debian). |
| **Auth & Identity** | OAuth, OIDC, Auth0, Firebase Auth, and WebAuthn/Passkeys integrated with providers such as Google, Meta, Spotify, and X for secure authentication flows. |
| **Backend platforms** | Node.js with Express, Fastify and Hapi.js, Python with FastAPI, Go and Rust services, GraphQL via Apollo and GraphQL Mesh, and REST APIs powering scalable server-side solutions. |
| **Methods & Delivery** | Scrum, Kanban, Scrumban, and Lean practices, paired with Design Systems, microfrontend architecture, and hands-on technical training for teams. |
| **Frontend frameworks** | React (11+ years) with Hooks and state libraries like Redux and Zustand, Next.js for SSR and Server Components, and TypeScript across the stack. |
| **Testing** | Jest, Vitest, and Playwright for unit, integration, and end-to-end coverage, complemented by Storybook interaction tests and snapshot testing for regression prevention. |
| **UI systems** | Storybook for component development, Design Tokens for consistent branding, and Tailwind CSS, Material Design, and Ant Design for adaptable UI solutions. |
| **Build tooling** | Webpack and Vite production setups, plus NPM scripts and Yarn Workspaces for managing monorepos and dependency graphs across teams. |
| **AI-first engineering** | Agent workflows with Claude Code and Cursor, reusable agent skills, and PR-based review. |

## Experience

### EQT Group

**Senior Forward Deployed Engineer** · August 2021 – Present · [eqtgroup.com](https://www.eqtgroup.com)

> EQT is a global investment organization managing €350B+ in assets. Its proprietary AI platform, Motherbrain, monitors 10M+ companies and has directly sourced investments valued at hundreds of millions of euros.

- **Forward Deployed Engineer, Infrastructure.** Take the investment team's hackathon prototypes to production, starting with agentic screening of add-on M&A targets and an earnings-call screener for listed infrastructure companies, delivered as reusable agent skills over MCP data connectors.
- **AI Platform.** Contributed to EQT's internal platform for AI agents (model gateway, agent identity, MCP layer); defined its adoption funnel metrics and built the dashboard tracking agent registrations, model traffic and MCP tool usage.
- **AI-Powered Deal Intelligence Tools.** Built and shipped internal AI tools that leverage LLMs to streamline investment opportunity screening and enable faster, data-driven decision-making. Implemented RAG pipelines with PGVector for semantic search over proprietary deal data, and integrated LangChain-based workflows with LangSmith observability for production monitoring.
  <br /><sub>Next.js · TypeScript · Python · LangChain · LangSmith · Google ADK · CopilotKit · PostgreSQL · PGVector · GCP · BigQuery · ElasticSearch · Datadog</sub>
- **Design System Foundations.** Established the foundations of a shared Design System with component scaffolding and automated testing infrastructure, enabling consistent UI/UX patterns across internal products and reducing frontend fragmentation across teams.
  <br /><sub>React · TypeScript · Storybook · Playwright · Design Tokens</sub>
- **Engineering Culture & Tech Debt Reduction.** Led cross-team technical improvement initiatives, introduced new technologies, and organized recurring knowledge-sharing sessions that improved engineering practices and accelerated onboarding for new team members.

---

### Klarna

**Engineer (Foundations team)** · September 2019 – August 2021 · [klarna.com](https://www.klarna.com)

> Klarna is a global fintech serving 87M+ consumers and 250,000+ merchants, processing over 1M transactions daily across 17 markets. Valued at $10.65B in 2020 and later at $45.6B in 2021.

- **Microfrontend Platform Infrastructure.** As a member of the Foundations team, designed and maintained 20+ shared UI packages consumed by 5+ product teams. These microfrontend packages formed the core interface layer used in Klarna's flagship checkout, payments, and consumer-facing products, supporting experiences that served millions of transactions daily.
  <br /><sub>React · TypeScript · JavaScript · Microfrontend Architecture · NPM · Yarn Workspaces</sub>
- **Continuous Delivery Transformation.** Drove improvements to the continuous delivery pipeline, transitioning the team from 5–10 scattered micro-deployments to a streamlined daily deployment cadence with on-demand hotfix capability, directly reducing deployment friction and improving release reliability for dependent teams.
  <br /><sub>CI/CD · NPM scripts · automated testing · deployment pipelines</sub>

---

### Auth0

**Engineer** · October 2016 – September 2019 · [auth0.com](https://www.auth0.com)

> Auth0 is a cloud identity platform (now part of Okta) that safeguards billions of login transactions monthly. During this period, the company achieved 80–100% annual growth in revenue and customers, raised a $103M Series E reaching $1B+ valuation, and expanded from ~100 to 578 employees across 33 countries.

- **Internal Products & Developer Tooling.** Developed multiple internal products powering Auth0's platform operations, using Hapi.js, MongoDB, React, and Redux. Enhanced the team's development workflow by introducing Storybook for component development and snapshot testing for regression prevention, which improved development velocity and reduced visual regressions across the product suite.
  <br /><sub>React · Redux · Hapi.js · MongoDB · Node.js · Storybook · snapshot testing</sub>

---

### Huge

**Web Engineer** · May 2015 – October 2016 · [huge.com](https://www.huge.com)

> Huge is a global digital agency working with Fortune 500 brands to redefine what's possible for the world's most ambitious companies.

- **Fintech Web Application.** Contributed to a Fintech web app using React and Redux, optimized for cross-browser and cross-device compatibility, including legacy support for IE10 on Windows and Safari on iPhone 4S.
  <br /><sub>React · Redux · Vanilla JavaScript · cross-browser development</sub>
- **Mobile Web Performance.** Led frontend development on a performance-critical mobile web app, ensuring seamless behavior across diverse devices and browsers.
- **Technical Training.** Facilitated multiple technical training sessions for both Frontend and QA teams, raising engineering standards across the office.

---

### Komet Sales

**Full-stack Developer** · August 2012 – May 2015 · [kometsales.com](https://www.kometsales.com)

> Komet is a SaaS platform for the floral industry that gives businesses the tools to automate processes while connecting with their key business partners.

- **Platform Engineering.** Played a key role in multiple corporate projects using MySQL and Java (Spring, Hibernate), and led the definition of the frontend architecture and tech stack for the company's products.
  <br /><sub>Java · Spring · Hibernate · MySQL · JavaScript</sub>
- **Process Modernization.** Drove the migration from SVN to Git and championed the adoption of Scrum, fundamentally improving development velocity and team collaboration.

## Selected Projects

- **Haggler Agent** · [Repo](https://github.com/glrodasz/haggler-agent) · [Live](https://haggler.guillermorodas.com)
  <br />Google ADK + Gemini agents tracking subscription prices in 67 countries. Grounded research, deterministic verdicts, hard cost ceilings.
  <br /><sub>Python · Vertex AI · Astro</sub>
- **Nido Agent** · [Repo](https://github.com/glrodasz/nido-agent) · [Live](https://nido.guillermorodas.com)
  <br />Family viewing agent on ADK + Gemini, with prompt-injection evals and a shared multi-family app in three languages.
  <br /><sub>Python · Firebase · Astro</sub>
- **Walleto** · [Repo](https://github.com/glrodasz/walleto) · [Live](https://walleto.guillermorodas.com)
  <br />Personal-finance planner with multi-currency and net worth.
  <br /><sub>Next.js · TypeScript · Firestore · Auth0</sub>
- **Timepass** · [Repo](https://github.com/glrodasz/timepass) · [Live](https://timepass.guillermorodas.com)
  <br />Native Apple Silicon menu bar world clock with country flags. Pure AppKit + SwiftUI, no Electron.
  <br /><sub>Swift · SwiftUI · AppKit · macOS</sub>

## Knowledge

### Education

- **UX Designer Upskill** — Hyper Island · _October 2023 – May 2024_
- **Technical assistant in Digital Graphic Design** — CENSA · _October 2017 – June 2018_
- **Systems engineering (undergraduate)** — Universidad Nacional de Colombia · _January 2007 – January 2010_

### Courses

- **Platzi**
  - JavaScript Backend Career · _80 Hours, March 2019_
  - English Career · _80 Hours, March 2019_
  - Frontend Architect Career · _80 Hours, December 2018_
- **Actívate** — Google Analytics Course · _40 Hours, December 2017_
- **Coursera**
  - Swift: programming for iOS · _30 Hours, March 2016_
  - Web Application Development with JavaScript and MongoDB · _8 Hours, March 2016_
  - Introduction to Meteor.js development · _12 Hours, February 2016_
- **Mejorando.la**
  - Professional Backend Course · _12 Hours, February 2014_
  - Professional Frontend Course · _12 Hours, July 2013_
  - HTML5 Course · _20 Hours, July 2012_
- **Amazon Web Services** — AWS Business Professional Accreditation · _10 Hours, June 2014_
- **SENA**
  - Database Design in SQL · _40 Hours, November 2010_
  - Variables and structures of control in POO: JAVA · _40 Hours, November 2010_
- **Universidad Nacional de Colombia** — Web programming with PHP and MySQL · _50 Hours, July 2010_
- **Institución Educativa Concejo de Medellín** — Middle Technical in Multimedia production and Software Design · _280 Hours, December 2007_

### Seminars

- **Agiles.org** — VII Latin American Workshops on Agile Methodologies · _24 Hours, October 2014_
- **Campus Party Colombia**
  - Campus Party 7 Colombia · _300 Hours, June 2014_
  - Campus Party 6 Colombia · _250 Hours, October 2013_
  - Campus Party 4 Colombia · _521 Hours, July 2011_
- **Google** — Google Developer Bus Bogota · _36 Hours, November 2013_

## Recognition

### Recognition

- **Google Developer Expert** — Web Technologies · _2019 – 2025_
- **Auth0 Ambassador** — Identity & Security · _2022 – 2024_
- **Twitch Partner** — Live Coding & Developer Education · _2020 – 2025_

### Speaking

- **The Language of AI: Probability**
  - DevFest Ourense · _November 2025_
  - DevFest Mediterranean · _December 2025_
- **WebAuthn & Passkeys: The Future of Authentication**
  - DevFest Singapore, EpicHey! · _November 2023_
  - DevFest Zagreb · _October 2023_
- **Why everyone should do streaming live coding?**
  - DevFest Stockholm · _December 2022_
  - Nerdearla · _August 2022_

### Mentorship

- **Online Teacher**
  - Platzi · _December 2018, July 2019, March 2023_
  - Código Facilito · _September 2023_
- **Bootcamp Instructor**
  - Código Facilito · _October 2022, February 2023, March 2024_
  - Undefined Academy · _March 2023 – October 2023_
  - Platzi Master · _November 2020 – September 2022_
  - World Tech Makers · _June 2017 – August 2017_
- **Mentor**
  - Women Developer Academy Europe · _October 2021, October 2023_
  - Hyper Island · _March 2021_
  - The Konferense · _September 2020_
  - Techstars Startup Weekend · _June 2019_
- **Community Organizer**
  - CSS Conf Colombia · _April 2021 – December 2023_
  - CSS Community Dev · _June 2018 – December 2023_
  - Medellín Java · _December 2014 – November 2016_

### Podcasts

- **AI and Humans: Invincible Innovation** — Staying Ahead in AI: Practical Insights for Developers · _April 2025_
- **freeCodeCamp en Español** — From Java to JavaScript · _December 2023_
- **Humans of Platzi** — The power of English and networking · _July 2023_
- **EnPixeles** — Creating communities in post-pandemic · _December 2021_
- **24H24L** — I already know how to code, what's next? · _December 2021_
- **La liga del código** — Security in the Front-end · _August 2020_

### Meetups

- **Laravel Dev & Vue** — Handling Security in the Front-end · _June 2020_
- **Magenta Codes** — How to succeed as a Full-Stack Engineer · _April 2020_
- **Medellin CSS**
  - Don't use a pre-processor anymore · _August 2020_
  - Tips for giving a talk · _June 2019_
  - CSS Layout · _June 2018_
  - How to scale CSS in Design Systems · _October 2018_
  - The Last CSS Framework · _April 2018_
- **Medellin Java**
  - Modern Web apps with jHipster · _May 2015_
  - Introduction to Spring Security · _April 2015_
  - Spring Core advantages · _January 2015_
- **NodeCo** — In the middle of the middleware · _March 2019_
- **ReactJS Top** — The future of state management · _March 2019_
- **Wordpress Medellín** — WooCommerce and React · _October 2018_
- **Medellin JS** — How to quit using jQuery · _May 2015_
- **Medellin PHP** — How to install Laravel in Codio · _October 2014_
