<script setup>
import { RouterLink } from 'vue-router'
import News from '@/views/sections/home/News.vue';

</script>

<template>
  <div>

    <RouterLink to="/test">測試頁面</RouterLink>
    <br>
    <RouterLink to="/donate-checkout">donate-checkout</RouterLink>

    <News />

    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 100" :key="n">



  </div>
</template>



<style scoped lang="scss"></style>
