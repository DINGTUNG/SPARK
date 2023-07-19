<script setup>
import { ref } from 'vue';

const tableTitle = ref("認養清單");

const tableHeader =
  ["認養地區", "認養人數", "金額"]

</script>

<template>
  <table class="checkout_table">
    <caption>
      {{ tableTitle }}
    </caption>
    <tr>
      <th>{{ tableHeader[0] }}</th>
      <th>{{ tableHeader[1] }}</th>
      <th>{{ tableHeader[2] }}</th>

    </tr>
  </table>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/sponsor-checkout-table';
</style>
