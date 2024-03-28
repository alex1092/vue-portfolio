<script setup lang="ts">
import PortfolioCards from '@/components/portfolio/PortfolioCards.vue'

import { config } from '@/config'
</script>

<template>
  <h1 class="text-4xl font-bold pl-3 md:pl-10 pt-16">Portfolio</h1>
  <div class="flex flex-col md:flex-row md:flex-wrap gap-10 items-center p-6 justify-center">
    <PortfolioCards
      v-for="project in config.portfolio.projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :image="project.image"
    />
  </div>
</template>
