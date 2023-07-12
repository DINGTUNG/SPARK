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
nav {
  display: flex;
  gap: 50px;
}
</style>
