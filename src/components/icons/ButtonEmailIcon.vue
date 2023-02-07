<template>
  <a
    :href="`mailto:?subject=${props.subject}&to=${to}&body=${content}%20${url}`"
    class="btn-link-icon btn-link-email-icon"
    :class="[{ 'is-rounded': isRounded }, { 'is-circled': isCircled }, { 'is-bordered': isBordered }, { 'is-whited': isAllWhite || isWhited }]"
    title="Email"
    rel="nofollow noopener"
    target="_blank"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
      <path
        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
interface DefaultProps {
  to?: string;
  subject: string;
  content: string;
  url: string;
  isRounded?: boolean;
  isCircled?: boolean;
  isBordered?: boolean;
  isAllWhite?: boolean;
  isWhited?: boolean;
}

const props = withDefaults(defineProps<DefaultProps>(), {
  to: "Title",
  subject: "Subject",
  content: "Add the content",
  url: "#",
  isRounded: false,
  isCircled: false,
  isBordered: false,
  isAllWhite: false,
  isWhited: false
});
</script>
