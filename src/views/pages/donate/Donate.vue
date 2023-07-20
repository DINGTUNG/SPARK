<script setup>
import DonateContentCard from '@/components/donate/DonateContentCard.vue';
import DonateCheckoutSideList from '@/layout/checkout-side-list/DonateCheckoutSideList.vue';


import { ref } from 'vue';
const h1 = ref("捐款內容")
</script>

<template>
  <div class="banner">
    <img :src="'pictures/images/donate/donate-content/banner.jpg'" alt="捐款內容封面">
  </div>

  <div class="donate_container">
    <div class="main_body">
      <div class="title_wrap">
        <h1 class="title">{{ h1 }}</h1>
        <div class="titleline">
        </div>
      </div>
      <DonateContentCard />
      <div class="deco_flowering">
        <img :src="'pictures/characters/boy/boy_flowering.png'" alt="男孩澆花">
      </div>
    </div>
  </div>
  <DonateCheckoutSideList />
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/donate/donate";
</style>
