<template>
  <a :href="`https://pinterest.com/pin/create/button/?url=${url}&media=${mediaUrl}&description=${description}`"
     class="button button-pinterest"
     :class="{'is-rounded': isRounded }"
     title="Pinterest"
     rel="nofollow noopener" target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-pinterest"></i></span>
  </a>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    default: 'Add the description',
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
  mediaUrl: {
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