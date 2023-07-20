<script setup>
import { ref } from 'vue';
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();


const tableTitle = ref("認養清單");

const tableHeader =
  ["認養地區", "認養人數", "金額"]



</script>

<template>
  <table class="checkout_table">

    <caption>
      {{ tableTitle }}
    </caption>

    <thead>
      <tr>
        <th>{{ tableHeader[0] }}</th>
        <th>{{ tableHeader[1] }}</th>
        <th>{{ tableHeader[2] }}</th>
        <th></th>
      </tr>
    </thead>

    <tbody v-for="location in sponsorCartStore.locationList" :key="location.id" >
      <tr v-if="sponsorCartStore.getCurrentCountInCart(location.id) != 0">
        <td>{{ location.name }}</td>
        <td class="add_and_remove"><i class="fa-solid fa-circle-minus"
            @click="sponsorCartStore.removeFromCart(location.id, 1)"></i>
          <span class="count"> {{ sponsorCartStore.getCurrentCountInCart(location.id) }}</span><i class="fa-solid fa-circle-plus"
            @click="sponsorCartStore.addToCart(location.id, 1)"></i>
        </td>
        <td>NTD {{ sponsorCartStore.getLocationTotalCost(location.id) }}</td>
        
        <td class="discard"><i class="fa-regular fa-circle-xmark"
            @click="sponsorCartStore.removeFromCart(location.id, sponsorCartStore.getCurrentCountInCart(location.id))"></i></td>
      </tr>
    </tbody>

  </table>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/sponsor-checkout-table';
</style>
