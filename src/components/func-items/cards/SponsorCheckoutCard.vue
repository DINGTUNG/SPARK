<script setup>
import { ref } from 'vue';

import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const checkoutOverviewTitle = ref("認養總覽");
const paymentTitle = ref("認養費");

</script>

<template>
  <div class="check_out_card">

    <h2 class="check_out_overview_title">{{ checkoutOverviewTitle }}</h2>


    <div class="checkout_datalist">

      <div v-for="location in sponsorCartStore.locationList" :key="location.id" class="checkout_data_wrap">

        <div v-if="sponsorCartStore.getCurrentCountInCart(location.id) != 0" class="checkout_data">

          <span class="name">{{ location.name }}</span>
          <span class="count">共 {{ sponsorCartStore.getCurrentCountInCart(location.id) }} 位</span>
          <span class="cost">NTD {{ sponsorCartStore.getLocationTotalCost(location.id) }}</span>
        </div>

      </div>

    </div>

    <div class="payment">
      <div class="payment_info">
        <span class="payment_title">{{ paymentTitle }}({{ sponsorCartStore.chosenPlanType.display}})</span>
        <span class="total_price">NTD {{ sponsorCartStore.totalCost*sponsorCartStore.chosenPlanType.period }} </span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/checkout-card';
</style>
