# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Node Version**: >=25 (check with `.nvmrc`)

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
- `molecules/` - Composed components (Card, Carousel, Job, Item, SkillCards, SkillList, ThemeToggle, Country)
- `organisms/` - Complex sections (Hero, Profile, Career, Skills, Knowledge, Footer, Relocation)
- `layout/` - Layout components (PageContainer)

All components are TypeScript (.tsx) with proper interface definitions for props.

### Data Layer
All content lives in `data/` as TypeScript exports:
- `achievements.ts`, `careers.ts`, `expertises.ts`, `frameworks.ts`
- `knowledge.ts`, `languages.ts`, `stack.ts`, `summary.ts`
- Imported via central `data/index.ts`
- Type definitions in `types/data.ts` for all data structures

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
- Single-page layout (`pages/index.tsx`) assembling organisms
- Global reset via `minireset.css`

## Important Conventions
- Use TypeScript for all new code - strict typing enabled
- Prefer custom utils over installing new libraries
- Use CSS custom properties for theme variables
- Components use styled-jsx for scoped styles
- Date utilities in `utils.ts` (e.g., `calculateDuration`)
- All SVG icons/vectors in `public/vectors/`, images in `public/images/`
- Type definitions in `types/` directory
