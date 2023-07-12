<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo/logo.svg" width="360"/>
        
        <div class="wrapper">
            <nav>
                <RouterLink to="/about" class="link about">認識星火</RouterLink>
                <RouterLink to="/service" class="link service">服務內容</RouterLink>
                <RouterLink to="/result" class="link result">成果佈告欄</RouterLink>
                <RouterLink to="/sponsor" class="link sponsor">認養計畫</RouterLink>
                <RouterLink to="/donate" class="link donate">捐款專案</RouterLink>
                <RouterLink to="/contact" class="link contact">聯絡星火</RouterLink>
                <RouterLink to="/spark-project" class="link spark_project">星火計畫</RouterLink>
                <RouterLink to="/login" class="link login" >會員登入</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "@/assets/sass/layout/header";
</style>
