<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="body">
    <div class="title_block">

      <img :src="'pictures/decorations/illustration/shooting_star_white.svg'" alt="shoot" class="shooting_star_white">

      <div class="title_text">
        <img :src="'pictures/images/title/title.png'" alt="logo" class="logo">
        <img :src="'pictures/images/title/shoot.png'" alt="shoot" class="shoot">
      </div>

      <div class="title_img">
        <div class="title_img_front">
          <div class="box">
            <img :src="'pictures/images/title/front2.svg'" alt="front2"
              @click="router.push({ name: 'home', query: { showLoading: true } })" class="front2 img">
            <img :src="'public/pictures/images/title/Front.png'" alt="front" @click="router.push({ name: 'home', query: { showLoading: true } })"
              class="front1 img">
          </div>
          <h2>前台</h2>

        </div>


        <div class="title_img_back">
          <div class="box">
            <img :src="'pictures/images/title/back2.svg'" alt="back2" @click="router.push({ path: '/donation-project' })"
              class="back2 img">
            <img :src="'pictures/images/title/back.png'" alt="back" @click="router.push({ path: '/donation-project' })"
              class="back1 img">
          </div>

          <h2>後台</h2>
        </div>
      </div>
      <div>
        <img class="star_img" :src="'pictures/images/title/star.svg'" alt="star">
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/portal";
</style>
