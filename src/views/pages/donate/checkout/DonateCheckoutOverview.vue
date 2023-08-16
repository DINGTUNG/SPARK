<script setup>
import DonateOverviewTable from '@/components/func-items/table/donate/DonateOverviewTable.vue'
import { useRouter } from 'vue-router';
import { useDonateCartStore} from '@/stores/donate-cart.js';
const donateCartStore = useDonateCartStore();

const router = useRouter()

const goToHomePageTop = () => {
  router.push({ path: '/home' });
  window.scrollTo(0, 0);
  donateCartStore.donateCart.length = 0
}


</script>

<template>
  <div class="donate_checkout_overview_container">
    <div class="main_body">

      <div class="header_wrap">

        <div class="box box_girl">
          <img class="character girl" :src="'pictures/characters/girl/girl_hugging_star.svg'" alt="">
        </div>

        <div class="text">
          <h2 class="title">感謝您一路以來支持星火認養及捐款兒童工作！
          </h2>
          <p class="content">您的善舉將繼續為兒童帶來希望和改變。我們希望您能繼續與我們攜手，為創造一個更美好的未來而努力。如果您有任何疑問或想了解更多關於我們的工作，請隨時與我們聯繫。感謝您的支持！</p>
        </div>

        <div class="box box_boy">
          <img class="character boy" :src="'pictures/characters/boy/boy_lighting_up.svg'" alt="">
        </div>

      </div>

      <div class="donate_overview_table">
        <DonateOverviewTable />
      </div>

      <button @click="goToHomePageTop">
        返回首頁
      </button>


      <img class="deco" :src="'pictures/decorations/illustration/shooting_star_golden2.svg'" alt="">

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/donate/checkout/donate-checkout-overview';
</style>
