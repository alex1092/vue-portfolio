<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMobileDetection } from '@lib/utils'
import NavigationDrawer from './components/navigation/NavigationDrawer.vue'

const { isMobile } = useMobileDetection()
</script>

<template>
  <header class="absolute top-0 left-0 w-full h-16 bg-white">
    <div v-if="!isMobile" class="m-3">
      <nav class="flex justify-center items-center gap-10">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">Portfolio</RouterLink>
      </nav>
    </div>

    <NavigationDrawer v-else />
  </header>

  <RouterView />
</template>

<style scoped></style>
