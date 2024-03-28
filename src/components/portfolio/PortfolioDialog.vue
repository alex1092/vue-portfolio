<script setup lang="ts">
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

defineProps<{
  title: string
  description?: string

  long
}>()
</script>

<template>
  <DialogContent class="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>{{ title }}</DialogTitle>
      <DialogDescription>
        {{ description }}
      </DialogDescription>
    </DialogHeader>
    a really long descripton of what i did there
    <DialogFooter>
      <!-- <Button type="submit"> Save changes </Button> -->

      Go to github go to url
    </DialogFooter>
  </DialogContent>
  <!-- </Dialog> -->
</template>
