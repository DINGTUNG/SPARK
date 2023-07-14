<script setup>
import DonateContentCard from '@/components/donate/DonateContentCard.vue';

import { ref } from 'vue';
const h1 = ref("捐款內容")
</script>

<template>
  <div class="body">

    <div class="section_banner">
      <img :src="assets/images/donate/donate-content/banner.jpg" alt="捐款內容封面">
    </div>
    <div class="section_donate">
      <div class="donate_content">
        <div class="title_wrap">
          <h1 class="title">{{ h1 }}</h1>
          <div class="titleline"></div>
        </div>
        <DonateContentCard />
      </div>
      <div class="deco_flowering">
        <img :src="assets/characters/boy/boy_flowering.png" alt="男孩澆花">
      </div>
    </div>



  </div>
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/donate";
</style>
