<script setup lang="ts">
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

const developing = true
</script>

<template>
  <div v-if="!developing">
    <h1>Web3 fun</h1>
    <button type="button" @click="connect">Connect to a Wallet</button>
  </div>

  <div class="flex justify-center items-center h-[80vh]" v-else>
    <h1 class="text-2xl font-bold text-center">
      Whoa Buddy kick back and relax because im cooking up something cool...
    </h1>
  </div>
</template>
