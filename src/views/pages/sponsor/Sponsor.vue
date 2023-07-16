<script setup>
import { reactive , } from 'vue';

const area = reactive([
  {
    index: 1,
    area: '台北星火',
    count: 0,
  },
  {
    index: 2,
    area: '台中星火',
    count: 0,
  },
  {
    index: 3,
    area: '台南星火',
    count: 0,
  },
  {
    index: 4,
    area: '台東星火',
    count: 0,
  },
]);

const minus = (index) => {
  if (area[index].count === 0) {
    area[index].count = 0;
  } else {
    area[index].count--;
  }
};

const plus = (index) => {
  area[index].count++;
};

</script>


<template>
  <div class="title_img">
    <img :src="'pictures/images/sponsor/banner.png'" alt="">
  </div>
  <div class="container">
    <div class="main_body">
      <div class="title_block">
        <h1>我要認養</h1>
        <div class="top_line"></div>
      </div>
      <div class="sponsor_block">
        <div class="sponsor_img">
          <img :src="'pictures/images/sponsor/introduction.jpg'" alt="">
        </div>
        <div class="sponsor_block">
          <div class="sponsor_img">
            <img :src="'assets/images/sponsor/introduction.jpg'" alt="">
          </div>
          <div class="sponsor_text">
            <h4>認養兒童方案</h4>
            <p>
              家扶自1950年便開始了在台灣的服務，「認養制度」協助貧困或家庭破碎的兒童、青少年獲得穩定的經濟補助，並由專業的社會工作人員提供團體活動、親職教育、課業、升學就業輔導及社會資源轉介等各項服務，協助改善兒童的家庭環境，進而達到自助自立。
              每童每月1,000元的認養費，其中85%直接撥給兒童補助其生活、教育、營養或醫療等費用，另外15%是各項專業輔導服務及資訊查詢、聯繫說明、安排認養、資料處理與行政作業管理等費用。
            </p>
            <h4>每月 <span class="price">$ 2,000 </span>認養費</h4>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="sponsor_area">
        <h3>認養地區</h3>
        <div class="sponsor_area_inner">
          <div class="area_card" v-for="(item, index) in area" :key="index">
            <div class="card_title">
              <h5>{{ item.area }}</h5>
            </div>
            <div class="card_count">
              <span @click="minus(index)">-</span>
              {{ item.count }}
              <span @click="plus(index)">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button class="back">回上頁</button>
        <button class="pay_list"  @click="openSidebar = true">加入認養清單</button>
        <div class="icon_img">
          <img :src="'assets/characters/star/star_sleeping.svg'" alt="">
        </div>
      </div>
    </div>
    <SponsorPage ></SponsorPage>
  </div>
  
</template>

<style scoped lang="scss">
@import'@/assets/sass/pages/sponsor/sponsor';
</style>