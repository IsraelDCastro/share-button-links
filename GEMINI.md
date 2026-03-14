# share-button-links

A Vue 3 component library providing customizable share buttons for various social media platforms. It includes a built-in documentation and demo site.

## Project Overview

- **Technologies:** Vue 3 (Composition API, `<script setup>`), TypeScript, Vite, SCSS, Tailwind CSS (used for documentation), Vitest.
- **Main Purpose:** Exporting a set of Vue components for sharing URLs on platforms like Facebook, Twitter, LinkedIn, etc.
- **Architecture:**
    - `src/components/`: Core library components (Buttons, Icons, ButtonGroups).
    - `src/assets/`: Styling logic using SCSS. `share-button-links.scss` is the main entry for library styles.
    - `src/views/`, `src/layouts/`, `src/router/`: Source code for the documentation and demo website.
    - `dist/`: Build output for the library (ESM and UMD formats).

## Building and Running

### Development
- `npm run dev`: Starts the Vite development server for the documentation/demo site.

### Production Build
- `npm run build`: Runs type-checking (`vue-tsc`) and builds the library using Vite's library mode.

### Testing and Quality
- `npm run test:unit`: Executes unit tests using Vitest in a JSDOM environment.
- `npm run type-check`: Runs `vue-tsc` to verify TypeScript types without emitting files.
- `npm run lint`: Runs ESLint with auto-fix enabled for `.vue`, `.js`, and `.ts` files.

## Development Conventions

### Component Structure
- Use Vue 3 `<script setup lang="ts">`.
- Leverage `defineProps` with TypeScript interfaces and `withDefaults` for default prop values.
- Components should ideally be stateless wrappers around sharing URLs or icons.

### Styling
- Styles are primarily written in SCSS located in `src/assets/scss`.
- Follow the existing class naming convention: `btn-link` for base styles and `btn-link-[platform]` for specific colors (e.g., `btn-link-facebook`).
- Support for modifiers like `is-rounded`, `is-circled`, and `is-bordered` should be maintained across button components.

### Exports
- All public components must be exported from `src/components/index.ts`.
- The library entry point is `src/components/index.ts` as defined in `vite.config.ts`.
