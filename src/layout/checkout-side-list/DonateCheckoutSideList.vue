<script setup>
import { ref, toRaw } from 'vue';
import { useDonateCartStore, PriceOption, DonateProject } from '@/stores/donate-cart.js';

import { useRouter } from 'vue-router'
const router = useRouter()
const donateCartStore = useDonateCartStore();

const min = 100
const max = 99999

const price = ref(min)
const limitPrice = () => {
  if (price.value > max) {
    price.value = max
  }
  if (price.value < min) {
    price.value = min
  }
}


const setPrice = (priceOption) => {
  price.value = priceOption.price
}

// const goToCheckoutPage = () => {
//   if (toRaw(donateCartStore.chosenDonateProject) != DonateProject.TYPE.DEFAULT) {
//     donateCartStore.chosenPrice = price.value

//     router.push({
//       path: '/donate-checkout-step-1'
//     })
//     donateCartStore.hideSideList()
//     window.scrollTo(0, 0);
//   } else (
//     alert('請選擇捐款專案')
//   )
// }

const goToCheckoutPage = () => {
  if (projectChosen()) {
    donateCartStore.chosenPrice = price.value

    router.push({
      path: '/donate-checkout-step-1'
    })
    donateCartStore.hideSideList()
    window.scrollTo(0, 0);
  } else (
    alert('請選擇捐款專案')
  )
}

const projectChosen = () => {
  return donateCartStore.donateCart.length > 0
}

</script>

<template>
  <div class="donate_page" :class="{ active: donateCartStore.isSideListShow }">
    <div class="title">

      <h2 v-if="projectChosen()">{{ donateCartStore.donateCart[0].donate_project_name }}</h2>
      <h2 v-else>請選擇捐款方案</h2>
      <i class="fa-regular fa-circle-xmark" @click="donateCartStore.hideSideList"></i>
    </div>


    <div class="donate_price">
      <h3>請選擇捐款金額</h3>
      <div class="price_button">
        <div v-for="index in PriceOption.TYPES.length" :key="index">
          <div v-if="(index - 1) % 2 == 0">
            <button @click="setPrice(PriceOption.TYPES[index - 1])">{{ PriceOption.TYPES[index - 1].display }}</button>
            <button @click="setPrice(PriceOption.TYPES[index])"
              v-if="index < PriceOption.TYPES.length">{{ PriceOption.TYPES[index].display }}</button>
          </div>

        </div>
      </div>
      <input type="number" placeholder="請輸入金額（最低金額100元）" min="100" v-model="price" @blur="limitPrice">
    </div>
    <div class="img">
      <Images :imgSrc="'pictures/decorations/illustration/stars.svg'" :alt="'星星'" id="stars" />
      <Images :imgSrc="'pictures/decorations/illustration/blue_shooting_stars.svg'" :alt="'流星'" id="star" />
      <Images :imgSrc="'pictures/characters/star/star_superman.svg'" :alt="'超人'" id="man" />
      <Images :imgSrc="'pictures/decorations/illustration/golden_star_3.svg'" :alt="'金星'" id="gold-stars" />
    </div>
    <div class="img_bottom">
      <Images :imgSrc="'pictures/decorations/illustration/sprout.svg'" :alt="'草'" id="sprout" />
      <Images :imgSrc="'pictures/decorations/illustration/flower.svg'" :alt="'花'" id="flower" />
    </div>
    <div class="donate_total">
      <div class="total_price">
        <h5>捐款費用</h5>
        <h5>NTD {{ price }}</h5>
      </div>
      <div class="price_button">
        <button @click="goToCheckoutPage">核對捐款清單</button>
      </div>
    </div>
  </div>
  <div :class="['blur-background', { 'show': donateCartStore.isBlurred }]"></div>
</template>
<style scoped lang="scss">
@import'@/assets/sass/layout/checkout-side-list/_donate-checkout-side-list';
</style>
