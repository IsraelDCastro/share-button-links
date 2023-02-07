<template>
  <main>
    <Navbar />
    <div class="wrapper container my-10">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
</template>
<script setup>
import Navbar from "@/layouts/Navbar.vue";
</script>
