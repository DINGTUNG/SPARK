<script setup>
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

</script>

<template>
  <div class="check_out_card">

    <h2 class="check_out_overview_title">認養總覽</h2>


    <div class="checkout_datalist">

      <div v-for="[locationId] in [...sponsorCartStore.cart]" :key="locationId" class="checkout_data_wrap">

        <div class="checkout_data">

          <span class="name">{{ sponsorCartStore.getLocationFromSponsorLocationList(locationId) }}</span>
          <span class="count">共 {{ sponsorCartStore.getCurrentCountInCart(locationId) }} 位</span>
          <span class="cost">NTD {{ sponsorCartStore.getLocationTotalCost(locationId) }}</span>
        </div>

      </div>

    </div>

    <div class="payment">
      <div class="payment_info">
        <span class="payment_title">認養費({{ sponsorCartStore.chosenPlanType.display}})</span>
        <span class="total_price">NTD {{ sponsorCartStore.totalCost*sponsorCartStore.chosenPlanType.period }} </span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/checkout-card';
</style>
