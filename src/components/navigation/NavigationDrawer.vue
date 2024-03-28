<script setup lang="ts">
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import ColorToggle from "../ColorToggle.vue"
import { Menu } from "lucide-vue-next"
</script>

<template>
  <Drawer>
    <DrawerTrigger>
      <div class="p-2">
        <Menu :size="42" />
      </div>
    </DrawerTrigger>
    <DrawerContent>
      <nav class="flex flex-col gap-5 items-center m-20">
        <DrawerClose>
          <RouterLink class="text-xl hover:opacity-70" to="/">Home</RouterLink>
        </DrawerClose>
        <!-- <DrawerClose>
          <RouterLink class="text-xl hover:opacity-70" to="/about">About</RouterLink>
        </DrawerClose> -->
        <DrawerClose>
          <RouterLink class="text-xl hover:opacity-70" to="/portfolio">Portfolio</RouterLink>
        </DrawerClose>
        <!-- <DrawerClose>
          <RouterLink class="text-xl hover:opacity-70" to="/blog">Blog</RouterLink>
        </DrawerClose>
        <DrawerClose>
          <RouterLink class="text-xl hover:opacity-70" to="/contact">Contact</RouterLink>
        </DrawerClose> -->
        <ColorToggle />
      </nav>
    </DrawerContent>
  </Drawer>
</template>
