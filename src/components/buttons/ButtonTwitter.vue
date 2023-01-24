<template>
  <a
    :href="`https://twitter.com/intent/tweet/?text=${props.title}&url=${url}`"
    class="btn-link btn-link-twitter"
    :class="[{ 'is-rounded': isRounded }, { 'is-circled': isCircled }, { 'is-bordered': isBordered }]"
    title="Twitter"
    rel="nofollow noopener"
    target="_blank"
  >
    {{ text }}
    <span v-if="hasIcon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
        <path
          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
        />
      </svg>
    </span>
  </a>
</template>

<script setup lang="ts">
interface DefaultProps {
  titlle: string;
  text: string;
  url: string;
  hasIcon?: boolean;
  isRounded?: boolean;
  isCircled?: boolean;
  isBordered?: boolean;
}

const props = withDefaults(defineProps<DefaultProps>(), {
  text: "Add text",
  title: "Add title",
  url: "#",
  hasIcon: false,
  isRounded: false,
  isCircled: false,
  isBordered: false
});
</script>
