<template>
  <div class="code">
    <pre>
      <code :class="`language-${language}`">{{ code }}</code>
    </pre>
  </div>
</template>

<script setup>
  import Prism from "prismjs";
  import "prismjs/themes/prism-tomorrow.css";
  import { onMounted } from "vue";

  const props = defineProps({
    language: {
      type: String,
      required: true,
      default: 'html'
    },
    code: {
      type: frameElement,
      required: true,
      default: ''
    }
  })

  onMounted(() => {
    Prism.highlightAll();
  })
</script>