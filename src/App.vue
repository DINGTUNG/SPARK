<script setup>

import { } from 'vue-router'

import { provide } from 'vue'
import getImgSrc from './utils/getImgSrc.js'

provide('getImgSrc', getImgSrc)

import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
<<<<<<< HEAD
import LeftMenu from '@/layout/LeftMenu.vue';
=======
import RightMenu from '@/layout/RightMenu.vue';


>>>>>>> 2234a40e13b1f8f6e02223834c920454e010b8a8

</script>


<template>
<<<<<<< HEAD
  <!-- <Header/> -->
  <LeftMenu/>
  <!-- <Footer/> -->

  
  
  <RightMenu />





=======
<<<<<<< HEAD
  <Header/> 
=======
  <Header />
>>>>>>> dev

  <RightMenu />
  <RouterLink to="/single-news" class="link single-news">最新消息</RouterLink>

<<<<<<< HEAD
  <Footer/>
 
  <!-- <RouterView /> -->

=======
  <RightMenu />
  <Footer />
>>>>>>> dev
>>>>>>> 2234a40e13b1f8f6e02223834c920454e010b8a8
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';


body {
  margin: 0;
  padding: 0;
}
</style>
