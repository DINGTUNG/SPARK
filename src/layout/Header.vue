<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <RouterLink to="/" class="link home"><img alt="Spark logo" class="logo" :src="'pictures/logo/logo_blue.svg'"/></RouterLink>
        
        <div class="wrapper">
            <nav>
                <RouterLink to="/about" class="link about">認識星火</RouterLink>
                <RouterLink to="/service" class="link service">服務內容</RouterLink>
                <RouterLink to="/work-result" class="link work-result">成果佈告欄</RouterLink>
                <RouterLink to="/sponsor-location" class="link sponsor-location">認養計畫</RouterLink>
                <RouterLink to="/donate" class="link donate">捐款專案</RouterLink>
                <RouterLink to="/contact" class="link contact">星火之友</RouterLink>
                <RouterLink to="/spark-project" class="link spark-project">星火計畫</RouterLink>
                <RouterLink to="/login" class="link login" >會員登入</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "@/assets/sass/layout/header";
</style>
