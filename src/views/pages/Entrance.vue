<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>


<template>
    <div class="body">
        <div class="tittle_block">
            <img :src="'pictures/decorations/illustration/shooting_star_white.svg'" alt="shoot" class="shooting_star_white">
            <div class="title_text">
                <img :src="'pictures/images/title/title.png'" alt="title">
                <img :src="'pictures/images/title/shoot.png'" alt="shoot" class="shoot">
            </div>
            <div class="title_img">
                <div class="title_img_font">
                    <img :src="'pictures/images/title/Front.png'" alt="font" @click="router.push({ path: '/home' })">
                    <h2>前台</h2>
                </div>
                <div class="title_img_back">
                    <img :src="'pictures/images/title/back.png'" alt="back">
                    <h2>後台</h2>
                </div>
            </div>
            <div class="star_img">
                <img :src="'pictures/images/title/star.svg'" alt="star">
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/_title";
</style>
