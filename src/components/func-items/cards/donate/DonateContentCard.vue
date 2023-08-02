<script setup>
import { useDonateCartStore, DonateProject } from '@/stores/donate-cart.js';
const donateCartStore = useDonateCartStore();

const luckyDay = Math.random() >= 0.8;

function openDonatePage() {
  const url = 'https://www.buymeacoffee.com/tanuki.jr';
  window.open(url, '_blank');
}

function showSideList(donateProject) {
  donateCartStore.chosenDonateProject = donateProject
  donateCartStore.showSideList()
}


</script>

<template>
  <div class="donate_content_card_list">
    <div class="donate_content_card" v-for="donateProject in DonateProject.TYPES" :key="donateProject.id"
      :ref="donateProject.ref" :id="donateProject.id">
      <div class="card_pic">
        <img :src="donateProject.imgSrc" :alt="donateProject.title">
      </div>
      <div class="card_content">
        <h3>{{ donateProject.title }}</h3>
        <p>{{ donateProject.content }}</p>
        <h4>捐款累計 NTD {{ donateProject.fundSum }}</h4>

        <button @click="showSideList(donateProject)">加入清單</button>
        <!-- 點擊button觸發程式並帶入donateContentCard.id -->
      </div>
    </div>

    <div v-if="luckyDay" class="donate_content_card">
      <div class="card_pic">
        <img :src="DonateProject.TYPE.SIAWASE_TANUKI.imgSrc" alt="DonateProject.TYPE.SIAWASE_TANUKI.">
      </div>
      <div class="card_content">
        <h3>{{ DonateProject.TYPE.SIAWASE_TANUKI.title }}</h3>
        <p>{{ DonateProject.TYPE.SIAWASE_TANUKI.content }}</p>
        <h4>捐款累計 {{ DonateProject.TYPE.SIAWASE_TANUKI.fundSum }}🍠</h4>
        <button @click="openDonatePage">前往贊助</button>
      </div>
    </div>


  </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/components/func-items/cards/donate/donate-content-card";
</style>
