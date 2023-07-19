<script setup>
import { ref } from 'vue';

const tableTitle = ref("認養清單");

const tableHeader = 
  ["認養地區", "認養人數", "金額"]

</script>

<template>
  <table class="checkout_table">
    <caption class="caption">
      <h2>{{ tableTitle }}</h2>
    </caption>
    <tr>
      <th>{{ tableHeader[0] }}</th>
      <th>{{ tableHeader[1] }}</th>
      <th>{{ tableHeader[2] }}</th>

    </tr>
  </table>
</template>

<style scoped lang="scss"></style>
