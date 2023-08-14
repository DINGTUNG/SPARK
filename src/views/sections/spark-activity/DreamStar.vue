<script setup>
import DreamStarCard from '@/components/func-items/cards/spark-activity/DreamStarCard.vue';
import { onMounted } from 'vue'
import axios from 'axios';
import { useDreamStarStore } from '@/stores/dream-star.js';
const dreamStarStore = useDreamStarStore()

async function getDreamStar() {
  try {
    const response = await axios.post('http://localhost/SPARK_BACK/php/activity/dream-star/get_dream_star_front.php')

    response.data.forEach(element => {
      const dreamStar = {
        dreamStar_id: element.dreamStar_id,
        dreamStar_name: element.dream_star_name,
        dreamStar_image: 'http://localhost:5173/chd102/g3/back-end/images/dream-star/' + element.dream_star_image,
        dreamStar_votes: element.dream_star_votes,
        dream_star_url: '/dreamStar/' 
        // dream_star_url: '/dreamStar/' + element.dream_star_id
      }
      dreamStarStore.dreamStarPool.push(dreamStar)
      console.log(dreamStar.dreamStar_image);
    });

  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getDreamStar()
})

</script>

<template>
  <div>

    <div class="dream_star_wrap">
      <DreamStarCard v-for="dreamStar in dreamStarStore.dreamStarPool" :key="dreamStar.id"
        :dream_star_name="dreamStar.dreamStar_name" :dream_star_image='dreamStar.dreamStar_image'
        :dream_star_url="dreamStar.dream_star_url" :dream_star_votes="dreamStar.dreamStar_votes" @watchMore="() => {
          dreamStarStore.selectedDreamStar = dreamStar.id
        }" />

      <!-- <DreamStarCard v-for="dreamStar in DreamStarList.TOPICS" :key="dreamStar.id" :imgSrc="dreamStar.imgSrc"
        :routingLink="dreamStar.routingLink" :vote="dreamStarStore.getCurrentCountInVoteRecord(dreamStar.id)"
        :title="dreamStar.title" :subTitle="dreamStar.subTitle" :id="dreamStar.id" @watchMore="() => {
          dreamStarStore.selectedDreamStar = dreamStar.id
        }" /> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/sections/spark-activity/dream-star.scss';
</style>

