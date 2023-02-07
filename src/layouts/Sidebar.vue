<template>
  <aside class="p-8 bg-slate-50 sidebar">
    <h4 class="hidden tablet:inline-block">Documentation</h4>
    <hr class="hidden tablet:inline-block sidebar-divider my-1" />
    <ul class="sidebar-nav">
      <li><a href="#installation" class="sidebar-item" :class="[route.hash === '#installation' ? 'is-active' : null]">Installation</a></li>
      <li><a href="#facebook" class="sidebar-item" :class="[route.hash === '#facebook' ? 'is-active' : null]">Facebook</a></li>
      <li><a href="#whatsapp" class="sidebar-item" :class="[route.hash === '#whatsapp' ? 'is-active' : null]">Whatsapp</a></li>
      <li><a href="#telegram" class="sidebar-item" :class="[route.hash === '#telegram' ? 'is-active' : null]">Telegram</a></li>
      <li><a href="#twitter" class="sidebar-item" :class="[route.hash === '#twitter' ? 'is-active' : null]">Twitter</a></li>
      <li><a href="#linkedin" class="sidebar-item" :class="[route.hash === '#linkedin' ? 'is-active' : null]">LinkedIn</a></li>
      <li><a href="#reddit" class="sidebar-item" :class="[route.hash === '#reddit' ? 'is-active' : null]">Reddit</a></li>
      <li><a href="#pinterest" class="sidebar-item" :class="[route.hash === '#pinterest' ? 'is-active' : null]">Pinterest</a></li>
      <li><a href="#tumblr" class="sidebar-item" :class="[route.hash === '#tumblr' ? 'is-active' : null]">Tumblr</a></li>
      <li><a href="#pocket" class="sidebar-item" :class="[route.hash === '#pocket' ? 'is-active' : null]">Pocket</a></li>
      <li><a href="#email" class="sidebar-item" :class="[route.hash === '#email' ? 'is-active' : null]">Email</a></li>
      <li><a href="#copy" class="sidebar-item" :class="[route.hash === '#copy' ? 'is-active' : null]">Copy</a></li>
    </ul>
  </aside>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
