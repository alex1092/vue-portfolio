<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

defineProps<{
  title: string
  description?: string
  image?: string
  likes?: number
}>()
</script>

<template>
  <Card class="w-[350px] md:w-[450px] shadow-sm hover:scale-105 transition-all">
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <img v-if="image" :src="image" class="w-full object-scale-down h-[300px] rounded-md" />
    </CardContent>
  </Card>
</template>
