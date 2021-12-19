<template>
  <a :href="`https://api.whatsapp.com/send?text=${message}%20${url}`"
     class="button button-whatsapp"
     :class="{'is-rounded': isRounded }"
     title="WhatsApp"
     rel="nofollow noopener" target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-whatsapp"></i></span>
  </a>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Add text'
  },
  message: {
    type: String,
    default: '',
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