<script setup>
import DonateCheckoutCards from '@/components/func-items/cards/DonateCheckoutCards.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'


</script>

<template>
  <div>



    <DonateCheckoutCards />
    <CheckoutButtons/>


    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 100" :key="n">

  </div>
</template>

<style scoped lang="scss">
// @import '@/assets/sass/pages/donate/checkout/donate-checkout-overview';
</style>
