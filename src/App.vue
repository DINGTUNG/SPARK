<script setup>

import {  } from 'vue-router'

import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
<<<<<<< HEAD

=======
import RightMenu from '@/layout/RightMenu.vue';
>>>>>>> d4322363198cc43b49fdecdca15ee54e6e399009



</script>


<template>
  <Header/>
<<<<<<< HEAD

  <RightMenu />


  <!-- <Footer/> -->



=======
  <RouterLink to="/single-news" class="link single-news">最新消息</RouterLink>
  <RightMenu />
  <Footer />
>>>>>>> d4322363198cc43b49fdecdca15ee54e6e399009
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';


body{
  margin: 0;
  padding: 0;
}


</style>
