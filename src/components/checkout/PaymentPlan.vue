<script setup>
import { ref, toRaw } from 'vue';
import { useSponsorCartStore, PaymentPlan } from '@/stores/sponsor-cart.js';

const tableTitle = ref("定期繳款方案");
const sponsorCartStore = useSponsorCartStore()

const selectPlan = (planType) => {
  sponsorCartStore.chosenPlanType = planType
}

// console.log("PaymentPlan.TYPE.MONTH", PaymentPlan.TYPE.MONTH);
// console.log("chosenPlanType", sponsorCartStore.chosenPlanType);
// console.log(PaymentPlan.TYPE.MONTH == toRaw(sponsorCartStore.chosenPlanType));

</script>

<template>
  <table class="checkout_table">

    <caption>
      {{ tableTitle }}
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
