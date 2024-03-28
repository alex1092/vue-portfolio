<template>
  <div class="flex flex-col h-screen">
    <div class="flex-1 flex justify-center items-center">
      <img src="../assets/images/avatar.jpeg" alt="Avatar" class="w-52 h-52 rounded-full" />
    </div>
    <div class="my-auto align-top justify-start flex-1">
      <h1 class="text-6xl text-center font-bold">{{ config.homePage.title }}</h1>
      <p class="text-2xl m-2 text-center font-bold">{{ config.homePage.subtitle }}</p>
      <SocialsIcons class="justify-center items-center" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialsIcons from '@/components/SocialsIcons.vue'
import { config } from '@/config'
</script>

<style>
.home {
  height: 100%;
  overflow: hidden;
}
</style>
