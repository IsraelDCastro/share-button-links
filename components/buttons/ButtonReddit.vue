<template>
  <a :href="`https://reddit.com/submit/?url=${url}&title=${title}`"
     class="button button-reddit"
     :class="{'is-rounded': isRounded }"
     title="Reddit"
     rel="nofollow noopener" target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-reddit"></i></span>
  </a>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Add text'
  },
  text: {
    type: String,
    required: true,
    default: 'Add text'
  },
  url: {
    type: String,
    required: true,
    default: '#'
  },
  hasIcon: {
    type: Boolean,
    default: false
  },
  isRounded: {
    type: Boolean,
    default: false
  }
})
</script>