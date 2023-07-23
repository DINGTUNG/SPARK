<script setup>
import { ref } from 'vue';
import { useSponsorCartStore} from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const tableTitle = ref("繳款方式");


</script>

<template>
  <table class="checkout_table">

    <caption>
      {{ tableTitle }}
    </caption>

    <!-- <tr v-for="method in   sponsorCartStore.PaymentMethod  " :key="method.id">
      <td class="payment_method">

        <input type="radio" name="payment_method">

        <label>{{ sponsorCartStore.chosenMethodType.display}}</label>
      </td>

    </tr> -->

  </table>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/checkout/payment-method';
</style>
