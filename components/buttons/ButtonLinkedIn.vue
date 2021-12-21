<template>
  <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`"
     class="btn-link btn-link-linkedin"
     :class="{'is-rounded': isRounded }"
     title="LinkedIn"
     rel="nofollow noopener" target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-linkedin"></i></span>
  </a>
</template>

<script setup>
const props = defineProps({
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