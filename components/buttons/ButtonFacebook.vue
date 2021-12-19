<template>
  <a :href="`https://facebook.com/sharer/sharer.php?u=${url}&t=&quote=`"
     class="button button-facebook"
     :class="{'is-rounded': isRounded }"
     title="Facebook"
     rel="nofollow noopener" target="_blank">
    {{ text }}
    <span v-if="hasIcon"><i class="bi bi-facebook"></i></span>
  </a>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
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