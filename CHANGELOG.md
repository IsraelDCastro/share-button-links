# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added
- Centralized share URL builders and clipboard fallback utility in `src/components/shared/share.ts`.
- Unit tests for share URL encoding and clipboard behavior in `src/components/shared/share.spec.ts`.
- Accessibility test suite with `vitest-axe` in `src/components/accessibility.spec.ts`.
- Keyboard navigation tests (tab order, Enter/Space activation) in `src/components/keyboard-navigation.spec.ts`.
- Bundle size reporting and budget enforcement scripts:
  - `bun run size:report`
  - `bun run size:check`
- CI workflow at `.github/workflows/ci.yml` running lint, tests, build, and bundle budget checks.

### Changed
- `build` now includes type-checking (`vue-tsc`) before bundling.
- Migrated runtime share links to encoded URL helpers for all exported button/icon components.
- Added stronger external link hardening (`noopener noreferrer`) and improved aria labels for icon-only controls.
- Improved keyboard and motion accessibility:
  - explicit focus-visible styles,
  - larger icon hit area (`44x44`),
  - reduced-motion support.
- Migrated library SCSS entrypoint from deprecated `@import` to `@use`.
- Deduplicated social-network visual variants through CSS custom properties in `src/assets/scss/_variants.scss`.

### Deprecated
- `src/components/buttons/ButtonLine.vue` is now documented as a legacy internal component and is scheduled for removal in the next major version.

### Fixed
- Correct share URL encoding for query strings, spaces, and special characters.
- Better clipboard behavior in environments without `navigator.clipboard` support.
- ESM config compatibility by using `.cjs` for Prettier/PostCSS/Tailwind config files.

### Dependency
- `vue` moved to `peerDependencies` (library best practice).
- `vue-router` and `not-idea-ui` moved to `devDependencies` (docs app only).
- Removed unused `rollup-plugin-typescript2`, `path`, and `vite-plugin-sass-dts` from project requirements.
- Added `vitest-axe`, `@testing-library/vue`, and `@testing-library/user-event` for a11y and keyboard testing.
- Upgraded `vue-tsc` to `3.2.5` for modern Node compatibility.
