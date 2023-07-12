<script setup>

import Header from '@/assets/layout/Header.vue';
import Footer from '@/assets/layout/Footer.vue';



</script>


<template>
  <Header/>
  <RouterLink to="news" class="news" >最新消息</RouterLink>
  <Footer/>
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';

</style>
