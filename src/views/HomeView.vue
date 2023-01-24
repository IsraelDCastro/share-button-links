<script setup lang="ts">
import { routes } from "@/router";
</script>

<template>
  <div>
    <h3 class="mb-8"><i class="bi bi-columns-gap"></i> Components</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      <div class="card" v-for="route in routes" :key="route.name" v-show="route.name !== 'Home'">
        <router-link :to="route.path">
          <div class="card-content">
            <h4 class="card-title">{{ route.name }}</h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
