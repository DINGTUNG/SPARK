<script setup>
import { useRouter, useRoute } from 'vue-router';


const router = useRouter()
const currentRoute = useRoute()

const prev = () => {
  router.go(-1)
}


const next = () => {
  if (currentRoute.name === "sponsor-checkout-step-1") {
    router.push({ path: '/sponsor-checkout-step-2' })
    
  } else if (currentRoute.name === "sponsor-checkout-step-2") {
    router.push({ path: '/sponsor-checkout-step-3' })

  } else if (currentRoute.name === "sponsor-checkout-step-3") {
    router.push({ path: '/sponsor-checkout-overview' })

  } else if (currentRoute.name === "donate-checkout-step-1") {
    router.push({ path: '/donate-checkout-step-2' })

  } else if (currentRoute.name === "donate-checkout-step-2") {
    router.push({ path: '/donate-checkout-overview' })
  }
}


</script>

<template>
  <div class="check_out_buttons_container">

    <button @click="prev" class="prev">上一步</button>
    <button @click="next" class="next">下一步</button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/buttons/checkout-buttons';
</style>
