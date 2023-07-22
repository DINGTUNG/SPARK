<script setup>
  import { reactive } from "vue";
  
  const story_article = reactive([
    {
      id:1,
      imgUrl:'pictures/images/results/story-gallery/story/story_1.jpg',
      date:'2023.07.20',
      title:'小手揉麵 共享美味',
      section1:'在星火兒童協會的廚房裡，一群充滿活力的小朋友圍坐在長桌旁，熱情地揉著麵團。他們的小手掌沾滿了麵粉，笑聲和歡樂彌漫在空氣中。協會的導師們帶領著他們，一同展開了一場美味的冒險。',
      section2:'小朋友們充滿興奮地將麵團揉搓得越來越柔軟，他們一起分享著創意和技巧，塑造出各種有趣的形狀，如動物、星星和花朵。他們彼此鼓勵，互相幫助，建立起了友誼的紐帶。',
      section3:'經過烘焙，美味的麵食從烤箱中散發出迷人的香氣。小朋友們期待已久地坐在一起，品嚐他們共同製作的成果。眼神中充滿了驚喜和自豪，他們大快朵頤，享受著這份自己親手創造的美味。'
    },
    { id:2,
      imgUrl:'pictures/images/results/story-gallery/story/story_2.jpg',
      date:'2023.07.15',
      title:'我是這樣長大的',
      section1:'小明手握著五彩的蠟筆，專注地在畫紙上揮灑著自己的想像。他畫出了一個夢幻的森林，樹上掛滿了燦爛的花朵，小動物們歡快地奔跑著。他的臉上洋溢著快樂的笑容，畫筆在他的指尖舞動著。',
      section2:'小明展示著他的畫作，眾人驚嘆著他的藝術天賦。他的作品散發著童真和創意，彷彿一個個魔法的世界。朋友們圍繞著他，紛紛稱讚他的畫技和豐富的想像力。小明感受到他們的支持和鼓勵，更加自信地繼續創作著。',
      section3:'畫筆在小明的手中成為一個無限的魔法工具，他通過每一幅畫作表達出自己的情感和世界觀。當他看著自己的作品時，他感到無比的快樂和成就。畫畫成為他忘卻壓力的途徑，也為他的童年增添了無盡的快樂和美好回憶。'
    },
    { id:3,
      imgUrl:'pictures/images/results/story-gallery/story/story_3.jpg',
      date:'2023.06.20',
      title:'禮物中的喜悅',
      section1:'兒童節來臨之際，一群小朋友興高采烈地聚集在一起，期待著令人心動的禮物。他們眼中閃耀著無盡的期待，好奇地猜測著禮物會是什麼。終於，禮物盒被打開，幸福的驚喜彌漫在空氣中。',
      section2:'小明興奮地握著一本彩色的繪本，裡面充滿了美麗的故事和色彩繽紛的插畫。他迫不及待地翻閱著每一頁，想要探索那個神奇的故事世界。小花拿著一個樂器，她輕撥著琴弦，美妙的音符在空中飄揚，帶來了甜蜜的音樂。',
      section3:'還有小杰收到一個拼圖，他專心地將每塊拼圖拼接在一起，最終呈現出一幅驚人的圖案。他為自己的成就感到自豪，而這個拼圖也將成為他無數次快樂的挑戰。'
    },
    {
      id:4,
      imgUrl:'pictures/images/results/story-gallery/story/story_4.jpg',
      date:'2023.06.09',
      title:'萌萌的鐵道世界',
      section1:'萌萌眼中燃燒著興奮的火焰，他手中握著一個精緻的小火車玩具。他將它輕輕放在軌道上，火車蜿蜒前進，發出嗡嗡的聲音。小明的臉上洋溢著快樂的笑容，他與小火車一同探索著無限的遊戲世界。',
      section2:'火車沿著彎曲的軌道穿梭，經過小山丘和橋樑。小明的想像力瞬間被點燃，他模擬火車經歷著驚險刺激的旅程，穿越山谷和越過障礙。他對小火車的每一次控制都充滿著自信和喜悅。',
      section3:'小明邀請朋友們一同加入遊戲，他們圍坐在地上，用手與笑聲模擬著小火車的運行。他們合力建造軌道、設計站台，共同創造屬於他們的迷你鐵路世界。'
    },
    {
      id:5,
      imgUrl:'pictures/images/results/story-gallery/story/story_5.jpg',
      date:'2023.05.18',
      title:'大自然的奇妙旅程',
      section1:'大華手牽著爸爸，踏上大自然的奇妙旅程。他們漫步在綠意盎然的森林中，小明驚嘆著樹木的高聳和鳥兒的歌唱。突然，一陣微風吹來，樹葉輕輕擁抱他的臉龐，讓他感受到大自然的溫柔。',
      section2:'他們來到湖邊，小明蹲下身子，驚喜地發現湖面上漂浮著五彩繽紛的蝴蝶。他們輕輕跳躍，像舞者般在空中翩翩起舞。小明興奮地追逐著蝴蝶，迷失在大自然的魔幻世界。',
      section3:'大自然的奇妙旅程不僅給大華帶來驚喜和刺激，更啟發了他的想像力和探索精神。他學會欣賞自然之美，瞭解到生命的連結和平衡。這段與大自然的親密接觸，讓他成長為一個更關懷和尊重環境的孩子。'
    },
    {
      id:6,
      imgUrl:'pictures/images/results/story-gallery/story/story_6.jpg',
      date:'2023.04.28',
      title:'歡樂的成長旅程',
      section1:'小明和他的朋友們攜手展開了一段歡樂的成長旅程。他們一起克服挑戰、分享快樂。在學校裡，他們一同探索知識的奧秘，互相學習和成長。在運動場上，他們比賽、合作，彼此激勵。這些寶貴的回憶和朋友間的默契讓他們一起成長，共同走過美好的童年。',
      section2:'他們一起度過了無數個快樂的時光，他們彼此扶持著，在困難時互相支持，共同經歷著人生的起伏。這些美好的回憶讓他們的友誼更加堅固，成為彼此的支柱和陪伴。',
      section3:'隨著時間的流逝，小明和朋友們漸漸長大。他們雖然各自走向不同的道路，但那份純真的友誼永遠不會消失。他們在人生的重要時刻互相祝福和支持，共同見證著彼此的成長。'
    }
  ])

  const props = defineProps(["storyId"]);
  const emit = defineEmits();

  const closeStory = () => {
    emit("closeStory");
  };
</script>

<template>
  <transition name="pop-up">
    <div class="wrap" v-if="storyId != null">
      <div class="story_article">
        <button type="button" @click="closeStory">
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <div class="pic">
            <img :src="story_article[storyId].imgUrl" alt="故事照片">
        </div>
        <div class="text">
            <div class="date">{{ story_article[storyId].date }}</div>
            <h3>{{ story_article[storyId].title }}</h3>
            <p>{{ story_article[storyId].section1 }}</p>
            <p>{{ story_article[storyId].section2 }}</p>
            <p>{{ story_article[storyId].section3 }}</p>
        </div>
        <div class="star">
          <img :src="'pictures/characters/star/star_raise_hands.svg'" class="star" alt="星星裝飾">
        </div>
        <div class="font">
          <img :src="'pictures/decorations/handwriting/orange_ignite_the_night.svg'" class="font"  alt="ignite_the_night">
        </div>
    
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
  div.wrap{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    backdrop-filter: blur(3px);
    top: 0;
    left: 0;
      div.story_article{
        @include custom-responsive('xs'){
          position: fixed;
          top: 50%;
          left: 50%;
          border-radius:$br_MB;
          z-index: 20;
          background: none;
          transform: translate(-50%, -50%);
          background-color: $functionalLightGrey1;
          opacity: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90vw;
          padding: 6% 0 3%;
        }
        @include custom-responsive("lg") {
          flex-direction: row;
          width: 70vw;
          justify-content: space-evenly;
          top: 55%;
        }
        @include custom-responsive("xl"){
          width: 60vw;
          border-radius:$br_PC;
          padding: 1%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: row;
        }
        @include custom-responsive("xx-l") {
          width: 60vw;
          top: 50%;
          padding: 3%;

        }
        button{
          background: none;
          border: none;
          position: absolute;
          @include custom-responsive('xs') {
            top: 2%;
            right: 5%;
          }
          @include custom-responsive("xl xx-l") {
            top: 6%;
            right: 5%;
          }
          i{
            font-size:40px;
            color: $primaryBrandBlue;
          }
        }
        div.text{
          @include custom-responsive('xs') {
             width: 90%;
          }
          @include custom-responsive('lg') {
            width: 45%;
          }
          @include custom-responsive("xl xx-l") {
            width: 37%;
          }
          
          div.date{
            color: $primaryAccentGold;
            @include custom-responsive('xs') {
              @include h5_MB;
            }
            @include custom-responsive("xl xx-l") {
              @include h5_PC;
            }
            
            
          }
          h3{
            position: relative;
            padding-bottom: 10%;
            &::after{
              content: '';
              width: 20%;
              height: 4%;
              background-color: $decorativeOrange;
              position: absolute;
              bottom: 15%;
              left: 0;
            }
          }

          p{
            margin: 2%;
            @include custom-responsive('xs') {
              &:nth-child(3){
                display: none;
              }
            }
            @include custom-responsive("xx-l"){
              &:nth-child(3){
                display: block;
              }
            }
          }
        }
        div.pic{
          @include custom-responsive('xs') {
              width: 60%;
              padding-bottom: 3%;
          }
          @include custom-responsive('lg') {
            width: 40%;
          }
          @include custom-responsive("xx-l") {
            width: 50%;
            height: fit-content;
            padding-bottom: 10%;
          }

          img{
            width: 100%;

          }
        }
        div.star,
        div.font{
          position: absolute;
        }
        div.star{
          @include custom-responsive('xs') {
            display: none;
          }
          @include custom-responsive("xl xx-l") {
            display: block;
            bottom: 10%;
            left: 10%;
          }
        }
        div.font{
          @include custom-responsive('xs') {
            display: none;
          }
          @include custom-responsive("xl xx-l") {
            width: 20%;
            bottom: 10%;
            left: 28%;
            display: block;
          }
          img{
            width: 100%;
          }
        }
        }
    }

.pop-up-enter-from{
  scale: 0;
}
.pop-up-leave-to{
  opacity: .2;
}
.pop-up-enter-active{
  scale: 1.2;
  transition: .5s ease;
}
.pop-up-leave-active{
  scale: 0;
  transition: .6s;
}
.pop-up-enter-to{
  scale: 1;
}
.pop-up-leave-from{
  scale: 1;
}

</style>
