<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="portal_container" >
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

  </div>
</template>
<style scoped lang="scss">
@import "@/assets/sass/pages/portal";
</style>



