<template>
  <a
    :href="`https://getpocket.com/save?url=${props.url}&title=${title}`"
    class="btn-link btn-link-pocket"
    :class="[{ 'is-rounded': isRounded }, { 'is-circled': isCircled }, { 'is-bordered': isBordered }]"
    title="Pocket"
    rel="nofollow noopener"
    target="_blank"
  >
    {{ text }}
    <span v-if="hasIcon">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="get-pocket"
        class="svg-inline--fa fa-get-pocket fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"
        ></path>
      </svg>
    </span>
  </a>
</template>

<script setup lang="ts">
interface DefaultProps {
  title: string;
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
