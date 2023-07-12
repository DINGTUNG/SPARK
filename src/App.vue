<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
<<<<<<< HEAD
    <img alt="Spark logo" class="logo" src="@/assets/images/logo/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/">首頁</RouterLink>
        <RouterLink to="/donate">捐款專案</RouterLink>
        <RouterLink to="/login">會員登入</RouterLink>
        <RouterLink to="./news">最新消息</RouterLink>
      </nav>
=======
    
    <img alt="Spark logo" class="logo" src="@/assets/logo/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/donate">捐款專案</RouterLink>
      <RouterLink to="/login">會員登入</RouterLink>
    </nav>
>>>>>>> bb1e086b6fa7bb50880d1b18ef84718e4c07d4ac

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
