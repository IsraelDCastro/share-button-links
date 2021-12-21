<template>
  <a :href="`https://twitter.com/intent/tweet/?text=${title}&url=${url}`"
     class="btn-link btn-link-twitter"
     :class="{'is-rounded': isRounded }"
     title="Twitter"
     rel="nofollow noopener" target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-twitter"></i></span>
  </a>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Add title',
    required: true
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