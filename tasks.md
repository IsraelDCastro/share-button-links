# Plan de mejoras por fases (Performance, A11y, DX)

## Objetivos medibles
- Reducir riesgos funcionales en enlaces de share (encoding correcto): `100%` de botones e iconos.
- Mejorar accesibilidad básica WCAG 2.1 AA: foco visible, labels en icon-only, tamaño táctil mínimo.
- Reducir carga innecesaria al consumidor de la librería: dependencias runtime solo las estrictamente necesarias.
- Mantener calidad continua: `lint + test + build` verdes en cada cambio.

## Fase 1 - Quick wins (Completada)
- [x] Centralizar construcción de URLs de share y encoding en `src/components/shared/share.ts`.
- [x] Añadir fallback robusto de copiado al portapapeles (`navigator.clipboard` + `execCommand`).
- [x] Migrar botones e iconos exportados para usar helpers seguros de URL.
- [x] Añadir `rel="nofollow noopener noreferrer"` en enlaces externos.
- [x] Mejorar a11y en icon-only: `aria-label` + SVG decorativo con `aria-hidden`.
- [x] Añadir `type="button"` y feedback accesible (`role="status"`, `aria-live="polite"`) en Copy.
- [x] Mejorar UX de teclado y táctil: `:focus-visible` + hit-area de `44x44` para icon buttons.
- [x] Añadir `prefers-reduced-motion` para minimizar animaciones.
- [x] Limpieza de dependencias: mover `vue` a `peerDependencies`, mover `vue-router/not-idea-ui` a `devDependencies`, eliminar `path` y `vite-plugin-sass-dts`.
- [x] Arreglar tooling de configuración en entorno ESM (`*.cjs` para prettier/postcss/tailwind).
- [x] Agregar tests unitarios de utilidades en `src/components/shared/share.spec.ts`.

## Fase 2 - Rendimiento de build y CSS (Completada)
- [x] Actualizar `vue-tsc` y volver a incorporar chequeo de tipos en `npm run build` sin romper compatibilidad de Node.
- [x] Migrar SCSS de `@import` a `@use/@forward` para eliminar deprecations de Sass.
- [x] Medir bundle por formato (ES/UMD) y fijar presupuesto (objetivo: no crecer >5% por release).
- [x] Evaluar eliminar `rollup-plugin-typescript2` si no aporta valor frente a Vite + `vite-plugin-dts`.
- [x] Revisar CSS duplicado entre `_buttons.scss` y `_icon-buttons.scss` para reducir bytes.

## Fase 3 - A11y avanzada (Completada)
- [x] Incorporar auditoría automatizada con `vitest-axe` para componentes clave.
- [x] Añadir tests de navegación por teclado (tab order, focus trap inexistente, activación Enter/Space).
- [x] Documentar contrato a11y por componente (`aria-label`, foco, feedback de acción).

## Fase 4 - API/DX y release hygiene (Completada)
- [x] Definir estrategia para `ButtonLine.vue` (deprecar oficialmente o exportar de forma consistente).
- [x] Versionado semántico de cambios de API y changelog real por release.
- [x] Pipeline CI mínimo: `lint`, `test:unit --run`, `build`, reporte de tamaño de bundle.
