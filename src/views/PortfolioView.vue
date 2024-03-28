<script setup lang="ts">
import PortfolioCards from "@/components/portfolio/PortfolioCards.vue"

import { config } from "@/config"

import PortfolioDialog from "@/components/portfolio/PortfolioDialog.vue"
import DialogTrigger from "@/components/ui/dialog/DialogTrigger.vue"
import Dialog from "@/components/ui/dialog/Dialog.vue"
</script>

<template>
  <div class="flex flex-col md:flex-row md:flex-wrap gap-10 items-center p-6 mt-16 justify-center">
    <Dialog v-for="(project, index) in config.portfolio.projects" :key="index">
      <DialogTrigger as-child>
        <PortfolioCards
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
        />
      </DialogTrigger>
      <PortfolioDialog
        :key="project.title"
        :title="project.title"
        :longDescription="project.longDescription"
        :description="project.description"
        :siteUrl="project.siteUrl"
        :gitHubUrl="project.gitHubUrl"
        :image="project.image"
      />
    </Dialog>
  </div>
</template>
