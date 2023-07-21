<script setup>
import { ref } from 'vue';
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const tableTitle = ref("繳款方式");


</script>

<template>
  <table class="checkout_table">

    <caption>
      {{ tableTitle }}
    </caption>

    <tr v-for="paymentMethod in   sponsorCartStore.paymentMethodList  " :key="paymentMethod.id">
      <td class="payment_method">

        <input type="radio" :id="paymentMethod.id" name="payment_method" :value="paymentMethod.method"
          :checked="paymentMethod.chosen">

        <label for="{{paymentMethod.id}}">{{ paymentMethod.method }}</label>
      </td>

    </tr>

  </table>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/checkout/payment-method';
</style>
