<script setup>
import SponsorCheckoutCards from '@/components/func-items/cards/SponsorCheckoutCards.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'


</script>

<template>
  <div>



    <SponsorCheckoutCards />
    <CheckoutButtons/>


    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 100" :key="n">

  </div>
</template>

<style scoped lang="scss">
// @import '@/assets/sass/pages/sponsor/checkout/sponsor-checkout-step-2';
</style>
