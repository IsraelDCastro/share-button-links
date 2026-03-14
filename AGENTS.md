# Repository Guidelines

## Project Structure & Module Organization
This repo is a Vue 3 + TypeScript component library with a local docs/demo app.
- `src/components/`: publishable components (`buttons/`, `icons/`, `button-group/`) and library entrypoints.
- `src/assets/`: shared SCSS (`share-button-links.scss`, partials in `scss/`, docs styles in `docs/`).
- `src/views/`, `src/layouts/`, `src/router/`: demo/docs site pages and routing.
- `src/examples/`: usage examples shown in docs.
- `dist/`: build output (generated; do not hand-edit).

## Build, Test, and Development Commands
Use the scripts defined in `package.json`:
- `npm run dev`: start the Vite docs/demo app locally.
- `npm run build`: type-check Vue SFCs and build library bundles (`es` + `umd`) into `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run test:unit`: run Vitest in `src/` with `jsdom`.
- `npm run lint`: run ESLint with auto-fix for `.vue` and JS module files.

## Coding Style & Naming Conventions
- Indentation: 2 spaces (`eslint` + `prettier` enforce this).
- Formatting: Prettier (semi-colons on, double quotes, no trailing commas).
- Components: PascalCase file names (example: `ButtonFacebook.vue`, `ButtonTwitterIcon.vue`).
- Exports: keep explicit named exports in `index.ts` files for each module folder.
- Styles: add reusable tokens/mixins in `src/assets/scss/` partials, then import through `share-button-links.scss`.

## Testing Guidelines
Vitest and Vue Test Utils are configured, but this repo currently has no committed test files.
- Add new tests as `*.spec.ts` near source modules or under `src/__tests__/`.
- Focus tests on component props, emitted behavior, and rendered share-link URLs.
- Run `npm run test:unit` before opening a PR.

## Commit & Pull Request Guidelines
Git history currently uses short, free-form messages (example: `Fixed`, `Version 2.3.4`). For new work, prefer clear imperative subjects:
- `fix(buttons): correct LinkedIn URL encoding`
- `feat(icons): add Line icon component`

PRs should include:
- concise description of behavior changes,
- linked issue (if available),
- screenshots/GIFs for docs or visual component changes,
- confirmation that `build`, `lint`, and relevant tests were run.
