<script setup>
//【引入】
import { ref, onMounted, onBeforeUnmount, onUnmounted, computed, watchEffect, reactive } from 'vue';
import axios from 'axios';

//【 一顆星星代表的數量】
const peopleCount = ref(100);

//【贊助人數】
const numberBlocks = [
  {
    id: 1,
    key: 'education',
    imageSrc: 'pictures/images/results/service-milestone/star_education.png',
    altText: '教育補助',
    title: '教育補助人數',
    number: 955
  },
  {
    id: 2,
    key: 'nutrition',
    imageSrc: 'pictures/images/results/service-milestone/star_nutrition.png',
    altText: '營養補助',
    title: '營養補助人數',
    number: 1680
  },
  {
    id: 3,
    key: 'foster',
    imageSrc: 'pictures/images/results/service-milestone/star_foster.png',
    altText: '寄養安置',
    title: '寄養安置人數',
    number: 422
  },
  {
    id: 4,
    key: 'childProtection',
    imageSrc: 'pictures/images/results/service-milestone/star_child.png',
    altText: '兒童保護',
    title: '兒童保護安置人數',
    number: 203
  }
];

//【改變banner】
const baseBannerPath = 'pictures/images/results/service-milestone/';

const banners = {
  default: `${baseBannerPath}banner.jpg`,
  education: `${baseBannerPath}banner_education.jpg`,
  nutrition: `${baseBannerPath}banner_nutrition.jpg`,
  foster: `${baseBannerPath}banner_foster.jpg`,
  childProtection: `${baseBannerPath}banner_child.jpg`
};

const initialBanner = 'default';
const currentBanner = ref(banners[initialBanner]);

const updateBanner = (type) => {
  currentBanner.value = banners[type];
};

const resetBanner = () => {
  currentBanner.value = banners[initialBanner];
};


//【媒體裝置1200px以下，mouseover & mouseleave 會失效，必須要用click】

const isLargeScreen = ref(window.innerWidth > 1200);

// onMounted(() => {
//   window.addEventListener('resize', checkScreenSize);
//   checkScreenSize();
// });

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth > 1200;
}


const getEventHandlers = (blockKey) => {
  if (isLargeScreen.value) {
    return {
      mouseover: () => updateBanner(blockKey),
      mouseleave: resetBanner,
    };
  } else {
    return {
      click: () => updateBanner(blockKey),
    };
  }
};

//【輪播圖數據】
// const carouselData = [
//   {
//     image: 'pictures/images/results/service-milestone/card_first.png',
//     alt: '暖心聖誕',
//     date: '2022.12',
//     title: '暖心聖誕',
//     description: '邀請士元火鍋店為孩子們準備豐富的火鍋大餐',
//     starImage: 'pictures/images/results/service-milestone/star.png',
//     meteorImage: 'pictures/images/results/service-milestone/meteor.png',

//   },
//   {
//     image: 'pictures/images/results/service-milestone/card_second.png',
//     alt: '環境小尖兵',
//     date: '2023.02',
//     title: '環境小尖兵',
//     description: '帶領孩子們前往海邊淨灘，為環保盡一份心力',
//     starImage: 'pictures/images/results/service-milestone/star.png',
//     meteorImage: 'pictures/images/results/service-milestone/meteor.png',
//   },
//   {
//     image: 'pictures/images/results/service-milestone/card_third.png',
//     alt: '愛心稻田',
//     date: '2023.06',
//     title: '愛心稻田',
//     description: '疫情解封後，首次到田裡體驗務農的辛勞，學習感恩',
//     starImage: 'pictures/images/results/service-milestone/star.png',
//     meteorImage: 'pictures/images/results/service-milestone/meteor.png',
//   },
// ];

let intervalId
onMounted(() => {
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
  milestoneConnection()
  // 每三秒自動轉到下一頁
  intervalId = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  // 組件被卸載時，清除定時器
  clearInterval(intervalId)
})

//【串接資料庫】你好
const MilestoneList = reactive([]);

let currentSlide = ref(0)
async function milestoneConnection() {
  try {

    const response = await axios.post('https://tibamef2e.com/chd102/g3/back-end/php/results/milestone/get_milestone.php')

    if (response.data.length > 0) {
      response.data.forEach(element => {
        const milestone = {
          milestone_id: element.milestone_id,
          milestone_title: element.milestone_title,
          milestone_content: element.milestone_content,
          milestone_date: element.milestone_date,
          milestone_image: element.milestone_image
        }
        MilestoneList.push(milestone)
      });
    }

  } catch (error) {
    console.error(error);
  }
}
const visibleSlides = computed(() => {
  let slides = []
  if (MilestoneList.length != 0) {
    for (let i = 0; i < 3; i++) {
      slides.push(MilestoneList[(currentSlide.value + i) % MilestoneList.length])
    }
  }
  return slides
});

const leftArrowImage = 'pictures/images/results/service-milestone/arrow_left.png';
const rightArrowImage = 'pictures/images/results/service-milestone/arrow_right.png';

//【輪播圖動畫】
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % MilestoneList.length  //carouselData更改為milestoneList
    ;
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value + MilestoneList.length - 1) % MilestoneList.length //carouselData更改為milestoneList
}

</script>


<template>
  <!-- banner -->
  <div class="service_milestone_banner">
    <img :src="currentBanner" alt="服務里程碑封面">
  </div>
  <!-- 一顆發光星星代表 -->
  <div class="service_milestone_star_info">
    <div class="picture">
      <img :src="'pictures/images/results/service-milestone/star_info.png'" alt="星星代表資訊">
    </div>
    <div class="info">
      <span>一顆發光星星代表</span>
      <br>
      <span class="number">{{ peopleCount }}<span>人次</span></span>
    </div>
  </div>
  <!--  -->
  <div class="service_milestone_container">
    <div class="main_body">
      <!-- 贊助人數 -->
      <div class="number_of_people" @mouseleave="resetBanner">
        <div v-for="block in numberBlocks" :key="block.id" class="number_block" v-on="getEventHandlers(block.key)">
          <img :src="block.imageSrc" :alt="block.altText">
          <h5>{{ block.title }}</h5>
          <br>
          <span class="number">{{ block.number }}<span>人次</span></span>
        </div>
      </div>
      <!-- 裝飾線 -->
      <div class="title_block">
        <h1>服務里程碑</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <!-- 輪播圖 -->
      <div class="carousel">
        <!-- spark小插圖 -->
        <img :src="'pictures/images/results/service-milestone/spark.png'" alt="Spark Image" class="spark_image">

        <div v-for="(milestone, index) in visibleSlides" :key="index" :class="`card card_${index + 1} size_${index + 1}`"
          :ref="milestone.milestone_id" :id="milestone.milestone_id">
          <img :src="`https://tibamef2e.com/chd102/g3/back-end/images/milestone/${milestone.milestone_image}`"
            :alt="milestone.milestone_title">
          <span>{{ milestone.milestone_date }}</span>
          <h4>{{ milestone.milestone_title }}</h4>
          <h5>{{ milestone.milestone_content }}</h5>
          <!-- 卡片中的小插圖 -->
          <img :src="'pictures/images/results/service-milestone/star.png'" :alt="`Star Image ${index + 1}`" class="star_image">
          <img :src="'pictures/images/results/service-milestone/meteor.png'" :alt="`Meteor Image ${index + 1}`" class="meteor_image">
        </div>

        <div class="arrow arrow_left" @click="previousSlide">
          <img :src="leftArrowImage" alt="左箭頭">
        </div>

        <div class="arrow arrow_right" @click="nextSlide">
          <img :src="rightArrowImage" alt="右箭頭">
        </div>
      </div>


    </div>

  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/work-result/service-milestone";
</style>