<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    
    <img alt="Spark logo" class="logo" src="@/assets/images/logo/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/donate">捐款專案</RouterLink>
      <RouterLink to="/login">會員登入</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap');

nav {
  display: flex;
  gap: 50px;
}

img{
  width: 500px;
}

</style>
