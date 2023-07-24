<script setup>
import { useDonateCartStore } from '@/stores/donate-cart.js';

const donateCartStore = useDonateCartStore();

</script>

<template>
  <table class="checkout_table">

    <caption>
      捐款清單
    </caption>

    <thead>
      <tr>
        <th class="left_column">捐款專案</th>
        <th>金額</th>

      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{{ donateCartStore.chosenDonateProject.title }}</td>

        <td>NTD {{ donateCartStore.chosenPrice }}</td>
      </tr>
    </tbody>

  </table>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/donate/donate-checkout-table';
</style>
