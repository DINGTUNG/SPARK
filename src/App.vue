<script setup>

import { RouterView } from 'vue-router'

// import { provide } from 'vue'
// import getImgSrc from './utils/getImgSrc.js'

// provide('getImgSrc', getImgSrc)

import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
import LeftMenu from '@/layout/LeftMenu.vue';
import RightMenu from '@/layout/RightMenu.vue';

</script>

<template>
  <Header />
  <RightMenu />
  <LeftMenu />
  <RouterView />
  <Footer />

</template>

<style lang="scss">
</style>
