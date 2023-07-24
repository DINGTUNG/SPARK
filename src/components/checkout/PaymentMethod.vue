<script setup>
import {toRaw } from 'vue';
import {useSponsorCartStore,PaymentMethod } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore()

const selectMethod = (methodType) => {
  sponsorCartStore.chosenMethodType = methodType
}

</script>

<template>
  <table class="checkout_table">

    <caption>
      繳款方式
    </caption>

    <tr v-for="(methodType, index) in PaymentMethod.METHODS" :key="index">
      <td class="payment_method">

        <input type="radio" name="payment_method" :checked="methodType === toRaw(sponsorCartStore.chosenMethodType)" @click="selectMethod(methodType)">

        <label>{{ methodType.display }}</label>
      </td>

    </tr>

  </table>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/checkout/payment-method';
</style>
