<script setup>
import { reactive } from 'vue';

const slideList = reactive([{
  imgSrc: 'pictures/images/spark-activity/dream-star/slide_pic_1.png',
  title: 'slide_pic_1'
},
{
  imgSrc: 'pictures/images/spark-activity/dream-star/slide_pic_2.png',
  title: 'slide_pic_2'
},
{
  imgSrc: 'pictures/images/spark-activity/dream-star/slide_pic_3.png',
  title: 'slide_pic_3'
},
])

</script>

<template>
  <div class="dream_star_container">
    <div class="dream_star_background">


      <div class="carousel">

        <v-carousel cycle height="100%" hide-delimiter-background show-arrows="true" interval="4000">
          <v-carousel-item v-for=" (slide, i) in slideList" :key="i" :src="slide.imgSrc" :alt="slide.title" width="95%"
            justify-center>
          </v-carousel-item>
        </v-carousel>

        <img :src="'pictures/spark_activity/dream_star/slide_white.png'" class="slide_white">
      </div>

      <div class="main_body">
        <div class="title_wrap">
          <div class="title_text">
            <h1><span>音樂星光</span>樂韻奏鳴的天空旅程</h1>
            <img :src="'pictures/spark_activity/dream_star/title_underline.svg'" alt="">
          </div>
          <div class="vote_wrap">
            <img :src="'pictures/spark_activity/dream_star/vote_star.svg'" alt="">
            <span class="vote_number">255</span>
          </div>
        </div>

        <div class="dream_wrap content">
          <img :src="'pictures/spark_activity/dream_star/clip.svg'" alt="clip" class="clip">
          <div class="dream_dashline">
            <img :src="'pictures/spark_activity/dream_star/shine.svg'" alt="shine" class="shine">
            <div class="subtitle">
              <h2>夢想內容</h2>
              <img :src="'pictures/spark_activity/dream_star/subtitle_bg.svg'" alt="subtitle_bg" class="subtitle_bg">
            </div>
            <p>
              我們將帶領小朋友們展開一場奇幻而美妙的音樂之旅。在那裡，每個孩子都擁有一把屬於自己的音樂魔杖。這場旅程將引導他們探索不同的樂器，從小提琴到鋼琴，從吉他到鼓，讓他們發現自己的音樂天賦和獨特的音樂風格，他們將參與音樂工作坊和課程，與專業音樂家互動學習，掌握各種技巧和表演技巧。這段音樂夢想旅程將成為孩子們未來人生的寶貴資產，為他們建立堅實的基礎。透過音樂，他們將發現自己的潛力和價值，並培養堅持不懈、努力奮鬥的精神，這些寶貴的品質將伴隨他們走向未來的道路，助他們克服挑戰，實現更大的夢想。<br>
              <span class="article_highlight">讓我們一起支持這個夢想計畫，為星火協會的小朋友們打開通往音樂世界的大門，讓他們的夢想在音符的旋律中綻放，成為獨一無二的音樂之星！</span>
            </p>
          </div>
        </div>

        <div class="dream_wrap plan">
          <img :src="'pictures/spark_activity/dream_star/clip.svg'" alt="clip" class="clip">
          <div class="dream_dashline">
            <img :src="'pictures/spark_activity/dream_star/shine.svg'" alt="shine" class="shine">
            <div class="subtitle">
              <h2>夢想規劃</h2>
              <img :src="'pictures/spark_activity/dream_star/subtitle_bg.svg'" alt="subtitle_bg" class="subtitle_bg">
            </div>
            <div class="goal_wrap">
              <div class="goal_term">
                <h5>短期目標</h5>
                <div class="term_pic">
                  <img :src="'pictures/spark_activity/dream_star/short_term.png'" alt="short_term">
                </div>
                <p>培養對音樂的興趣和熱愛，享受音樂的樂趣並表達自己</p>
              </div>
              <div class="goal_term">
                <h5>中期目標</h5>
                <div class="term_pic">
                  <img :src="'pictures/spark_activity/dream_star/middle_term.png'" alt="middle_term">
                </div>
                <p>提供專業音樂指導和訓練，培養團隊合作的意識</p>
              </div>
              <div class="goal_term">
                <h5>長期目標</h5>
                <div class="term_pic">
                  <img :src="'pictures/spark_activity/dream_star/late_term.png'" alt="late_term">
                </div>
                <p>讓孩子們參與音樂比賽和演出，舉辦音樂演奏會和公益音樂活動</p>
              </div>
              <img :src="'pictures/spark_activity/dream_star/term_arrow.svg'" alt="term_arrow" class="term_arrow">
              <img :src="'pictures/spark_activity/dream_star/term_arrow.svg'" alt="term_arrow" class="term_arrow">
              <div class="goal_line"></div>
            </div>
          </div>
        </div>

        <div class="button_wrap">
          <button class="button_start">夢想起點</button>
          <button class="button_support">點我支持夢想</button>
        </div>
      </div>

      <img class="star_sleeping" :src="'pictures/spark_activity/star_sleeping.svg'" alt="">

    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/spark-activity/dream-star";
</style>
