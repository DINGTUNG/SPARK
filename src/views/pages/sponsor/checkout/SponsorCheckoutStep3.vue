<script setup>
import CheckoutCards from '@/components/func-items/cards/CheckoutCards.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'


</script>

<template>
  <div>



    <CheckoutCards />
    <CheckoutButtons/>


    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 100" :key="n">

  </div>
</template>

<style scoped lang="scss">
// @import '@/assets/sass/pages/sponsor/checkout/sponsor-checkout-step-3';
</style>
