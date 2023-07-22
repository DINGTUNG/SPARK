<script setup>
import { reactive } from 'vue'


const article = reactive(
  [
    {
      index: 1,
      img: "pictures/images/home/news/single-news-page/singlenewthree.png",
      h5: '親愛的星火兒童認養協會的家人們：',
      article: '我們非常興奮地宣布，星火兒童認養協會迎來了30週年的重要里程碑!在這個特殊的時刻，我們想要向所有支持者、志願者、捐助者和合作夥伴表達最深深的感謝之情。',
      article_two: '自1985年成立以來，星火一直致力於關愛孤兒和弱勢兒童，為他們提供溫暖、關懷和希望。這30年來，我們見證了無數個家庭的連結、孩子的笑容和夢想的實現。',
      position: 'article_block_text'

    },
    {
      index: 2,
      img: "pictures/images/home/news/single-news-page/singlenewfour.png",
      article: '在這個特殊的周年慶祝活動中，我們將舉辦一系列精彩的活動，包括兒童藝術展、親子遊樂日和慈善晚宴等，旨在為孩子們帶來更多的歡樂和關懷。',
      article_two: '這也是一個回顧過去、展望未來的時刻，我們將一同展望更美好的明天，為每一個孩子的成長和幸福努力。我們與孩子們一起成長，見證他們戰勝困難，他們的成功和幸福是我們最大的成就和動力。',
      position: 'imgRight'
    },
    {
      index: 3,
      img: "pictures/images/home/news/single-news-page/singlenewfive.png",
      article: '在星火的30年歷程中，我們努力實現著「每個孩子都應該有一個家」的願景。我們努力著，為孤兒和弱勢兒童找到合適的家庭，給予他們溫暖和關愛。這一路上，我們見證了無數個家庭的連結，看到了孩子們的微笑，並見證了他們的成長和成就。',
      article_two: '我們與認養家庭和孩子們建立起了深厚的情感聯繫，共同走過了許多困難和挑戰，但正是這些努力和奉獻，讓孩子們能夠擁有更美好的未來。',
      position: 'article_block_text'
    },
    {
      index: 4,
      img: "pictures/images/home/news/single-news-page/singlenewsix.png",
      article: '在這個值得慶祝的時刻，我們要感謝每一位為星火付出的人，無論是認養家庭、捐助者、合作夥伴還是社區成員，都是我們成功的關鍵，謝謝你們的慷慨、無私和信任。',
      article_two: '最後，我們要向所有參與和支持星火的孩子們致以最深的祝福，讓我們共同慶祝星火兒童認養協會30周年的成就，感謝每一位為我們付出的人，並展望更美好的未來！',
      position: 'imgRight'
    },
  ]
);
const news = reactive(
  [
    {
      img: "pictures/images/home/news/single-news-page/singlenewone.png",
      index: 1,
      title: '星火30，感謝有您',
      article: '星火兒童認養協會已經在台默默耕耘30年~一路走來感謝大家對星火的肯定與支持，30年前從零到有，星火感謝各界人士的鼎力相助，願我們能一同往前，迎接更美好的明天。',
      time: '2023.07.23',
      href: '#'
    },
    {
      img: "pictures/images/home/news/single-news-page/singlenewtwo.png",
      index: 2,
      title: '東部星火服務據點設立',
      article: '偏鄉服務不落後!!東部星火據點全新設立，為照顧偏遠地區弱勢兒童，星火協會召集各方善心人士相助，一同於東部創辦中心，提供服務。',
      time: '2023.07.15',
      href: '#'
    },
    {
      img: "pictures/images/home/news/single-news-page/singlenewseven.png",
      index: 3,
      title: '暑假兒童營養午餐提供',
      article: '偏鄉服務不落後!!東部星火據點全新設立，為照顧偏遠地區弱勢兒童，星火協會召集各方善心人士相助，希望各方善心人士能一起參與這項活動，為偏鄉兒童提供豐富美味的午餐',
      time: '2023.06.30',
      href: '#'
    }
  ]
);
</script>
<template>
    <div class="title_img">
      <img :src="'pictures/images/home/news/single-news-page/banner.png'" alt="">
    </div>
    <div class="container">
      <div class="main_body">
        <div class="title_block">
        <h1>消息內容</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <div class="main_article">
        <div class="article_title">
          <h2>星火30，感謝有您</h2>
          <span>2023,07,20</span>
        </div>
        <div class="article">
          <div class="article_block" v-for="item in article" :key="item.index">
            <div class="article_block_img">
              <img :src="item.img">
            </div>
            <div :class="item.position">
              <h5>{{ item.h5 }}</h5>
              <p>{{ item.article }}</p>
              <p>{{ item.article_two }}</p>
            </div>
          </div>
        </div>
        <div class="more_news">
          <div class="title_group">
            <h2>相關消息</h2>
            <div class="line"></div>
          </div>
          <div>
            <div class="card_group">
              <div class="news_card" v-for="item in news" :key="item.index">
                <a :href="item.href">
                  <div class="card_img">
                    <img :src="item.img">
                    <img :src="'pictures/characters/boy/boy_lighting_up_white.svg'" alt="card_hover_pic" class="card_hover_pic">
                  </div>
                  <div class="card_word">
                    <h5>{{ item.time }}</h5>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.article }}</p>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/home/news/single-news";
</style>
