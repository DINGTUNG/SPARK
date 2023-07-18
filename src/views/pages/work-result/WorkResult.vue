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

<!-- <template>
  <div class="bulletinBoard">

  </div>
</template> -->

<style scoped lang="scss">
@import '@/assets/sass/pages/work-result/work-result';
</style>
<template>
  <div class="bulletinBoard">
    <swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :loop="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    :pagination="false"
    :navigation="true"
    :modules="modules"
    class="bulletinBoard1"
  > 

        <swiper-slide v-for="(img, index) in bulletinBoard1" :key="index">
          <img :src="img" alt="成果布告欄示意圖片">
        </swiper-slide>

    </swiper>
  </div>

</template>
