<script setup>
import { reactive, ref } from 'vue'
import  Story  from '@/views/sections/work-result/Story.vue'
import { COVER_STORY, WARM_STORY } from '@/constant/storyGallery.constant.js'

const coverStory = reactive(COVER_STORY)
let displayStory = ref(0)
const switchStory = () => {
  if (displayStory.value === 0) {
    displayStory.value = 1
  } else {
    displayStory.value = 0
  }
}
const switchClick = () => {
  switchStory()
  picUnder()
}

const picUnderIndex = ref(1)
const picUnder = () => {
  if (displayStory.value === 0) {
    picUnderIndex.value = 1
  } else {
    picUnderIndex.value = 0
  }
}

const warmStory = reactive(WARM_STORY)
const storyId = ref(null)
const propsId = (id) => {
  storyId.value = id - 1
}
const closeStory = () => {
  storyId.value = null;
};

let photoDisplay = ref(0)
const photoSelected = (index) => {
  photoDisplay.value = index
}
const photoAlbum = reactive([
  {
    id: 1,
    imgUrl: 'pictures/images/results/story-gallery/gallery/gallery_1.jpg',
    branchName: '台北星火協會',
    title: '幸福的擁抱',
    description:
      '星火協會的愛心溫暖著孩子的心靈。在那一刻，他感受到無限的關懷和支持，成為幸福的孩子，這份溫暖的擁抱將永遠留在他的回憶中，為他的成長之路點亮星火。'
  },
  {
    id: 2,
    imgUrl: 'pictures/images/results/story-gallery/gallery/gallery_2.jpg',
    branchName: '台中星火協會',
    title: '歡樂的搖搖馬時光',
    description:
      '在星火的遊樂活動中，小朋友們盡情享受歡樂時光。笑聲響起，他們奔馳在搖搖馬上，感受快樂的風。臉上洋溢純真笑容，忘卻困難和壓力。'
  },
  {
    id: 3,
    imgUrl: 'pictures/images/results/story-gallery/gallery/gallery_3.jpg',
    branchName: '台南星火協會',
    title: '創意堆疊的奇幻世界',
    description:
      '在星火的積木遊戲中，小朋友用色彩繽紛的積木建造城堡、太空船和奇妙生物。這些積木是孩子們展現才華和創造力的舞台，讓他們享受無盡的樂趣和成就感。'
  },
  {
    id: 4,
    imgUrl: 'pictures/images/results/story-gallery/gallery/gallery_4.jpg',
    branchName: '台東星火協會',
    title: '童年快樂時光',
    description:
      '小女孩充滿歡笑，展現快樂的童年。她與朋友們跳躍、奔跑，純真的笑容洋溢著臉上。他們一起探索自然，小女孩的快樂源於無拘束的自由，將童年時光點亮成美好的回憶。'
  }
])
</script>

<template>
  <div class="banner">
    <img class="PC" :src="'pictures/images/results/story-gallery/banner.jpg'" alt="banner" />
    <img class="MB" :src="'pictures/images/results/story-gallery/banner_MB.png'" alt="banner" />
  </div>
  <div class="container">
    <div class="main_body">
      <div class="switch-button">
        <a href="#warm-story">溫馨事紀</a>
        <a href="#photo-album">星火寫真</a>
      </div>
      <section class="cover-story">
        <div class="deco">
          <img :src="'pictures/decorations/illustration/golden_stars_set.svg'" alt="星星裝飾" />
        </div>
        <div class="title">
          <h1>本月封面故事</h1>
          <div class="decorative_line">
            <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線" />
          </div>
        </div>

        <transition name="fade" mode="out-in">
          <div class="story" :key="displayStory" @click="switchClick">
            <div class="pic">
              <img :src="coverStory[displayStory].imgUrl" alt="封面故事照片" />
              <div class="pic_under">
                <img :src="coverStory[picUnderIndex].imgUrl" alt="另一則封面故事" />
              </div>
            </div>
            <div class="text">
              <h4>{{ coverStory[displayStory].title }}</h4>
              <p>{{ coverStory[displayStory].text1 }}</p>
              <p>{{ coverStory[displayStory].text2 }}</p>
            </div>
          </div>
        </transition>
      </section>
      <section class="warm-story" id="warm-story">
        <div class="deco">
          <img :src="'pictures/decorations/illustration/shooting_stars_2.svg'" alt="流星" />
        </div>
        <div class="deco">
          <img :src="'pictures/decorations/illustration/golden_star_3.svg'" alt="星星裝飾" />
        </div>
        <div class="title">
          <div class="name">
            <h2>溫馨事紀</h2>
            <img
              class="title_decorate"
              :src="'pictures/images/results/story-gallery/story/title_decorate.png'"
              alt="標題裝飾"
            />
          </div>

          <div class="decorative_line">
            <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線" />
          </div>
        </div>

        <div class="story-list">
          <div class="card" v-for="(item, id) in warmStory" :key="id">
            <div class="pic">
              <img :src="item.imgUrl" alt="故事照片" />
              <img :src="'pictures/characters/boy/boy_lighting_up_white.svg'" alt="card_hover_pic" class="card_hover_pic">
            </div>
            <div class="text">
              <div class="date">{{ item.date }}</div>
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
              <button type="button" @click="propsId(item.id)">閱讀全文</button>
            </div>
          </div>
        </div>
        <div class="change-page">
          <i class="fa-solid fa-chevron-left"></i>
          <button class="blue">1</button>
          <button>2</button>
          <button>3</button>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </section>
        <Story :storyId="storyId" @closeStory="closeStory" />

      
      <section class="photo-album" id="photo-album">
        <div class="deco">
          <img :src="'pictures/characters/girl/girl_bubbling.svg'" alt="" />
        </div>
        <div class="title">
          <div class="name">
            <h2>星火寫真</h2>
            <img
              class="title_decorate"
              :src="'pictures/images/results/story-gallery/story/title_decorate.png'"
              alt="標題裝飾"
            />
          </div>
          <div class="decorative_line">
            <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線" />
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div class="photoDisplay" :key="photoDisplay">
            <div class="pic">
              <img :src="photoAlbum[photoDisplay].imgUrl" alt="星火寫真照片" />
            </div>
            <div class="text">
              <div class="branch-name">
                {{ photoAlbum[photoDisplay].branchName }}
              </div>
              <h4>{{ photoAlbum[photoDisplay].title }}</h4>
              <p>{{ photoAlbum[photoDisplay].description }}</p>
            </div>
          </div>
        </transition>

        <div class="photoSelect">
          <div
            class="pic"
            v-for="(item, index) in photoAlbum"
            :key="index"
            @click="photoSelected(index)"
            :class="{ gray: index !== photoDisplay }"
          >
            <img :src="item.imgUrl" alt="星火寫真照片" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/work-result/story-gallery';

.fade-enter-from{
  opacity:0
}
.fade-enter-to{
  opacity:1
}
.fade-enter-active{
  transition: opacity .5s ease-in;
}

.fade-leave-from{
  opacity:1
}
.fade-leave-to{
  opacity:0
}
.fade-leave-active{
  transition: opacity .3s ease-in;
}

</style>
