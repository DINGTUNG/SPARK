<script setup>
import SponsorOverviewTable from '@/components/func-items/table/sponsor/SponsorOverviewTable.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';
const sponsorCartStore = useSponsorCartStore();

const goToHomePageTop = () => {
  router.push({ path: '/home' });
  window.scrollTo(0, 0);
  sponsorCartStore.cart.clear()
}
</script>

<template>
  <div class="sponsor_checkout_overview_container">
    <div class="main_body">

      <div class="header_wrap">
        <img :src="'pictures/characters/girl/girl_hugging_star.svg'" alt="">
        <div class="text">
          <h2 class="title">感謝您一路以來支持星火認養及捐款兒童工作！
          </h2>
          <p class="content">您的善舉將繼續為兒童帶來希望和改變。我們希望您能繼續與我們攜手，為創造一個更美好的未來而努力。如果您有任何疑問或想了解更多關於我們的工作，請隨時與我們聯繫。感謝您的支持！</p>
        </div>
        <img :src="'pictures/characters/boy/boy_lighting_up.svg'" alt="">
      </div>

      <div class="sponsor_overview_table">
        <SponsorOverviewTable />
      </div>

      <button @click="goToHomePageTop">返回首頁</button>

      <img class="deco" :src="'pictures/decorations/illustration/shooting_star_golden2.svg'" alt="">

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/sponsor/checkout/sponsor-checkout-overview';
</style>
