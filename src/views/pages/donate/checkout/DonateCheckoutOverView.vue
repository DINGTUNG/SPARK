<script setup>
import CheckOutCards from '@/components/cards/CheckOutCards.vue'
import CheckOutButtons from '@/components/buttons/CheckOutButtons.vue'


</script>

<template>
  <div>



    <CheckOutCards />
    <CheckOutButtons/>


    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 100" :key="n">

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/donate/checkout/donate-checkout-overview';
</style>
