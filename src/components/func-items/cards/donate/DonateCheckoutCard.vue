<script setup>
import { useDonateCartStore } from '@/stores/donate-cart.js';

const donateCartStore = useDonateCartStore();
</script>

<template>
  <div class="check_out_card">

    <h2 class="check_out_overview_title">捐款總攬</h2>

    <div class="checkout_datalist">
      <div class="check_out_data">
        <div class="chosen_donate_project_wrap">
          <span class="chosen_donate_project">{{ donateCartStore.chosenDonateProject.title }}</span>
          <span class="chosen_donate_project">NTD {{ donateCartStore.chosenPrice }}</span>
        </div>
      </div>
    </div>

    <div class="payment">
      <div class="payment_info">
        <span class="payment_title">捐款總計</span>
        <span class="total_price">NTD {{ donateCartStore.chosenPrice }}</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/checkout-card';
</style>
