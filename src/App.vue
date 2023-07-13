<script setup>

import {  } from 'vue-router'

import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
<<<<<<< HEAD
import RightMenu from '@/layout/RightMenu.vue';
=======
import RightMenu from '@/assets/layout/RightMenu.vue';
>>>>>>> e1a874cb6ee2dcd3b478cc5d4346480144b734ce



</script>


<template>
<<<<<<< HEAD
  <!-- <Header/> -->

  <RightMenu />


  <Footer/>
=======
  <Header/>
  <RouterLink to="/single-news" class="link single-news">最新消息</RouterLink>
  <!-- <RouterView /> -->
  <RightMenu/>
  <Footer />
>>>>>>> e1a874cb6ee2dcd3b478cc5d4346480144b734ce



</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';


body{
  margin: 0;
  padding: 0;
}


</style>
