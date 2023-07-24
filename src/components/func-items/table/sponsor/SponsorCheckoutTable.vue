<script setup>
import { useSponsorCartStore,Location } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();


</script>

<template>
  <table class="checkout_table">

    <caption>
      認養清單
    </caption>

    <thead>
      <tr>
        <th>認養地區</th>
        <th>認養人數</th>
        <th>金額</th>
        <th></th>
      </tr>
    </thead>

    <tbody v-for="[locationId] in [...sponsorCartStore.cart]" :key="locationId" >
      <tr>
        <td>{{ Location.getLocationFrom(locationId).name }}</td>

        <td class="add_and_remove">
          
          <div>
          <i class="fa-solid fa-circle-minus"
            @click="sponsorCartStore.removeFromCart(locationId, 1)"></i>
          </div>

          <span class="count"> {{ sponsorCartStore.getCurrentCountInCart(locationId) }}</span>
          
          <div>
          <i class="fa-solid fa-circle-plus"
            @click="sponsorCartStore.addToCart(locationId, 1)"></i>
          </div>

        </td>

        <td>NTD {{ sponsorCartStore.getLocationTotalCost(locationId) }}</td>
        
        <td class="discard"><i class="fa-regular fa-circle-xmark"
            @click="sponsorCartStore.removeFromCart(locationId, sponsorCartStore.getCurrentCountInCart(locationId))"></i></td>
      </tr>
    </tbody>

  </table>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/sponsor/sponsor-checkout-table';
</style>
