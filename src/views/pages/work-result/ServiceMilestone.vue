<script setup> 
import { ref } from 'vue'

// 一顆星星代表的數量
const peopleCount = ref(100);

//贊助人數
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

//改變banner
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

//輪播圖
const firstCard = {
  image: 'pictures/images/results/service-milestone/card_first.png',
  alt: '暖心聖誕',
  date: '2022.12',
  title: '聖心聖誕',
  description: '邀請士元火鍋店為孩子們準備豐富的火鍋大餐',
};

const secondCard = {
  image: 'pictures/images/results/service-milestone/card_second.png',
  alt: '環境小尖兵',
  date: '2023.02',
  title: '環境小尖兵',
  description: '帶領孩子們前往海邊淨灘，為環保盡一份心力',
};

const thirdCard = {
  image: 'pictures/images/results/service-milestone/card_third.png',
  alt: '愛心稻田',
  date: '2023.06',
  title: '愛心稻田',
  description: '疫情解封後，首次到田裡體驗務農的辛勞，學習感恩',
};

const leftArrowImage = 'pictures/images/results/service-milestone/arrow_left.png';
const rightArrowImage = 'pictures/images/results/service-milestone/arrow_right.png';
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
            <span class="number">{{peopleCount}}<span>人次</span></span>     
        </div>
    </div>

    <div class="service_milestone_container">

        <div class="main_body">
<!-- 贊助人數 -->
            <div class="number_of_people" @mouseleave="resetBanner">
                <div v-for="block in numberBlocks" :key="block.id" class="number_block" @mouseover="updateBanner(block.key)" @mouseleave="resetBanner">
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
<!-- 輪播圖1111 -->
            <div class="carousel">
                <div class="card card_first">
                    <img :src="firstCard.image" :alt="firstCard.alt">
                    <span>{{ firstCard.date }}</span>
                    <h4>{{ firstCard.title }}</h4>
                    <h5>{{ firstCard.description }}</h5>
                </div>

                <div class="arrow arrow_left">
                    <img :src="leftArrowImage" alt="左鍵頭">
                </div>

                <div class="card card_second">
                    <img :src="secondCard.image" :alt="secondCard.alt">
                    <span>{{ secondCard.date }}</span>
                    <h4>{{ secondCard.title }}</h4>
                    <h5>{{ secondCard.description }}</h5>
                </div>

                <div class="arrow arrow_right">
                    <img :src="rightArrowImage" alt="右鍵頭">
                </div>

                <div class="card card_third">
                    <img :src="thirdCard.image" :alt="thirdCard.alt">
                    <span>{{ thirdCard.date }}</span>
                    <h4>{{ thirdCard.title }}</h4>
                    <h5>{{ thirdCard.description }}</h5>
                </div>
            </div>
            
            
        </div>

    </div>

</template>

<style lang="scss">
@import "@/assets/sass/pages/work-result/service-milestone";
</style>