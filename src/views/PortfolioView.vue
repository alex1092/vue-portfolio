<script setup lang="ts">
import PortfolioCards from '@/components/portfolio/PortfolioCards.vue'

import { config } from '@/config'
</script>

<template>
  <div class="flex flex-col gap-10 mt-20 items-center justify-center">
    <h1 class="text-4xl font-bold">Portfolio</h1>
    <PortfolioCards
      v-for="project in config.portfolio.projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :image="project.image"
    />
  </div>
</template>
