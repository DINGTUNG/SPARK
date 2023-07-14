<script setup>

import { RouterView } from 'vue-router'

// import { provide } from 'vue'
// import getImgSrc from './utils/getImgSrc.js'

// provide('getImgSrc', getImgSrc)

import Header from '@/layout/Header.vue';
// import Footer from '@/layout/Footer.vue';
// import LeftMenu from '@/layout/LeftMenu.vue';
import RightMenu from '@/layout/RightMenu.vue';

</script>

<template>


  <Header />



<<<<<<< HEAD
  <RightMenu/>

  <Footer />
=======
  <RightMenu />
  <!-- <LeftMenu /> -->

  <RouterView />
  <!-- <Footer /> -->
>>>>>>> bb0aea1d1bf373ee1e93e8aca1bfc8ab07faffc7
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';
</style>
