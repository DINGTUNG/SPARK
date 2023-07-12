<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Spark logo" class="logo" src="@/assets/logo/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/donate">捐款專案</RouterLink>
      <RouterLink to="/login">會員登入</RouterLink>
      <RouterLink to="./news">最新消息</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>

<style scoped>
@import '@/assets/sass/base/fonts/_fonts.scss';

nav {
  display: flex;
  gap: 50px;
}

img {
  width: 500px;
}
</style>
