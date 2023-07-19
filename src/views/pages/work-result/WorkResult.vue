<script setup>
  import { reactive } from "vue";
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css/bundle';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  const bulletinBoard1 = reactive([
    "pictures/images/results/work-result/work_result_1.png",
    "pictures/images/results/work-result/work_result_2.png",
    "pictures/images/results/work-result/work_result_3.png",
    "pictures/images/results/work-result/work_result_4.png",
    "pictures/images/results/work-result/work_result_5.png",
    "pictures/images/results/work-result/work_result_6.png",
  ])
  const bulletinBoard2 = reactive([
    "pictures/images/results/work-result/work_result_7.png",
    "pictures/images/results/work-result/work_result_8.png",
    "pictures/images/results/work-result/work_result_9.png",
    "pictures/images/results/work-result/work_result_10.png",
    "pictures/images/results/work-result/work_result_11.png",
    "pictures/images/results/work-result/work_result_12.png",
  ])
  const bulletinBoard3 = reactive([
    "pictures/images/results/work-result/work_result_13.png",
    "pictures/images/results/work-result/work_result_14.png",
    "pictures/images/results/work-result/work_result_15.png",
    "pictures/images/results/work-result/work_result_16.png",
    "pictures/images/results/work-result/work_result_17.png",
    "pictures/images/results/work-result/work_result_18.png",
  ])
</script>

<template>
    <div class="result_display">
      <div class="result_title">
        <img :src="'pictures/decorations/illustration/orange_asterisk_single_2.svg'" alt="裝飾">
        <h1>成果佈告欄</h1>
      </div>
        <swiper
        :slidesPerView="5"
        :spaceBetween="15"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :navigation="false"
        :modules="modules"
        class="bulletinBoard"
      > 

            <swiper-slide v-for="(img, index) in bulletinBoard1" :key="index" class="swiper-item">
              <img :src="img" alt="成果布告欄示意圖片">
            </swiper-slide>

        </swiper>
        <swiper
        :slidesPerView="5"
        :spaceBetween="15"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :navigation="false"
        :modules="modules"
        class="bulletinBoard"
      > 

            <swiper-slide v-for="(img, index) in bulletinBoard2" :key="index" class="swiper-item">
              <img :src="img" alt="成果布告欄示意圖片">
            </swiper-slide>

        </swiper>
        <swiper
        :slidesPerView="5"
        :spaceBetween="15"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :navigation="false"
        :modules="modules"
        class="bulletinBoard"
      > 

            <swiper-slide v-for="(img, index) in bulletinBoard3" :key="index" class="swiper-item">
              <img :src="img" alt="成果布告欄示意圖片">
            </swiper-slide>

        </swiper>
        <div class="story">
          <div class="story_title">
            <h2>故事藝廊</h2>
            <img :src="'pictures/decorations/illustration/golden_asterisk.svg'" alt="裝飾">
          </div>
          <div class="bottom">
            <div class="text">
            在故事藝廊中，每張照片都是一個獨特的完整故事，這些故事是珍貴的見證，展示了愛的力量與兒童在溫暖和關愛環境中的成長過程。這些故事將觸動您的心靈。星火希望，通過分享這些溫馨故事，能夠促進對於認養兒童的支持和關注，為每個孩子創造機會和幸福。
          </div>
          <RouterLink to="/story-gallery" class="link story-gallery">
             點我前往
          </RouterLink>
          </div>
        </div>
    </div>
    <div class="bottom_wrap">
      <div class="link">
      <div class="item">
        <h2>歷年報告</h2>
        <i class="fa-solid fa-clipboard-list"></i>
        <Router-link to="/">點我前往</Router-link>
      </div>
      <div class="item">
        <h2>服務里程碑</h2>
        <i class="fa-solid fa-flag"></i>
        <Router-link to="/">點我前往</Router-link>
      </div>
    </div>
    </div>


</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/work-result/work-result';
</style>