<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="login_container">
    <img :src="'pictures/portal/shooting_star_white.svg'" alt="shooting_star_white" class="shooting_star_white">
    <img :src="'pictures/portal/logo.png'" alt="logo" class="logo">
    <img :src="'pictures/portal/shooting_star_gold.png'" alt="shooting_star_gold" class="shooting_star_gold">
    <img :src="'pictures/portal/three_stars.svg'" alt="three_stars" class="three_stars">

    <div class="portal_img_wrap">
      <div class="portal_img_front">
        <div class="box">
          <img :src="'pictures/portal/front2.svg'" alt="front2"
            @click="router.push({ name: 'home', query: { showLoading: true } })" class="front2 img">
          <img :src="'pictures/portal/front.png'" alt="front"
            @click="router.push({ name: 'home', query: { showLoading: true } })" class="front1 img">
        </div>
        <h2>前台</h2>
      </div>

      <div class="portal_img_back">
        <div class="box">
          <img :src="'pictures/portal/back2.svg'" alt="back2" @click="router.push({ path: '/donation-project' })"
            class="back2 img">
          <img :src="'pictures/portal/back.png'" alt="back" @click="router.push({ path: '/donation-project' })"
            class="back1 img">
        </div>
        <h2>後台</h2>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/portal";
</style>



