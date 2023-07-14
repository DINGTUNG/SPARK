<script setup>

import { RouterView } from 'vue-router'

// import { provide } from 'vue'
// import getImgSrc from './utils/getImgSrc.js'

// provide('getImgSrc', getImgSrc)

import Header from '@/layout/Header.vue';
// import Footer from '@/layout/Footer.vue';
import LeftMenu from '@/layout/LeftMenu.vue';
import RightMenu from '@/layout/RightMenu.vue';

</script>

<template>
  <Header />



  <RightMenu />
  <LeftMenu />

  <RouterView />
  <!-- <Footer/> -->
<<<<<<< HEAD
  <RightMenu/>

  <!-- <LeftMenu /> -->

  <RightMenu />
  <!-- <Footer /> -->

  <RouterView/>

=======
>>>>>>> 08438a64d32184d7f42129ca1c1c47d583eda041
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';
</style>
