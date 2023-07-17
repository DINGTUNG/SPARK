<script setup>
import CheckOutCards from '@/components/cards/CheckOutCards.vue'
import CheckOutButtons from '@/components/buttons/CheckOutButtons.vue'


</script>

<template>
  <div>
  <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 20" :key="n">
    <div class="checkout_wrapper">

    <CheckOutCards />
    <CheckOutButtons/>

    </div>


  


  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/donate/checkout/donate-checkout-step-1';

div.checkout_wrapper{
  @include flex_vm;
  gap: 30px;
}



</style>
