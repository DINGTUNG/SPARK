<script setup>
import { ref, onMounted } from 'vue';

const data = {
  personal: [550, 520, 490, 460, 430, 400, 370, 340, 310, 280],
  company: [550, 520, 490, 460, 430, 400, 370, 340, 310, 280],
};

const colors = {
  personal: ['#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55'],
  company: ['#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55', '#082B55'],
};

const texts = {
  personal: ['彭凱煒', '彭凱煒', '彭凱煒', '彭凱煒', '彭凱煒', '彭凱煒', '彭凱煒', '彭凱煒', '彭凱煒', '彭凱煒'],
  company: ['緯育', '緯育', '緯育', '緯育', '緯育', '緯育', '緯育', '緯育', '緯育', '緯育'],
};

const images = {
  personal: [ // 添加其他「個人」類別的圖片路徑
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',
    '/public/pictures/images/donate/donate-list/profile_picture.jpg',  
  ],
  company: [ // 添加其他「公司」類別的圖片路徑
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
    '/public/pictures/images/donate/donate-list/company_picture.jpg',
  ],
};

const barContainer = ref(null);
const currentCategory = ref('personal'); // 預設為「個人」類別

const renderBarChart = (category) => {
  barContainer.value.innerHTML = ''; // 清除目前的長條圖

  // 計算選取類別中數據陣列的最大值
  const maxDataValue = Math.max(...data[category]);

  // 渲染選取類別的長條圖
  for (let i = 0; i < data[category].length; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';

    // 計算當前數據值相對於最大值的百分比
    const percentage = (data[category][i] / maxDataValue) * 100;
    bar.style.height = percentage + '%';
    bar.style.backgroundColor = colors[category][i];

    const text = document.createElement('div');
    text.className = 'bar_text';
    text.textContent = texts[category][i];
    bar.appendChild(text);

    const image = document.createElement('img');
    image.className = 'bar_image';
    image.src = images[category][i];
    bar.appendChild(image);

    barContainer.value.appendChild(bar);
  }
};

onMounted(() => {
  // 初始渲染長條圖
  renderBarChart(currentCategory.value);
});

const switchToPersonal = () => {
  currentCategory.value = 'personal';
  renderBarChart(currentCategory.value);
};

const switchToCompany = () => {
  currentCategory.value = 'company';
  renderBarChart(currentCategory.value);
};

</script>



<!-- s -->
<template> 

<div class="donate_list_banner">
    <img :src="'pictures/images/donate/donate-list/banner.jpg'" alt="捐款善心榜封面">
</div>



<div class="donate_list_container">
    
    <div class="main_body">

        <div class="title_block">
            <h1>捐款善心榜</h1>
            <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
        </div>

        <div class="switch_button">
            <a href="#personal" 
               @click.prevent="switchToPersonal"
               v-bind:class="{ 'small-blue-btn': currentCategory === 'personal', 'small-white-btn': currentCategory !== 'personal' }">個人
            </a>
            <a href="#company" 
               @click.prevent="switchToCompany"
               v-bind:class="{ 'small-blue-btn': currentCategory === 'company', 'small-white-btn': currentCategory !== 'company' }">公司
            </a>
        </div>


        <div class="bar_container" ref="barContainer"></div>

    </div>

</div>

</template>

<style lang="scss">
@import "@/assets/sass/pages/donate/donate-list";
</style>