<script setup>
import { useDonateCartStore } from '@/stores/donate-cart.js';
const donateCartStore = useDonateCartStore();

const luckyDay = Math.random() >= 0.8;

function openDonatePage() {
  const url = 'https://www.buymeacoffee.com/tanuki.jr';
  window.open(url, '_blank');
}

</script>

<template>
  <div class="donate_content_card_list">
    <div class="donate_content_card" v-for="donateContentCard in donateCartStore.donateContentCardList" :key="donateContentCard.id">
      <div class="card_pic">
        <img :src="donateContentCard.imgSrc" :alt="donateContentCard.title">
      </div>
      <div class="card_content">
        <h3>{{ donateContentCard.title }}</h3>
        <p>{{ donateContentCard.content }}</p>
        <h4>{{ donateContentCard.fundSum }}</h4>
        
        <button @click="donateCartStore.showSideList(donateContentCard.id)" >加 入 清 單</button>
        <!-- 點擊button觸發程式並帶入donateContentCard.id -->
      </div>
    </div>

    <div v-if="luckyDay" class="donate_content_card">
      <div class="card_pic">
        <img :src="'pictures/test/tanuki-rectangle.png'" alt="幸福狸貓">
      </div>
      <div class="card_content">
        <h3>幸福狸貓</h3>
        <p>散播幸福散播愛，請支持並贊助二狸貓熱呼呼的番薯!</p>
        <h4>捐款累計 520🍠</h4>
        <button @click="openDonatePage">前往贊助</button>
      </div>
    </div>


  </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/components/donate/donate-content-card";
</style>
