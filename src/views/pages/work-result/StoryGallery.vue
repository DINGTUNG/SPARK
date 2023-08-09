<script setup>
import { onMounted, reactive, ref, computed } from 'vue'
import  Story  from '@/views/sections/work-result/Story.vue'
import { COVER_STORY, WARM_STORY, PHOTO_ALBUM} from '@/constant/storyGallery.constant.js'
import axios from 'axios'

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


//點擊切換指引
let timer = null;
const container = ref(null)
const iconLeft = ref("0px");
const iconTop = ref("0px");
const iconDisplay = ref('none')

const handleMouseMove = (e) => {
  clearTimeout(timer);
  if (container.value.contains(e.target)){
    iconLeft.value = e.pageX + 20 + "px";
    iconTop.value = e.pageY + 15 + "px";
    iconDisplay.value = "block"
  } else {
    iconDisplay.value = "none"
  }
  timer = setTimeout(() => {
    iconDisplay.value = "none";
  }, 2000);
}

//封面故事切換
const picUnderIndex = ref(1)
const picUnder = () => {
  if (displayStory.value === 0) {
    picUnderIndex.value = 1
  } else {
    picUnderIndex.value = 0
  }
}


//獲取溫馨紀事資料
const warmStory = reactive([])
async function getData () {
  try{
    const res = await axios.get('http://localhost/SPARK_BACK/php/results/story/front_read_story.php')
    warmStory.value = res.data.stories
  }
  catch(err){
    console.log(err)
  }
}

onMounted(() => {
  getData()
})

  //分頁
  const itemsPerPage = 6;
    const displayStoryList = computed(() => {
      if (warmStory.value) {
        const startIdx = (page.value - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;
        return reactive(warmStory.value.slice(startIdx, endIdx));
      } else {
        return reactive([]);
      }
    });

    const pageCount = () => {
      return (displayStoryList.length) / itemsPerPage + 1;
    };

const storyId = ref(null)

const propsId = (no) => {
  storyId.value = no
}
const closeStory = () => {
  storyId.value = null;
};

const page = ref(1);


let photoDisplay = ref(0)
const photoSelected = (index) => {
  photoDisplay.value = index
}
const photoAlbum = reactive(PHOTO_ALBUM)

const container1 = ref(null)
const container2 = ref(null) 

const scrollTo = (area) => {
   if( area == container1.value) {
    container1.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
   } else if ( area == container2.value ) {
    container2.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
}
</script>

<template>
    <div class="mouse" :style="{ left: iconLeft, top: iconTop , display:iconDisplay }">
      <i class="fa-solid fa-computer-mouse" id="icon"></i>
      <span>點擊切換</span>    
    </div>

  <div class="banner">
    <img class="PC" :src="'pictures/images/results/story-gallery/banner.jpg'" alt="banner" />
    <img class="MB" :src="'pictures/images/results/story-gallery/banner_MB.png'" alt="banner" />
  </div>
  <div class="container" @mousemove="handleMouseMove">
    <div class="main_body">
      <div class="switch-button">
        <a @click="scrollTo(container1)">溫馨事紀</a>
        <a @click="scrollTo(container2)">星火寫真</a>
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
          <div class="story" ref="container" :key="displayStory" @click="switchClick">
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
      <section class="warm-story" ref="container1">
        <div class="deco">
          <img :src="'pictures/decorations/illustration/shooting_stars_2.svg'" alt="流星" />
        </div>
        <div class="deco">
          <img :src="'pictures/decorations/illustration/three_asterisk.svg'" alt="流星" />
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
          <div class="card" v-for="(item, id) in displayStoryList" :key="id">
            <div class="pic">
              <img :src="`http://localhost/SPARK_BACK/images/story/${item.story_image}`" alt="故事照片" />
              <img :src="'pictures/characters/boy/boy_lighting_up_white.svg'" alt="card_hover_pic" class="card_hover_pic">
            </div>
            <div class="text">
              <div class="date">{{ item.story_date }}</div>
              <h5>{{ item.story_title }}</h5>
              <p>{{ item.story_brief }}</p>
              <button type="button" @click="propsId(item.story_no)">閱讀全文</button>
            </div>
          </div>
        </div>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="3"
            rounded="circle"
            @click="scrollTo(container1)"
          ></v-pagination>
        </div>
      </section>

        <Story :storyId="storyId" @closeStory="closeStory" />

      
      <section class="photo-album" ref="container2">
        <div class="deco">
          <img :src="'pictures/characters/girl/girl_hugging_star.svg'" alt="" />
        </div>
        <div class="deco">
          <img :src="'pictures/decorations/illustration/smilestar_blue.svg'" alt="" />
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

.mouse{
  position: absolute;
  span{
    color: $primaryBrandBlue;
    margin-left: 1vw;
    font-weight: bold;
  }
  #icon{
    color: $primaryBrandBlue;
    font-size: 20px;
  }
  z-index: 22;
}

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
