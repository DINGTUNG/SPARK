<script setup>
import DonateContentCard from '@/components/func-items/cards/donate/DonateContentCard.vue';
import DonateCheckoutSideList from '@/layout/checkout-side-list/DonateCheckoutSideList.vue';

</script>

<template>
  <div class="banner">
    <img :src="'pictures/images/donate/donate-content/banner.jpg'" alt="捐款內容封面">
  </div>

  <div class="donate_container">
    <div class="main_body">
      <div class="title_wrap">
        <h1 class="title">捐款內容</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
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
