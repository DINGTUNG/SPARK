<script setup>
  import { reactive } from "vue";
  import { BulletinBoard1, BulletinBoard2, BulletinBoard3 } from '@/constant/workResult.constant.js'

  
  const bulletinBoard1 = reactive(BulletinBoard1)
  const bulletinBoard2 = reactive(BulletinBoard2)
  const bulletinBoard3 = reactive(BulletinBoard3)
</script>

<template>
    <div class="result_display">
      <div class="curve_decoration">
        <img :src="'pictures/images/results/work-result/curve_decoration.png'" alt="">
      </div>
      <div class="result_title">
        <img :src="'pictures/decorations/illustration/orange_asterisk_single_2.svg'" alt="裝飾">
        <h1>成果佈告欄</h1>
      </div>
      <div class="img_Marquee">
        <Vue3Marquee
        :gradient="true"
        :gradient-color="[38, 60, 119]"
        gradient-length="30%"
        >
          <img v-for=" (img, index) in bulletinBoard1 " :key="index" :src="img"/>
        </Vue3Marquee>
        <Vue3Marquee
        :gradient="true"
        :gradient-color="[38, 60, 119]"
        gradient-length="30%"
        :direction="'reverse'">
          <img v-for=" (img, index) in bulletinBoard2 " :key="index" :src="img"/>
        </Vue3Marquee>
        <Vue3Marquee
        :gradient="true"
        :gradient-color="[38, 60, 119]"
        gradient-length="30%">
          <img v-for=" (img, index) in bulletinBoard3 " :key="index" :src="img"/>
        </Vue3Marquee>
      </div>

        <div class="story">
          <div class="story_title">
            <h2>故事藝廊</h2>
            <img :src="'pictures/decorations/illustration/golden_asterisk.svg'" alt="裝飾">
          </div>
          <div class="bottom">
            <div class="text">
            在故事藝廊中，每張照片都是一個獨特的完整故事，這些故事是珍貴的見證，展示了愛的力量與兒童在溫暖和關愛環境中的成長過程。這些故事將觸動您的心靈。星火希望，通過分享這些溫馨故事，能夠促進對於認養兒童的支持和關注，為每個孩子創造機會和幸福。
          </div>
          <RouterLink to="/story-gallery" class="link story-gallery">
             點我前往
          </RouterLink>
          </div>
        </div>
    </div>
    <div class="bottom_wrap">
      <div class="stars">
        <div class="two">
          <img :src="'pictures/decorations/illustration/two_golden_stars.svg'" alt="星星裝飾">
        </div>
        <div class="three">
          <img :src="'pictures/decorations/illustration/three_asterisk.svg'" alt="星星裝飾">
        </div>
      </div>
      <div class="link">
      <div class="item">
        <h2>歷年報告</h2>
        <i class="fa-solid fa-clipboard-list"></i>
        <Router-link to="/">點我前往</Router-link>
      </div>
      <div class="item">
        <h2>服務里程碑</h2>
        <i class="fa-solid fa-flag"></i>
        <Router-link to="/">點我前往</Router-link>
      </div>
    </div>
    </div>


</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/work-result/work-result';
</style>