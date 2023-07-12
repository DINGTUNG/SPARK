<script setup>

import { RouterLink, RouterView } from 'vue-router'

import Header from '@/assets/layout/Header.vue';
import Footer from '@/assets/layout/Footer.vue';



</script>


<template>
  <Header />
  <RouterLink to="/single-news" class="link single-news">最新消息</RouterLink>
  <Footer />

  <!-- <RouterView /> -->
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';
</style>
