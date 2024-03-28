<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { useMobileDetection } from "@/lib/utils"
import NavigationDrawer from "./components/navigation/NavigationDrawer.vue"
import ColorToggle from "./components/ColorToggle.vue"

import { init } from "@web3-onboard/vue"
import injectedModule from "@web3-onboard/injected-wallets"

const injected = injectedModule()
const infuraKey = import.meta.env.INFURA_KEY
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

const web3Onboard = init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl
    }
  ]
})

import { useOnboard } from "@web3-onboard/vue"

const { connectWallet } = useOnboard()
const connect = async () => connectWallet()

const { isMobile } = useMobileDetection()
</script>

<template>
  <header class="top-0 left-0 w-full h-16 sticky z-10">
    <div v-if="!isMobile" class="m-3">
      <nav class="flex justify-center items-center gap-10">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/web3">Web3</RouterLink>
        <ColorToggle />
      </nav>
    </div>

    <NavigationDrawer v-else />
  </header>

  <RouterView />
</template>
