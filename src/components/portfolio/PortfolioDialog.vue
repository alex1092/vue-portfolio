<script setup lang="ts">
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

import { ExternalLink } from 'lucide-vue-next'
import { Github } from 'lucide-vue-next'

defineProps<{
  title: string
  description?: string
  siteUrl?: string
  gitHubUrl?: string
  longDescription?: string
}>()
</script>

<template>
  <DialogContent class="sm:max-w-[425px] max-w-[90vw]">
    <DialogHeader>
      <DialogTitle>{{ title }}</DialogTitle>
      <DialogDescription>
        {{ description }}
      </DialogDescription>
    </DialogHeader>
    <div v-if="longDescription">{{ longDescription }}</div>
    <DialogFooter>
      <a v-if="siteUrl" :href="siteUrl" target="_blank">
        <ExternalLink class="opacity-60 hover:opacity-100" />
      </a>

      <a v-if="gitHubUrl" :href="gitHubUrl" target="_blank">
        <Github class="opacity-60 hover:opacity-100" />
      </a>

      <!-- <Button type="submit"> Save changes </Button> -->
    </DialogFooter>
  </DialogContent>
  <!-- </Dialog> -->
</template>
