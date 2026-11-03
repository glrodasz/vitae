# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Node Version**: 24.x (check with `.nvmrc`)

```bash
# Development
yarn dev              # Start Next.js dev server

# Code Quality
yarn lint             # Run ESLint

# Production
yarn build            # Build for production
yarn start            # Start production server
```

## Technology Stack & Architecture

### Framework & Styling
- **Next.js 15** with Pages Router (NOT App Router)
- **TypeScript** - `.ts` for utilities/data, `.tsx` for components
- **styled-jsx** for component styling - scoped styles in `<style jsx>` blocks
- **SCSS** for global styles (`styles/main.scss`) using CSS custom properties for theming
- **Yarn 4.1.1** as package manager

### Component Architecture
Components follow **Atomic Design** pattern in `components/`:
- `atoms/` - Basic building blocks (Icon, Heading, Paragraph, Logo, Link, Analytics)
- `molecules/` - Composed components (Card, Carousel, Job, Item, SkillCards, SkillList, ThemeToggle, DocumentBar)
- `organisms/` - Complex sections (Hero, Profile, Career, Skills, Knowledge, Projects, Footer)
- `layout/` - Layout components (PageContainer)
- `resume/` - Document components for the CV at `/resume` (ResumeHeader, ResumeSection, ResumeEntry, ResumeList)

All components are TypeScript (.tsx) with proper interface definitions for props.

### Content & Data Layer
All CV text lives in `content/*.yml` (see `content/README.md`), so it can be edited without touching code:
- `profile.yml`, `summary.yml`, `careers.yml`, `projects.yml`, `skills.yml`, `education.yml`, `achievements.yml`, `site.yml`
- `scripts/content-schema.js` validates every file (unknown/missing fields, dates, logos) and reports `file:line`;
  run it with `yarn validate:content` (also runs in the loader, pre-push and CI)
- `scripts/yaml-loader.js` is registered in `next.config.js` for Turbopack (`yarn dev`) and webpack (`yarn build`),
  so `import x from "../content/x.yml"` works anywhere; `types/yaml.d.ts` types it as `unknown`
- Content shapes in `types/content.ts` (keep in sync with `scripts/content-schema.js`)

`data/*.ts` is a thin typed layer over the YAML: it fills the `{years}` placeholder, maps YAML names to the
view types in `types/data.ts` (e.g. `cv` → `resume`, `role` → `functions`), and holds code-only values (site URL,
PDF paths, JSON-LD structure). `resume.ts` selects and formats the short CV (items with `cv:`).
- Imported via central `data/index.ts` and per-file imports
- Add new content as YAML fields, not as hardcoded strings in `data/*.ts` or components

### Custom Hooks (`hooks/`)
- `useTheme.ts` - Detects and tracks theme changes via MutationObserver on `<html>` class
- `useBreakpoints.ts` - Responsive breakpoint detection
- `useFooterVisibility.ts` - Detects footer visibility with IntersectionObserver

### Utilities (`utils/`)
- `utils.ts` - Core utilities (e.g., `calculateDuration`)
- `theme.ts` - Theme management (initialization, toggling, persistence)
- `manifest.ts` - Dynamic web manifest theme color updates

### Theming System
Theme managed through CSS custom properties in `styles/main.scss`:
- Light/dark modes via `--background`, `--text`, `--primary`, etc.
- System preference detection + user override via `.dark` class
- Special `.freeze-mode` class for forcing light theme
- Theme toggle controlled by `ThemeToggle` molecule
- Persistent theme preferences in localStorage
- Dynamic manifest theme color updates

### Key Patterns
- TypeScript interfaces for all component props and data structures
- Direct utility functions preferred over external libraries (see `utils.ts`)
- Image optimization via Next.js `Image` component
- Single-page layout (`pages/index.tsx`) assembling organisms: the full archive
- `/resume` (`pages/resume.tsx`) is the short, Harvard-style CV; `/print` redirects to it
- Outputs from the same content: `README.md` (`yarn generate:readme`), `resume.md` (`yarn generate:resume-md`),
  and `public/guillermo-rodas-cv.pdf` (`yarn generate:pdf`, run by `.github/workflows/pdf.yml`)
- Global reset via `minireset.css`

## Important Conventions
- Use TypeScript for all new code - strict typing enabled
- Prefer custom utils over installing new libraries
- Use CSS custom properties for theme variables
- Components use styled-jsx for scoped styles
- Date utilities in `utils.ts` (e.g., `calculateDuration`)
- All SVG icons/vectors in `public/vectors/`, images in `public/images/`
- Type definitions in `types/` directory
