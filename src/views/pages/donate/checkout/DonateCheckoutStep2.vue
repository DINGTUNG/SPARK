<script setup>
import DonateCheckoutCard from '@/components/func-items/cards/DonateCheckoutCard.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'


</script>

<template>
  <div>

    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 100" :key="n">

    <DonateCheckoutCard />
    <CheckoutButtons/>




  </div>
</template>

<style scoped lang="scss">
// @import '@/assets/sass/pages/donate/checkout/donate-checkout-step-2';
</style>
