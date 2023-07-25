<script setup>
import DreamStar from '@/views/sections/spark-activity/DreamStar.vue';
import MessageBoard from '@/views/sections/spark-activity/MessageBoard.vue';
import ActivityDonate from '@/views/sections/spark-activity/ActivityDonate.vue';

import { reactive } from 'vue';


const btnList = reactive([{
  imgSrc: 'pictures/spark_activity/planet.svg',
  title: "探索夢想之星"
},
{
  imgSrc: 'pictures/spark_activity/spark.svg',
  title: "夢想祝福小站"
},
{
  imgSrc: 'pictures/spark_activity/dollar.svg',
  title: "支持夢想星球"
}])


const scrollToElement = () => {
  const dreamStar = document.getElementById("dream_star");
  const messageBoard = document.getElementById("message_board");
  const activityDonate = document.getElementById("activityDonate");

  if (dreamStar) {
    dreamStar.scrollIntoView({ behavior: "smooth" });
  }

  else if (messageBoard) {
    messageBoard.scrollIntoView({ behavior: "smooth" });
  }

  else if (activityDonate) {
    activityDonate.scrollIntoView({ behavior: "smooth" });
  }
}

</script>

<template>
  <div class="spark_activity_container">
    <div class="spark_activity_background">
      <div class="main_body">

        <div class="img_wrap">
          <div class="cloud_wrap">
          <img class="cloud" :src="'pictures/spark_activity/header_cloud.svg'" alt="">
        </div>
          <img class="boy_holding_ballon" :src="'pictures/spark_activity/boy_holding_ballon.svg'" alt="">
        </div>

        <div class="btn_wrap">
          <button v-for="btn in btnList" :key="btn.title" @click="scrollToElement"><img :src="btn.imgSrc"
              alt=""><span>{{ btn.title }}</span></button>

        </div>

        <div class="text">
          <div class="title_wrap">
            <h2 class="title">喚醒孩子們內心的夢想</h2>
            <img :src="'pictures/spark_activity/deco_line.svg'" alt="">
          </div>
          <p class="content">
            &emsp;&emsp;在本屆的圓夢計畫中，「星火」兒童認養協會將邀請孩子們提出他們的夢想計畫。透過這個計畫，我們希望這些平時少有機會表達意見的孩子們能在夢想的世界中，探索自我，勇敢地為自己發聲。我們將傾聽他們的想法，支持他們追尋夢想的過程，讓他們感受到自己的價值和重要性。這是一個讓孩子們對未來充滿希望的機會，「星火」兒童認養協會將竭盡所能，陪伴他們實現屬於他們自己的夢想。<br><br>
            &emsp;&emsp;我們相信，當一個孩子的夢想實現時，不僅對他們個人意義重大，也對整個社會產生積極而持久的影響。藉由這個計畫，我們共同創造一個更美好、更關懷的社會，讓每個孩子都能夠實現他們內心最璀璨的夢想！在浩瀚宇宙中，浮現幾顆神秘的星球，它們彷彿蘊藏著無盡可能，迫不及待地想要透過望遠鏡洞察星球的面貌！每顆星球代表著一組孩子們的夢想計畫，在<span>7月20日至9月20日</span>期間，按下「為我加油」按鈕，投給你最愛的組別，並為該組別爭取「夢想成真」獎金！讓我們一同以熱情激勵，為孩子們的夢想點燃璀璨星火。
          </p>
        </div>


        <div id="dream_star">
          <img class="title" :src="'pictures/spark_activity/dream_star_title.svg'" alt="">
          <DreamStar />
        </div>
      </div>
      
      <div id="message_board">
        <img class="title" :src="'pictures/spark_activity/message_board_title.svg'" alt="">
        <MessageBoard />
      </div>

      <div id="activityDonate">
        <img class="title" :src="'pictures/spark_activity/donate_title.svg'" alt="">
        <ActivityDonate />
      </div>

      <img class="star_sleeping" :src="'public/pictures/spark_activity/star_sleeping.svg'" alt="">

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/spark-activity/spark-activity';
</style>
