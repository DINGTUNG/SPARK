<script setup>
import { ref } from 'vue';
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const tableTitle = ref("定期繳款方案");


</script>

<template>
  <table class="checkout_table">

    <caption>
      {{ tableTitle }}
    </caption>

  </table>

    <div class="payment_frequency_wrap" >
      <div v-for="paymentFrequency in  sponsorCartStore.paymentFrequencyList" :key="paymentFrequency.options"
        class="payment_frequency" :class="paymentFrequency.isChosen"
        @click="sponsorCartStore.isChosen">
        {{ paymentFrequency.options }}
      </div>
    </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/func-items/table/payment-frequency-table';
</style>
