<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="portal_container">
    <img :src="'pictures/portal/shooting_star_white.svg'" alt="shooting_star_white" class="shooting_star_white">
    <img :src="'pictures/portal/logo.png'" alt="logo" class="logo">
    <img :src="'pictures/portal/shooting_star_gold.png'" alt="shooting_star_gold" class="shooting_star_gold">
    <img :src="'pictures/portal/three_stars.svg'" alt="three_stars" class="three_stars">
    <div class="portal_img_wrap">
      <div class="portal_img_front">
        <div class="box">
          <img :src="'pictures/portal/front2.svg'" alt="front2"
            @click="router.push({ name: 'home', query: { showLoading: true } })" class="front2_img">
          <img :src="'pictures/portal/front.png'" alt="front"
            @click="router.push({ name: 'home', query: { showLoading: true } })" class="front1_img">
        </div>
        <h2>前台</h2>
      </div>
      <div class="portal_img_back">
        <a href="https://tibamef2e.com/chd102/g3/back-end/">
          <div class="box">
            <img :src="'pictures/portal/back2.svg'" alt="back2" class="back2_img">
            <img :src="'pictures/portal/back.png'" alt="back" class="back1_img">
          </div>
        </a>
        <h2>後台</h2>
      </div>
    </div>
    <p class="wrang">
      本網站為緯育TibaMe_前端設計工程師班第83期學員專題成果作品,本平台僅供學習、展示之用。若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,緯育公司概不負責。若有侵權疑慮,您可以私訊<a href="https://www.facebook.com/TibaMe">[緯育TibaMe]</a>,後續會由專人協助處理。
    </p>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/sass/pages/portal";
</style>



