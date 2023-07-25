<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
// import { DreamStarPlanList } from '@/stores/dream-star.js';

const props = defineProps({
  id: String,
  imgSrc: String,
  routingLink: String,
  vote: Number,
  title: String,
})


</script>
<template>
  <div class="dream_star_card_container">

    <div class="dream_star_card_wrap">
      <img :src="'pictures/spark_activity/dream_star_background.svg'" alt="">

      <div class="img_wrap">
        <img :src="props.imgSrc" alt="">
      </div>

    </div>

    <RouterLink :to="props.routingLink" class="link watch_more">
      <button class="watch_more">點我探索
        <img :src="'pictures/spark_activity/arrow.svg'" alt="">
      </button>
    </RouterLink>
    <p class="vote">
      <img class="vote_icon" :src="'pictures/spark_activity/vote_icon.svg'" alt="vote_icon"><span>{{ props.vote }}</span>
    </p>
    <p class="title">{{ props.title }}</p>
    <button class="vote_btn">為我加油</button>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/spark-activity/dream-star-card.scss';
</style>
