<script setup>
import SponsorCheckoutSideList from '@/layout/checkout-side-list/SponsorCheckoutSideList.vue';

import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

</script>

<template>
  <div class="title_img">
    <img :src="'pictures/images/sponsor/banner.png'" alt="banner">
  </div>
  <div class="container">
    <div class="main_body">
      <div class="title_block">
        <h1>我要認養</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <div class="sponsor_block">
        <div class="sponsor_img">
          <img :src="'pictures/images/sponsor/introduction.jpg'" alt="">
        </div>

          <div class="sponsor_text">
            <h4>認養兒童方案</h4>
            <p>
              家扶自1950年便開始了在台灣的服務，「認養制度」協助貧困或家庭破碎的兒童、青少年獲得穩定的經濟補助，並由專業的社會工作人員提供團體活動、親職教育、課業、升學就業輔導及社會資源轉介等各項服務，協助改善兒童的家庭環境，進而達到自助自立。
              每童每月1,000元的認養費，其中85%直接撥給兒童補助其生活、教育、營養或醫療等費用，另外15%是各項專業輔導服務及資訊查詢、聯繫說明、安排認養、資料處理與行政作業管理等費用。
            </p>
            <h4>每月 <span class="price">NTD 2,000 </span>認養費</h4>
          </div>
      </div>
      <div class="line"></div>
      <div class="sponsor_location">
        <h3>認養地區</h3>
        <div class="sponsor_location_inner">
          <div class="location_card" v-for="location in sponsorCartStore.locationList" :key="location.id">
            <div class="card_title">
              <img :src="location.img" alt="stat">
              <h5>{{ location.name }}</h5>
            </div>
            <div class="card_count">
              <i class="fa-solid fa-minus" @click="sponsorCartStore.removeFromCart(location.id, 1)"></i>
              <p>{{ sponsorCartStore.getCurrentCountInCart(location.id) }}</p>
              <i class="fa-solid fa-plus"  @click="sponsorCartStore.addToCart(location.id, 1)"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button class="back">回上頁</button>
        <button class="pay_list" @click="sponsorCartStore.showSideList">加入認養清單</button>
        <div class="icon_img">
          <img :src="'pictures/characters/star/star_sleeping.svg'" alt="">
        </div>
      </div>
    </div>
  </div>
  <SponsorCheckoutSideList />
</template>

<style scoped lang="scss">
@import'@/assets/sass/pages/sponsor/sponsor';
</style>