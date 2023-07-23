<script setup>
import { useRouter } from 'vue-router';
import { useDonateCartStore } from '@/stores/donate-cart.js';
const router = useRouter()
const donateCartStore = useDonateCartStore();

const addPrice = (price) => {
  donateCartStore.message = price;
}

</script>

<template>
  <div class="donate_page" :class="{ active: donateCartStore.isSideListShow }">
    <div class="title">
      <h2 v-if="donateCartStore.activeCard.title!=null">{{ donateCartStore.activeCard.title }}</h2>
      <h2 v-if="donateCartStore.activeCard.title==null">捐款清單</h2>
      <i class="fa-regular fa-circle-xmark" @click="donateCartStore.hideSideList" ></i>
    </div>
    <div class="donate_price">
      <h5>捐款金額</h5>
      <div class="price_button">
        <button @click="addPrice(donateCartStore.price[0].price)">{{ donateCartStore.price[0].price }}</button>
        <button @click="addPrice(donateCartStore.price[1].price)">{{ donateCartStore.price[1].price }}</button>
        <button @click="addPrice(donateCartStore.price[2].price)">{{ donateCartStore.price[2].price }}</button>
        <button @click="addPrice(donateCartStore.price[3].price)">{{ donateCartStore.price[3].price }}</button>
      </div>
      <input type="text" placeholder="輸入金額，不可小於最低金額100元" v-model="donateCartStore.message">
    </div>
    <div class="img">
      <img :src="'public/pictures/decorations/illustration/blue_shooting_stars.svg'" alt="流星" class="star">
      <img :src="'public/pictures/characters/star/star_superman.svg'" alt="超人" class="man">
    </div>
    <div class="donate_total">
      <div class="total_price">
        <h5>捐款費用</h5>
        <h5>NTD{{ donateCartStore.formattedAmount }}</h5>
      </div>
      <div class="price_button">
        <button @click="donateCartStore.goToCheckoutPage">核對捐款清單</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/layout/checkout-side-list/_donate-checkout-side-list';
</style>
