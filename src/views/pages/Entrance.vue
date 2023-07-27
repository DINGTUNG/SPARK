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
                        <img :src="'pictures/images/title/font2.svg'" alt="font2" @click="router.push({ path: '/home' })" class="font2">
                    <div class="title_img_text">
                        <h2>前台</h2>
                    </div>

                </div>


                <div class="title_img_back">
                    <img :src="'pictures/images/title/back.png'" alt="back"
                        @click="router.push({ path: '/donation-project' })">
                    <img :src="'pictures/images/title/back2.svg'" alt="back2"
                        @click="router.push({ path: '/donation-project' })" class="back2">
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
