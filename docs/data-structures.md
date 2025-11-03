# Data Exports and Component Expectations

This catalogue documents every structure currently sourced from the `data/` directory and how the organisms and molecules consume each shape. Use it as the reference when evolving the Markdown data source or touching consuming components.

## `summary` (`data/summary.ts`)
- **Shape**: `string[]`
- **Consumers**:
  - `components/organisms/Profile.tsx` – iterates the array, rendering each string inside a `<Paragraph>`.
  - Expects each entry to be a full paragraph of text.

## `languages` (`data/languages.ts`)
- **Shape**: `Language[]` where each item contains `{ title: string; flag: string; proeficiency: string; }`.
- **Consumers**:
  - `components/organisms/Profile.tsx` – maps items to the `Item` molecule. Uses:
    - `flag` → passed to `Item` so it can render the emoji flag beside the language name.
    - `title` → displayed as the language label.
    - `proeficiency` → passed as the description string.
  - **Authoring tips**: In Markdown, each language entry is a two-line paragraph (`🇬🇧 **English**` on one line, proficiency on the next).

## `expertises` (`data/expertises.ts`)
- **Shape**: `ExpertiseItem[]` with `{ title: string; subtitle: string; items: string[]; }`.
- **Consumers**:
  - `components/organisms/Skills.tsx` – forwards the array to `SkillCards`.
  - `components/molecules/SkillCards.tsx` – spreads each item into `Card`.
  - `components/molecules/Card.tsx` – relies on:
    - `title` → rendered as the card header.
    - `subtitle` → shown beneath the title.
    - `items` → iterated to paragraphs in the card body.

## `stack` (`data/stack.ts`)
- **Shape**: `StackItem[]` containing `{ title: string; text: string; }`.
- **Consumers**:
  - `components/organisms/Skills.tsx` – forwards the array to `SkillList`.
  - `components/molecules/SkillList.tsx` – spreads each item into `Item`.
  - `components/molecules/Item.tsx` – expects both `title` and `text` (plain string) to exist.

## `frameworks` (`data/frameworks.ts`)
- **Shape**: `FrameworkItem[]` with `{ title: string; text: string; }`.
- **Consumers**:
  - `components/organisms/Skills.tsx` → `SkillList` → `Item`, identical expectations to `stack`.

## `careers` (`data/careers.ts`)
- **Shape**: `Career[]` with the fields `{ date: string | null; startDate: string; endDate: string | null; company: string; url: string; logo: string; about: string; functions: string; achievements: string[]; }`.
- **Consumers**:
  - `components/organisms/Career.tsx`
    - Uses `date`, `company`, `startDate`, `endDate` to build carousel labels.
    - Passes the full object to the `Job` molecule.
  - `components/molecules/Job.tsx`
    - `logo` → forwarded to the `Logo` atom.
    - `url` → rendered inside a `Link` (`https://${career.url}`).
    - `about` and `functions` → rendered as paragraphs.
    - `achievements` → iterated into `Item` molecules.

## `knowledge` (`data/knowledge.ts`)
- **Shape**: `KnowledgeSection[]` where each section is `{ title: string; items: KnowledgeItem[]; }` and each `KnowledgeItem` contains `{ title: string; text: string | string[][]; footer?: string; }`.
- **Consumers**:
  - `pages/index.tsx` and `pages/print.tsx` – pass the array to the `Knowledge` organism.
  - `components/organisms/Knowledge.tsx`
    - Uses `title` for carousel headings.
    - Maps `items` into `Item` molecules.
  - `components/molecules/Item.tsx`
    - `title` → displayed as heading.
    - `text`
      - If string → rendered as a paragraph.
      - If `string[][]` → expects a tuple `[description, date]` per entry.
    - `footer` (optional) → rendered as a secondary heading when present.

## `achievements` (`data/achievements.ts`)
- **Shape**: `AchievementSection[]` (identical structure to `KnowledgeSection`).
- **Consumers**:
  - `pages/index.tsx` and `pages/print.tsx` – pass the array to the `Knowledge` organism (for volunteer experience).
  - `components/organisms/Knowledge.tsx` and `components/molecules/Item.tsx` – identical expectations as the `knowledge` data.

This mapping should stay in sync with any schema updates so the Markdown source remains compatible with the current component contracts.
