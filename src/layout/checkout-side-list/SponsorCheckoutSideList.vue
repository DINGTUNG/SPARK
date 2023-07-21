<script setup>
import { useRouter } from 'vue-router';
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const router = useRouter()

const goToCheckoutPageAndCloseSideList = () => {
  router.push({ path: '/sponsor-checkout-step-1' });
  sponsorCartStore.hideSideList();
}

</script>
<template>
  <div class="sponsor_page" :class="{ active: sponsorCartStore.isSideListShow }">
    <div class="title">
      <h2>我要認養</h2>
      <i class="fa-regular fa-circle-xmark" @click="sponsorCartStore.hideSideList"></i>
    </div>

    <p class="none" v-if="!sponsorCartStore.isCartNotEmpty">此頁面現無任何商品</p>

    <div class="location_card" v-for="location in sponsorCartStore.locationList" :key="location.id">
      
      <div v-if="sponsorCartStore.getCurrentCountInCart(location.id) != 0" class="sponsor_inner">
        <h5>{{ location.name }}</h5>
        <div class="card_count">
          <i class="fa-solid fa-circle-minus" @click="sponsorCartStore.removeFromCart(location.id, 1)"></i>
          <p>{{ sponsorCartStore.getCurrentCountInCart(location.id) }}</p>
          <i class="fa-solid fa-circle-plus" @click="sponsorCartStore.addToCart(location.id, 1)"></i>
        </div>
        <h5>NTD {{ sponsorCartStore.getLocationTotalCost(location.id) }}</h5>
      </div>
    </div>

    <div class="sponsor_total">
      <div class="total_price">
        <h5>認養費用</h5>
        <h5>NTD {{ sponsorCartStore.totalCost }}</h5>
      </div>
      <div class="price_button">
        <button @click="goToCheckoutPageAndCloseSideList">核對認養清單</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/layout/checkout-side-list/sponsor-checkout-side-list';
</style>
