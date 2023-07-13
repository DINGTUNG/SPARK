<script setup>

import { RouterLink, RouterView } from 'vue-router';

import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
<<<<<<< HEAD
import RightMenu from '@/assets/layout/RightMenu.vue';
=======
import RightMenu from '@/layout/RightMenu.vue';
>>>>>>> e9a31f111a0f6ec1cad8978034b1ca6b3d101300



</script>


<template>
<<<<<<< HEAD
  <Header/>
  <!-- <RouterLink to="/single-news" class="link single-news">最新消息</RouterLink> -->
  <Footer/>
=======
  <Header />
  <RouterLink to="/single-news" class="link single-news">最新消息</RouterLink>
>>>>>>> e9a31f111a0f6ec1cad8978034b1ca6b3d101300

  <RightMenu />


  <Footer />

  <RouterView />
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';
</style>
