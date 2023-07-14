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

<<<<<<< HEAD


=======
>>>>>>> c6112f4c3045d016b8ffcdaae6edcd0e4a68cbf5
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

>>>>>>> c6112f4c3045d016b8ffcdaae6edcd0e4a68cbf5
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';
</style>
