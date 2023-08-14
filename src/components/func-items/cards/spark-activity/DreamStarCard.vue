<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { useDreamStarStore } from '@/stores/dream-star.js';

const emits = defineEmits(['watchMore'])
const dreamStarStore = useDreamStarStore()

const props = defineProps({
  dream_star_id: String,
  dream_star_name: String,
  dream_star_image: String,
  dream_star_votes: String,
  dream_star_url: String
})


</script>
<template>
  <div class="dream_star_card_container">

    <div class="dream_star_card_wrap">
      <img class="dream_star_background" :src="'pictures/spark_activity/dream_star_background.svg'" alt="">

      <div class="img_wrap">
        <img :src="props.dream_star_image" alt="">
      </div>

    </div>

    <RouterLink :to="props.dream_star_url" class="link watch_more">
      <button class="watch_more" @click="emits('watchMore')">點我探索
        <img :src="'pictures/spark_activity/arrow.svg'" alt="">
      </button>
    </RouterLink>
    <p class="vote">
      <img class="vote_icon" :src="'pictures/spark_activity/vote_icon.svg'"
        alt="vote_icon"><span>{{ props.dream_star_votes }}</span>
    </p>

    <div class="title_wrap">
      <p class="title" v-html="props.dream_star_name"></p>
      <!-- <p class="sub_title">{{ props.subTitle }}</p> -->
    </div>
    <button @click="dreamStarStore.voteThisProject(dreamStarNo)" class="vote_btn">為我加油</button>
    <!-- <button @click="dreamStarStore.voteThisProject(props.id, 1)" class="vote_btn">為我加油</button> -->

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/spark-activity/dream-star-card.scss';
</style>
