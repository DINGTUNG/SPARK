<script setup>
import {toRaw } from 'vue';
import { useSponsorCartStore, PaymentPlan } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore()

const selectPlan = (planType) => {
  sponsorCartStore.chosenPlanType = planType
}

</script>

<template>
  <table class="checkout_table">

    <caption>
    定期繳款方案
    </caption>

  </table>


  <div class="payment_plan_wrap">
    <div v-for="(planType, index) in PaymentPlan.TYPES" :key="index" class="payment_plan"
      :class="{ chosen: planType === toRaw(sponsorCartStore.chosenPlanType) }" @click="selectPlan(planType)">

      <!-- paymentPlan.isChosen === true ? 'chosen' : '' -->

      {{ planType.display }}繳
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/checkout/payment-plan';
</style>
