<script setup>
import CheckoutTable from '@/components/func-items/table/CheckoutTable.vue'
import CheckoutCards from '@/components/func-items/cards/CheckoutCards.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'


</script>

<template>
  <div>
    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 20" :key="n">
    <div class="checkout_wrap">

      <div class="checkout_table_wrap">
        <CheckoutTable />
      </div>

      
      <div class="checkout_overview_wrap">
        <CheckoutCards />
        <CheckoutButtons />
      </div>


    </div>





  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/donate/checkout/donate-checkout-step-1';

div.checkout_wrap {



  div.checkout_overview_wrap {
    @include flex_vm;
    gap: 40px;
  }

}
</style>
