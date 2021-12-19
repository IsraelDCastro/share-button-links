<template>
  <a :href="`mailto:?subject=${subject}&body=${content}%20${url}`"
     class="button button-email"
     :class="{'is-rounded': isRounded }"
     title="Email"
     rel="nofollow noopener" target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-envelope-fill"></i></span>
  </a>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Add text'
  },
  subject: {
    type: String,
    required: true,
    default: 'Subject'
  },
  content: {
    type: String,
    required: true,
    default: 'Add the content'
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