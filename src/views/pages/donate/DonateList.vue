<script setup>
import { ref, onMounted } from 'vue';

const data = [550, 520, 490, 460, 430, 400, 370, 340, 310, 280];
const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff', '#8f0082', '#4b00ff', '#4b0082'];
const texts = ['王銘聰', '沈芸', '李昀羲', '董柏廷', '陳奕潔', '陳希', '賴士原', '彭凱煒', '許妤甄', '阿本'];
const images = [
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg', 
  'haha.jpg'
];

const barContainer = ref(null);

onMounted(() => {
  for (let i = 0; i < data.length; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = data[i] + 'px';
    bar.style.backgroundColor = colors[i];

    const text = document.createElement('div');
    text.className = 'bar_text';
    text.textContent = texts[i];
    bar.appendChild(text);

    const image = document.createElement('img');
    image.className = 'bar_image';
    image.src = images[i];
    bar.appendChild(image);

    barContainer.value.appendChild(bar);
  }
});
</script>



<!--  -->
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
        
        <div class="bar_container" ref="barContainer"></div>

    </div>

</div>

</template>

<style lang="scss">
@import "@/assets/sass/pages/donate/donate-list";
.bar_container {
            width: 62.5%;
            height: 90vh;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: auto;
        }

        .bar {
            width: 5%;
            position: relative; 
        }

        .bar_text {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 20px;
            white-space: nowrap;
        }

        .bar_image {
            position: absolute;
            bottom: 105%;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
            margin-bottom: 40px;
        }
</style>