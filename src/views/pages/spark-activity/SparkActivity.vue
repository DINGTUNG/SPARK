<script setup>
import DreamStar from '@/views/sections/spark-activity/DreamStar.vue';
import MessageBoard from '@/views/sections/spark-activity/MessageBoard.vue';
import ActivityDonate from '@/views/sections/spark-activity/ActivityDonate.vue';
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue';

const sparkActivityPool = reactive([])
async function getSparkActivity() {
  try {
    const response = await axios.post('http://localhost/SPARK_BACK/php/activity/spark-activity/get_spark_activity_front.php')

    response.data.forEach(element => {
      const activity = {
        spark_activity_name: element.spark_activity_name,
        spark_activity_description: element.spark_activity_description,
        spark_activity_start_date: element.spark_activity_start_date,
        spark_activity_end_date: element.spark_activity_end_date,
      }
      sparkActivityPool.push(activity)
      console.log(activity);
    });

  } catch (error) {
    console.error(error);
  }
}



onMounted(() => {
  getSparkActivity()
})


const btnList = reactive([{
  ref: "begin",
  imgSrc: 'pictures/spark_activity/rocket.svg',
  title: "　夢想啟程"
},
{
  ref: "dreamStar",
  imgSrc: 'pictures/spark_activity/planet.svg',
  title: "探索夢想之星"
},
{
  ref: "messageBoard",
  imgSrc: 'pictures/spark_activity/spark.svg',
  title: "夢想祝福小站"
},
{
  ref: "activityDonate",
  imgSrc: 'pictures/spark_activity/dollar.svg',
  title: "支持夢想星球"
}])


const begin = ref(null)
const dreamStar = ref(null)
const messageBoard = ref(null)
const activityDonate = ref(null)

const scrollToElement = (refName) => {
  if (refName == btnList[1].ref) {
    dreamStar.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (refName == btnList[2].ref) {
    messageBoard.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (refName == btnList[3].ref) {
    activityDonate.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (refName == btnList[0].ref) {
    begin.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

</script>

<template>
  <div class="spark_activity_container">
    <div class="spark_activity_background">
      <div class="main_body">

        <div class="img_wrap">
          <div class="cloud_wrap">
            <img class="cloud" :src="'pictures/spark_activity/header_cloud.png'" alt="">
          </div>
          <img class="boy_holding_ballon" :src="'pictures/spark_activity/boy_holding_ballon.svg'" alt="">
        </div>

        <div class="btn_wrap">
          <button v-for="btn in btnList" :key="btn.title" @click="scrollToElement(btn.ref)" :ref="btn.ref">
            <div class="img_wrap"> <img :src="btn.imgSrc" alt=""></div>

            <span>{{ btn.title }}</span>
          </button>

        </div>

        <div class="text" ref="begin" id="begin" v-for="activity in sparkActivityPool" :key="activity.no">
          <div class="title_wrap">
            <h2 class="title">{{ activity.spark_activity_name }}</h2>
            <img :src="'pictures/spark_activity/deco_line.svg'" alt="">
            <p class="date">活動日期 : {{ activity.spark_activity_start_date }} 至 {{ activity.spark_activity_end_date }}</p>
          </div>
          <p class="content" v-html="activity.spark_activity_description">
          </p>
        </div>


        <div ref="dreamStar" id="dream_star">
          <img class="title" :src="'pictures/spark_activity/dream_star_title.svg'" alt="">
          <DreamStar />
        </div>
      </div>

      <div ref="messageBoard" id="message_board">
        <img class="title" :src="'pictures/spark_activity/message_board_title.svg'" alt="">
        <MessageBoard />
      </div>

      <div ref="activityDonate" id="activity_donate">
        <img class="title" :src="'pictures/spark_activity/donate_title.svg'" alt="">
        <ActivityDonate />
      </div>

      <img class="star_sleeping" :src="'pictures/spark_activity/star_sleeping.svg'" alt="">

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/spark-activity/spark-activity';
</style>
