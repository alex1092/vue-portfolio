<script setup lang="ts">
import { Linkedin } from "lucide-vue-next"
import { Github } from "lucide-vue-next"
import { Twitter } from "lucide-vue-next"

import { config } from "@/config"
</script>

<template>
  <div class="flex gap-4 mt-2">
    <a v-if="config.socials.github" :href="config.socials.github" target="_blank">
      <Github class="w-4 h-4 opacity-60 hover:opacity-100" />
    </a>
    <div v-else></div>
    <a v-if="config.socials.linkedin" :href="config.socials.linkedin" target="_blank">
      <Linkedin class="w-4 h-4 opacity-60 hover:opacity-100" />
    </a>
    <div v-else></div>
    <a v-if="config.socials.twitter" :href="config.socials.twitter" target="_blank">
      <Twitter class="w-4 h-4 opacity-60 hover:opacity-100" />
    </a>
    <div v-else></div>
  </div>
</template>
