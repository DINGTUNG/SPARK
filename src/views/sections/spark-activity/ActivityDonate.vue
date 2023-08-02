<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import { useDonateCartStore, DonateProject } from '@/stores/donate-cart.js';
const donateCartStore = useDonateCartStore();

const router = useRouter()



const goToDonatePageAndScrollToBottom = () => {
  router.push({ path: '/donate' });
  // setTimeout(() => {
  //   window.scrollTo({
  //     top: 2900,
  //     left: 0,
  //     behavior: "smooth",
  //   })
  // }, 0)

  donateCartStore.showSideListForActivityDonate();
  donateCartStore.chosenDonateProject = reactive(DonateProject.TYPE.SPARK_ACTIVITY)
 scrollToElement();
}

const scrollToElement = () => {
    setTimeout(() => {
      const D007 = document.getElementById(DonateProject.TYPES[6].id)
      D007.scrollIntoView({ behavior: 'smooth' })
    }, 500)
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
