<template>
  <div class="relative w-fit">
    <transition name="slide-up-fade" mode="in-out">
      <span v-if="copied" class="block absolute z-5 bottom-10 left-1/2 -translate-x-1/2">Copied!</span>
    </transition>
    <button
       class="button button-copy"
       :class="{'is-rounded': isRounded }"
       title="Copy URL"
       @click="copyUrl"
    >
      {{ text }}
      <span v-if="hasIcon"><i class="bi bi-link-45deg"></i></span>
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  let copied = ref(false)
  function copyUrl () {
    copied.value = true
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => copied.value = false, 1500)
  }

  const props = defineProps({
    text: {
      type: String,
      required: true,
      default: 'Add text'
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