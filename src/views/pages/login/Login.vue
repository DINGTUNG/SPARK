<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
  <div class="login_body">
    <div class="login_banner_PC">
      <p>助貧不是一個人做很多<br>是每個人都做了一點</p>
      <img :src="'pictures/logo/logo_white_vertical.png'" alt="logo" class="logo">
    </div>
    <div class="login_banner_MB">
      <p>助貧不是一個人做很多<br>是每個人都做了一點</p>
      <img :src="'pictures/logo/logo_white_second.svg'" alt="logo" class="logo">
    </div>
  </div>
  <router-view />
</template>
<style scoped lang="scss">
@import "@/assets/sass/pages/login";
</style>
