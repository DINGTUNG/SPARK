<script setup>
import DreamStarCard from '@/components/func-items/cards/spark-activity/DreamStarCard.vue';
import { DreamStarPlanList } from '@/stores/dream-star.js';

// const dreamStarStore = useDreamStarStore();

</script>

<template>
  <div>

    <div class="dream_star_wrap">
      <DreamStarCard v-for="dreamStarPlan in DreamStarPlanList.TOPICS" :key="dreamStarPlan.id"
        :imgSrc="dreamStarPlan.imgSrc" :routingLink="dreamStarPlan.routingLink" :vote="dreamStarPlan.vote"
        :title="dreamStarPlan.title" :subTitle="dreamStarPlan.subTitle" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/sections/spark-activity/dream-star.scss';
</style>

