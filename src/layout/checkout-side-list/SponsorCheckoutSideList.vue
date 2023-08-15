<script setup>
import { useRouter } from 'vue-router';
import { useSponsorCartStore, Location } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const router = useRouter()

const goToCheckoutPageAndCloseSideList = () => {
  if (sponsorCartStore.isCartNotEmpty) {
    router.push({ path: '/sponsor-checkout-step-1' });
    sponsorCartStore.hideSideList();
    window.scrollTo(0, 0);
  } else {
    alert('請選擇認養地區')
  }

}

</script>
<template>
  <div class="sponsor_page" :class="{ active: sponsorCartStore.isSideListShow }">
    <div class="title">
      <h2>我要認養</h2>
      <i class="fa-regular fa-circle-xmark" @click="sponsorCartStore.hideSideList"></i>
    </div>  
    <p class="none" v-if="!sponsorCartStore.isCartNotEmpty">請選擇認養地區</p>
    <div class="location_card_inner">
      <div class="location_card" v-for="[locationId] in [...sponsorCartStore.cart]" :key="locationId">
        <div class="sponsor_inner">
          <h5>{{ sponsorCartStore.getLocationFromSponsorLocationList(locationId) }}</h5>
          <div class="card_count">
            <i class="fa-solid fa-circle-minus" @click="sponsorCartStore.removeFromCart(locationId, 1)"></i>
            <p>{{ sponsorCartStore.getCurrentCountInCart(locationId) }}</p>
            <i class="fa-solid fa-circle-plus" @click="sponsorCartStore.addToCart(locationId, 1)"></i>
          </div>
          <h5>NTD {{ sponsorCartStore.getLocationTotalCost(locationId ) }}</h5>
        </div>
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
  <div :class="['blur-background', { 'show': sponsorCartStore.isBlurred }]"></div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/layout/checkout-side-list/sponsor-checkout-side-list';
</style>
