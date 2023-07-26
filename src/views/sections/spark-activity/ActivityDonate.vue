<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const goToDonatePageAndScrollToBottom = () => {
  router.push({ path: '/donate' });
  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}
</script>

<template>
  <div class="activity_donate">
    <p>為實現孩子們的夢想，讓我們一同參與星火活動，
      <br>攜手為他們的未來奉獻一份真摯的關懷、支持和無盡的愛！
    </p>
    <img class="donate_button" :src="'pictures/spark_activity/donate_button2.svg'" alt=""
      @click="goToDonatePageAndScrollToBottom">
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/sections/spark-activity/activity-donate.scss';
</style>
