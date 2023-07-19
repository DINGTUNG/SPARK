<script setup>
import { ref } from 'vue';

const tableTitle = ref("捐款清單");

const tableHeader = 
  ["捐款專案","金額"]

</script>

<template>
  <table class="checkout_table">
    <caption class="caption">
      <h2>{{ tableTitle }}</h2>
    </caption>
    <tr>
      <th>{{ tableHeader[0] }}</th>
      <th>{{ tableHeader[1] }}</th>

    </tr>
  </table>
</template>

<style scoped lang="scss"></style>
