<script setup>

import { RouterLink, RouterView } from 'vue-router'

// import { provide } from 'vue'
// import getImgSrc from './utils/getImgSrc.js'

// provide('getImgSrc', getImgSrc)

import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
import LeftMenu from '@/layout/LeftMenu.vue';
import RightMenu from '@/layout/LeftMenu.vue';

</script>

<template>
  <Header />

  <RightMenu />
  <LeftMenu />
  <RouterLink to="/single-news" class="link single-news">最新消息，首頁還沒完成前不要刪</RouterLink><br>
  <RouterLink to="/sponsor" class="link single-news">我要認養，側邊導覽列沒修好不能刪，不然會看不到</RouterLink>
  <RouterView />
  <Footer />
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';
</style>
