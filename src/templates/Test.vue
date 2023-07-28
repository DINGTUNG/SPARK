<template>
  <swiper :spaceBetween="30" :effect="'fade'" :navigation="false" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
  clickable: false,
}" :modules="modules" class="mySwiper">
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
    };
  },
};
</script>



<style scoped lang="scss">
#app {
  height: 100%
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

@import '@/assets/sass/test';
</style>





