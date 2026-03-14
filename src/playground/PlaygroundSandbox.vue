<template>
  <section class="playground">
    <aside class="playground-sidebar">
      <div class="sidebar-block">
        <p class="eyebrow">Local playground</p>
        <h2>Pruebas visuales fuera del build</h2>
        <p class="lede">Este sandbox solo vive en desarrollo. Sirve para probar props, combinaciones y estados sin tocar la libreria publicada.</p>
      </div>

      <div class="sidebar-block">
        <label class="field">
          <span>URL</span>
          <input v-model="form.url" type="url" placeholder="https://example.com/article" />
        </label>

        <label class="field">
          <span>Texto del boton</span>
          <input v-model="form.text" type="text" placeholder="Share" />
        </label>

        <label class="field">
          <span>Titulo</span>
          <input v-model="form.title" type="text" placeholder="Article title" />
        </label>

        <label class="field">
          <span>Mensaje</span>
          <textarea v-model="form.message" rows="3" placeholder="Optional share message" />
        </label>

        <label class="field">
          <span>Descripcion</span>
          <textarea v-model="form.description" rows="3" placeholder="Pinterest or rich content description" />
        </label>

        <label class="field">
          <span>Media URL</span>
          <input v-model="form.mediaUrl" type="url" placeholder="https://example.com/cover.jpg" />
        </label>

        <label class="field">
          <span>Email destino</span>
          <input v-model="form.to" type="email" placeholder="team@example.com" />
        </label>

        <label class="field">
          <span>Email asunto</span>
          <input v-model="form.subject" type="text" placeholder="Quick share" />
        </label>

        <label class="field">
          <span>Email contenido</span>
          <textarea v-model="form.content" rows="3" placeholder="Body copy for email share" />
        </label>
      </div>

      <div class="sidebar-block">
        <div class="control-group">
          <span class="control-label">Paleta</span>
          <div class="segmented-control" role="group" aria-label="Color variant">
            <button v-for="option in paletteOptions" :key="option.value" type="button" class="segment-button" :data-active="form.colorVariant === option.value" @click="form.colorVariant = option.value">
              {{ option.label }}
            </button>
          </div>
        </div>

        <div class="control-group">
          <span class="control-label">Forma</span>
          <div class="segmented-control" role="group" aria-label="Shape variant">
            <button v-for="option in shapeOptions" :key="option.value" type="button" class="segment-button" :data-active="form.shape === option.value" @click="form.shape = option.value">
              {{ option.label }}
            </button>
          </div>
        </div>

        <label class="toggle-row">
          <input v-model="form.hasIcon" type="checkbox" />
          <span>Mostrar icono en botones de texto</span>
        </label>

        <label class="toggle-row">
          <input v-model="form.isBordered" type="checkbox" />
          <span>Usar variante outline</span>
        </label>

        <label class="toggle-row">
          <input v-model="form.isAllWhite" type="checkbox" />
          <span>Iconos blancos</span>
        </label>
      </div>
    </aside>

    <div class="playground-content">
      <section class="preview-card">
        <div class="section-head">
          <p class="eyebrow">Text buttons</p>
          <h3>Botones principales</h3>
        </div>

        <div class="button-grid">
          <component v-for="item in textButtons" :is="item.component" :key="item.key" v-bind="item.props" :class="paletteClass" />
        </div>
      </section>

      <section class="preview-card" :class="{ 'is-inverse': form.isAllWhite }">
        <div class="section-head">
          <p class="eyebrow">Icon buttons</p>
          <h3>Solo iconos</h3>
        </div>

        <div class="icon-grid">
          <component v-for="item in iconButtons" :is="item.component" :key="item.key" v-bind="item.props" :class="paletteClass" />
        </div>
      </section>

      <section class="preview-card" :class="{ 'is-inverse': form.isAllWhite }">
        <div class="section-head">
          <p class="eyebrow">Button group</p>
          <h3>Grupo compuesto</h3>
        </div>

        <ButtonGroupIcons
          :url="form.url"
          :title="form.title"
          :message="form.message"
          :description="form.description"
          :media-url="form.mediaUrl"
          :content="form.content"
          :to="form.to"
          :subject="form.subject"
          :is-rounded="shape.isRounded"
          :is-circled="shape.isCircled"
          :is-bordered="form.isBordered"
          :is-all-white="form.isAllWhite"
          :color-variant="form.colorVariant"
          facebook-icon
          whatsapp-icon
          telegram-icon
          twitter-icon
          linked-in-icon
          reddit-icon
          pinterest-icon
          tumblr-icon
          pocket-icon
          email-icon
          copy-icon
        />
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import {
  ButtonCopy,
  ButtonEmail,
  ButtonFacebook,
  ButtonLinkedIn,
  ButtonPinterest,
  ButtonPocket,
  ButtonReddit,
  ButtonTelegram,
  ButtonTumblr,
  ButtonTwitter,
  ButtonWhatsapp
} from "@/components/buttons";
import ButtonGroupIcons from "@/components/button-group/ButtonGroup.vue";
import {
  CopyIcon,
  EmailIcon,
  FacebookIcon,
  LinkedInIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon
} from "@/components/icons";
import type { ColorVariant } from "@/components/shared/interfaces";

type ShapeVariant = "default" | "rounded" | "circled";

interface PlaygroundForm {
  url: string;
  text: string;
  title: string;
  message: string;
  description: string;
  mediaUrl: string;
  to: string;
  subject: string;
  content: string;
  colorVariant: ColorVariant;
  shape: ShapeVariant;
  hasIcon: boolean;
  isBordered: boolean;
  isAllWhite: boolean;
}

const paletteOptions: { label: string; value: ColorVariant }[] = [
  { label: "Neutral", value: "neutral" },
  { label: "Flat", value: "flat" },
  { label: "Brand", value: "brand" }
];

const shapeOptions: { label: string; value: ShapeVariant }[] = [
  { label: "Default", value: "default" },
  { label: "Rounded", value: "rounded" },
  { label: "Pill", value: "circled" }
];

const form = reactive<PlaygroundForm>({
  url: "https://example.com/articles/launch-day",
  text: "Share",
  title: "Launch day update",
  message: "Take a look at this release.",
  description: "Neutral, flat and brand button variants for quick visual QA.",
  mediaUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  to: "team@example.com",
  subject: "Share button review",
  content: "Review this state before publishing.",
  colorVariant: "neutral",
  shape: "rounded",
  hasIcon: true,
  isBordered: false,
  isAllWhite: false
});

const shape = computed(() => ({
  isRounded: form.shape === "rounded",
  isCircled: form.shape === "circled"
}));

const paletteClass = computed(() => {
  if (form.colorVariant === "flat") return "is-flat";
  if (form.colorVariant === "neutral") return "is-neutral";
  return "";
});

const textBaseProps = computed(() => ({
  text: form.text,
  url: form.url,
  hasIcon: form.hasIcon,
  isRounded: shape.value.isRounded,
  isCircled: shape.value.isCircled,
  isBordered: form.isBordered
}));

const iconBaseProps = computed(() => ({
  url: form.url,
  isRounded: shape.value.isRounded,
  isCircled: shape.value.isCircled,
  isBordered: form.isBordered,
  isAllWhite: form.isAllWhite
}));

const textButtons = computed(() => [
  { key: "facebook", component: ButtonFacebook, props: { ...textBaseProps.value, title: form.title } },
  { key: "whatsapp", component: ButtonWhatsapp, props: { ...textBaseProps.value, message: form.message } },
  { key: "telegram", component: ButtonTelegram, props: { ...textBaseProps.value, message: form.message } },
  { key: "twitter", component: ButtonTwitter, props: { ...textBaseProps.value, title: form.title } },
  { key: "linkedin", component: ButtonLinkedIn, props: { ...textBaseProps.value } },
  { key: "reddit", component: ButtonReddit, props: { ...textBaseProps.value, title: form.title } },
  { key: "pinterest", component: ButtonPinterest, props: { ...textBaseProps.value, description: form.description, mediaUrl: form.mediaUrl } },
  { key: "tumblr", component: ButtonTumblr, props: { ...textBaseProps.value, title: form.title, content: form.content } },
  { key: "pocket", component: ButtonPocket, props: { ...textBaseProps.value, title: form.title } },
  { key: "email", component: ButtonEmail, props: { ...textBaseProps.value, to: form.to, subject: form.subject, content: form.content } },
  { key: "copy", component: ButtonCopy, props: { ...textBaseProps.value } }
]);

const iconButtons = computed(() => [
  { key: "facebook", component: FacebookIcon, props: { ...iconBaseProps.value, title: form.title } },
  { key: "whatsapp", component: WhatsappIcon, props: { ...iconBaseProps.value, message: form.message } },
  { key: "telegram", component: TelegramIcon, props: { ...iconBaseProps.value, message: form.message } },
  { key: "twitter", component: TwitterIcon, props: { ...iconBaseProps.value, title: form.title } },
  { key: "linkedin", component: LinkedInIcon, props: { ...iconBaseProps.value } },
  { key: "reddit", component: RedditIcon, props: { ...iconBaseProps.value, title: form.title } },
  { key: "pinterest", component: PinterestIcon, props: { ...iconBaseProps.value, description: form.description, mediaUrl: form.mediaUrl } },
  { key: "tumblr", component: TumblrIcon, props: { ...iconBaseProps.value, title: form.title, content: form.content } },
  { key: "pocket", component: PocketIcon, props: { ...iconBaseProps.value, title: form.title } },
  { key: "email", component: EmailIcon, props: { ...iconBaseProps.value, to: form.to, subject: form.subject, content: form.content } },
  { key: "copy", component: CopyIcon, props: { ...iconBaseProps.value } }
]);
</script>

<style scoped>
.playground {
  display: grid;
  grid-template-columns: minmax(18rem, 22rem) minmax(0, 1fr);
  min-height: 100%;
  border: 1px solid #e2e8f0;
  background: #ffffff;
}

.playground-sidebar {
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem;
  border-right: 1px solid #e2e8f0;
  background: #f8fafc;
  align-content: start;
}

.sidebar-block {
  display: grid;
  gap: 0.875rem;
}

.playground-content {
  display: grid;
  gap: 1.25rem;
  padding: 1.5rem;
  background: #f8fafc;
}

.preview-card {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
}

.preview-card.is-inverse {
  background: #0f172a;
  border-color: #1e293b;
}

.preview-card.is-inverse .eyebrow,
.preview-card.is-inverse h3 {
  color: #e2e8f0;
}

.section-head {
  display: grid;
  gap: 0.35rem;
}

.eyebrow {
  margin: 0;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h2,
h3,
.lede {
  margin: 0;
}

h2,
h3 {
  color: #0f172a;
  font-size: 1.25rem;
  line-height: 1.2;
}

.lede {
  color: #475569;
  line-height: 1.6;
}

.field {
  display: grid;
  gap: 0.45rem;
}

.field span,
.control-label {
  color: #334155;
  font-size: 0.82rem;
  font-weight: 700;
}

.field input,
.field textarea {
  width: 100%;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f172a;
  font: inherit;
  padding: 0.7rem 0.8rem;
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  outline: 2px solid #cbd5e1;
  outline-offset: 1px;
  border-color: #94a3b8;
}

.control-group {
  display: grid;
  gap: 0.65rem;
}

.segmented-control {
  display: inline-grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid #cbd5e1;
  background: #ffffff;
}

.segment-button {
  border: 0;
  border-right: 1px solid #cbd5e1;
  background: transparent;
  color: #334155;
  font: inherit;
  font-size: 0.86rem;
  font-weight: 700;
  padding: 0.72rem 0.9rem;
  cursor: pointer;
}

.segment-button:last-child {
  border-right: 0;
}

.segment-button[data-active="true"] {
  background: #e2e8f0;
  color: #0f172a;
}

.toggle-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #334155;
  font-size: 0.92rem;
}

.toggle-row input {
  width: 1rem;
  height: 1rem;
  margin: 0;
}

.button-grid,
.icon-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
}

@media (max-width: 960px) {
  .playground {
    grid-template-columns: 1fr;
  }

  .playground-sidebar {
    border-right: 0;
    border-bottom: 1px solid #e2e8f0;
  }
}
</style>
