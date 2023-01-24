<template>
  <a
    :href="`https://line.me/R/?${message}`"
    class="btn-link btn-link-line"
    :class="{ 'is-rounded': isRounded }"
    title="Line"
    rel="nofollow noopener"
    target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-line"></i></span>
  </a>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: "Add text"
  },
  message: {
    type: String,
    required: true,
    default: "Add message"
  },
  hasIcon: {
    type: Boolean,
    default: false
  },
  isRounded: {
    type: Boolean,
    default: false
  }
});
</script>
