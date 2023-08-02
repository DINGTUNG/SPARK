<script setup>
import { ref } from 'vue';
import 'animate.css';

const isFlap = ref(false);

const openClick = () => {
  isFlap.value = true;
};

const onCloseIconClick = () => {
  isFlap.value = false;
};

</script>

<template>
    <div class="bg-wrapper">
        <div class="letter-wrapper" :class="{ flap: isFlap }" ref="letterRef">
            <span class="text">小朋友來信囉，點擊星星打開看看吧！
            </span>
            <span class="notice">* 詳細內容請至【會員中心】>【感謝函中心】查看</span>
            <div class="letter animate__bounceIn">
                <div class="card">
                    <img class="child_letter" :src="'pictures/images/letter-animation/child_letter.png'" alt="感謝函">
                    <span class="fa fa-close close-icon" @click="onCloseIconClick"></span>
                </div>
                <img class="letter_front" :src="'pictures/images/letter-animation/letter_front.svg'" alt="信封">
                <img class="open_icon" :src="'pictures/images/letter-animation/smilestar_blue.svg'"  @click="openClick" alt="信封">
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/letter-animation";
</style>