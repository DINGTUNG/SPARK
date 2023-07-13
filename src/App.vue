<script setup>

import {  } from 'vue-router'

import { provide } from 'vue'
import getImgSrc from './utils/getImgSrc.js'

provide('getImgSrc', getImgSrc)

import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
import RightMenu from '@/layout/RightMenu.vue';



</script>


<template>
  <Header/> 

  <RightMenu />

  <RouterLink to="/single-news" class="link single-news">最新消息</RouterLink>
  <Footer/>



</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';


body{
  margin: 0;
  padding: 0;
}


</style>
