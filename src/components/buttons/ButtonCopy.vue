<template>
  <div class="copy-wrap">
    <transition name="slide-up-fade" mode="in-out">
      <span v-if="copied" class="copied-text">Copied!</span>
    </transition>
    <button
      class="btn-link btn-link-copy"
      :class="[{ 'is-rounded': isRounded }, { 'is-circled': isCircled }, { 'is-bordered': isBordered }]"
      title="Copy URL"
      @click="copyUrl"
    >
      {{ text }}
      <span v-if="hasIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
          <path
            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
          />
          <path
            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface DefaultProps {
  text: string;
  url: string;
  hasIcon?: boolean;
  isRounded?: boolean;
  isCircled?: boolean;
  isBordered?: boolean;
}

const props = withDefaults(defineProps<DefaultProps>(), {
  text: "Add text",
  url: "#",
  hasIcon: false,
  isRounded: false,
  isCircled: false,
  isBordered: false
});

const urlCopy = props.url || window.location.href;
const copied = ref(false);

function copyUrl() {
  copied.value = true;
  navigator.clipboard.writeText(urlCopy);
  setTimeout(() => (copied.value = false), 1500);
}
</script>
