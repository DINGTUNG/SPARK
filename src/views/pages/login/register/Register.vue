<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
    <div class="register_container">
        <div class="register_banner">
            <p>助貧不是一個人做很多<br>是每個人都做了一點</p>
            <img :src="'pictures/logo/logo_white_vertical.png'" alt="logo" class="logo">
        </div>


        <div class="register_main">

            <!-- router-view 是巢狀路由的第一個子區塊 -->
            <router-view />

        </div>


    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/register";
</style>
