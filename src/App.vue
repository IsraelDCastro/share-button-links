<template>
  <main class="dev-shell">
    <header class="dev-header">
      <p class="eyebrow">share-button-links</p>
      <div>
        <h1>Playground local</h1>
        <p>Entorno de desarrollo para revisar botones, iconos y combinaciones visuales sin afectar el build de la libreria.</p>
      </div>
    </header>

    <PlaygroundSandbox />
  </main>
</template>

<script setup lang="ts">
import PlaygroundSandbox from "@/playground/PlaygroundSandbox.vue";
</script>

<style scoped>
:global(body) {
  margin: 0;
  background: #f1f5f9;
  color: #0f172a;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

:global(*) {
  box-sizing: border-box;
}

.dev-shell {
  display: grid;
  gap: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.25rem 3rem;
}

.dev-header {
  display: grid;
  gap: 0.5rem;
}

.eyebrow {
  margin: 0;
  color: #64748b;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.dev-header p:last-child {
  max-width: 56rem;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
