<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { ExternalLink } from 'lucide-vue-next'

defineProps<{
  title: string
  description?: string
  image?: string
  likes?: number
}>()
</script>

<template>
  <Card class="w-[450px] hover:scale-105 transition-all">
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <img v-if="image" :src="image" />
    </CardContent>
    <CardFooter>
      <!-- <Button variant="outline"> Cancel </Button>
      <Button>Deploy</Button> -->

      <!-- <ExternalLink class="opacity-50 hover:opacity-80" /> -->
    </CardFooter>
  </Card>
</template>
