<template>
  <div class="flex flex-col md:flex-row md:container no-scroll">
    <div class="flex-1 flex justify-center items-center md:order-2">
      <img
        :src="image"
        alt="Avatar"
        class="w-52 h-52 md:w-[350px] md:h-[350px] rounded-full md:rounded-md"
      />
    </div>
    <div class="my-auto align-top justify-start md:ml-10 flex-1 md:order-1 overflow-hidden">
      <h1 class="text-6xl md:text-8xl text-center md:text-left font-bold">
        {{ config.homePage.title }}
      </h1>
      <p class="text-xl md:text-4xl text-center md:text-left md:my-4 overflow-hidden">
        {{ config.homePage.subtitle }}
      </p>
      <SocialsIcons class="justify-center items-center md:justify-start" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialsIcons from "@/components/SocialsIcons.vue"
import { config } from "@/config"

import { useMobileDetection } from "@/lib/utils"

import avatarJpeg from "@/assets/images/avatar.jpeg"
import avatarPng from "@/assets/images/avatar-no-background.png"

const { isMobile } = useMobileDetection()

const image = isMobile ? avatarJpeg : avatarPng
</script>

<style scoped>
.no-scroll {
  overflow: hidden;
  height: 90vh;
}
</style>
