# CV content

Everything the CV says lives in these YAML files. Edit them here (or in GitHub's web editor);
the site, `/resume`, the PDFs, `README.md` and `resume.md` all update from them.

| File | What it holds |
|---|---|
| `profile.yml` | Name, role, location, contact links, spoken languages, `careerStart` year |
| `summary.yml` | Long summary (`paragraphs`) and the short CV summary (`cv`) |
| `careers.yml` | Work experience, most recent first, with achievements |
| `projects.yml` | Selected projects |
| `skills.yml` | Expertise cards, skill groups and the order they take on the CV |
| `education.yml` | Education, courses and seminars |
| `achievements.yml` | Recognition, speaking, mentorship… |
| `site.yml` | Page titles, meta descriptions, social card text, topics, social profiles |

## Rules of thumb

- **Order in the file is order on the page.** Move a block to reorder it.
- **`cv:` puts something on the short CV** (`/resume`, the PDF, `resume.md`).
  On achievements and skill groups it is the short text to show; on education and
  recognition items it is `cv: true`.
- **`{years}`** is replaced with the years of experience since `careerStart`.
- **Current job:** leave out `end:` and it shows as *Present*. Dates look like `August 2021`.
- **Long text:** `>-` lets you wrap lines freely; they are joined with spaces.
  Quote a value that starts with `{`, `[` or `*`, or contains `: ` (for example `"Talk: subtitle"`).
- **Lists of events** (talks, courses) use `entries:` with `name` and `date`;
  a single line uses `description:` instead.
- **New company logo:** add `public/logos/<logo>.svg` and set `logo: <logo>`.

## Checking your edit

```bash
yarn validate:content   # explains any problem as file:line
yarn dev                # preview at http://localhost:3000 (and /resume)
```

The same check runs on `yarn build`, before `git push` and in CI, so a typo can't reach the site.
`README.md` and `resume.md` regenerate on push (`yarn generate:readme && yarn generate:resume-md`).
