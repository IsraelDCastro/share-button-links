<template>
  <a
    :href="`https://line.me/R/?${encodeURIComponent(message)}`"
    class="btn-link btn-link-line"
    :class="{ 'is-rounded': isRounded }"
    title="Share on LINE"
    rel="nofollow noopener noreferrer"
    target="_blank"
  >
    {{ text }}
    <span v-if="hasIcon" aria-hidden="true"><i class="bi bi-line"></i></span>
  </a>
</template>

<script setup>
/**
 * @deprecated Legacy internal component. Not exported in public API and scheduled for removal.
 */
defineProps({
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
