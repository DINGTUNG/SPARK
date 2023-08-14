<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { useDreamStarStore } from '@/stores/dream-star.js';

const emits = defineEmits(['watchMore'])
const dreamStarStore = useDreamStarStore()

const props = defineProps({
  dream_star_no: Number,
  dream_star_id: String,
  dream_star_name: String,
  dream_star_image: String,
  dream_star_votes: Number,
  dream_star_url: String
})

async function voteThisProject(dream_star_no) {
  try {
    if (dream_star_no == null) {
      throw new Error("dream_star_no not found!")
    }
    await dreamStarStore.voteThisProjectBackend(props.dream_star_no)
    dreamStarStore.voteThisProjectFromDreamStarPool(props.dream_star_no)
    window.alert(`投票成功!`);
  } catch (error) {
    console.error(error);
    window.alert(`http status : ${error.response.data} 編輯失敗!請聯絡管理員!`);
  }
}

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
    <button @click="voteThisProject(props.dream_star_no)" class="vote_btn">為我加油</button>
    <!-- <button @click="dreamStarStore.voteThisProject(props.id, 1)" class="vote_btn">為我加油</button> -->

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/spark-activity/dream-star-card.scss';
</style>
