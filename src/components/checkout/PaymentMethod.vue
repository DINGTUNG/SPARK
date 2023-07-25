<script setup>
import { toRaw } from 'vue';
import { usePaymentStore,PaymentMethod } from '@/stores/payment.js';

const paymentStore = usePaymentStore()
const selectMethod = (methodType) => {
  paymentStore.chosenMethodType = methodType
}

</script>

<template>
  <table class="checkout_table">

    <caption>
      繳款方式
    </caption>

    <tr v-for="(methodType, index) in PaymentMethod.METHODS" :key="index">
      <td class="payment_method">

        <input type="radio" name="payment_method" :checked="methodType === toRaw(paymentStore.chosenMethodType)"
          @click="selectMethod(methodType)">

        <label>{{ methodType.display }}</label>
      </td>

    </tr>

  </table>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/checkout/payment-method';
</style>
