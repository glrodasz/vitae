# Curriculum Vitae

A statically generated résumé built with Next.js and TypeScript. Content is sourced from a single Markdown document and rendered through atomic React components.

## Development

```bash
yarn install
yarn dev
```

Useful commands:

- `yarn lint` – run ESLint.
- `yarn build` – create the production build.
- `yarn test` – execute Jest tests.

## Data Architecture

- Component contracts are documented in [`docs/data-structures.md`](docs/data-structures.md).
- Structured content lives in [`data/content.md`](data/content.md) and is parsed at build time via [`utils/markdownDataLoader.ts`](utils/markdownDataLoader.ts).
- `data/parsedData.ts` converts the Markdown into typed objects that are re-exported through the legacy modules in `data/` so no component imports need to change.

## Authoring the Markdown Data (`data/content.md`)

The Markdown file is designed to be readable without diving into JSON. Keep the following rules in mind:

1. **Top-level headings** – each section starts with an H1 heading (`# Summary`, `# Languages`, etc.). The recognised sections are `Summary`, `Languages`, `Expertises`, `Stack`, `Frameworks`, `Careers`, `Knowledge`, and `Achievements`.
2. **No fenced JSON** – every section uses plain Markdown conventions. If the parser encounters a code fence it will throw.

### Section formats

- **Summary** – write one paragraph per entry. Blank lines split the paragraphs.
- **Languages** – each language is a mini two-line paragraph: `🇬🇧 **English**` on one line (flag + bold name) and the proficiency on the next.
- **Expertises** – add an H2 for each expertise (`## JavaScript`). The first line after the heading must read `Since <year> — <label>` so the loader can calculate years of experience. Bullet points beneath the subtitle become the `items` array.
- **Stack** and **Frameworks** – each item is a bullet of the form `- **Title** — Description`.
- **Careers** – add an H2 per company and list the fields as key/value lines (`Date:`, `Start Date:`, `End Date:`, `URL:`, `Logo:`, `About:`, `Functions:`). Follow with a `### Achievements` heading and a bullet list.
- **Knowledge** and **Achievements** – add an H2 for each section and a bullet list of items. Items use `- **Title** — Description _(Footer)_` for simple entries or include an indented sub-list for tuple data:

  ```markdown
  - **Platzi**
    - JavaScript Backend Career — 80 Hours, March 2019
  ```

### Tips

- Strings are parsed verbatim, so mind typos when copying existing content.
- Nested bullet lists only support one extra level of indentation.
- When adding a new section, update the required section list in `utils/markdownDataLoader.ts` and extend the fixtures/tests accordingly.

## Testing

```bash
yarn test
```

The Jest suite compares the Markdown-derived structures against fixtures captured from the previous TypeScript sources. This ensures the Markdown representation stays in sync with the existing components until the full migration is complete.
