<script setup>
import DreamStarCard from '@/components/func-items/cards/spark-activity/DreamStarCard.vue';
import { useDreamStarStore, DreamStarList } from '@/stores/dream-star.js';
const dreamStarStore = useDreamStarStore()

</script>

<template>
  <div>

    <div class="dream_star_wrap">
      <DreamStarCard v-for="dreamStar in DreamStarList.TOPICS" :key="dreamStar.id" :imgSrc="dreamStar.imgSrc"
        :routingLink="dreamStar.routingLink" :vote="dreamStarStore.getCurrentCountInVoteRecord(dreamStar.id)"
        :title="dreamStar.title" :subTitle="dreamStar.subTitle" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/sections/spark-activity/dream-star.scss';
</style>

