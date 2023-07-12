
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <div class="information">

      <div class="logo">
        <img src="../logo/logo.svg" alt="Vue logo" width="360">
      </div>

      <div class="time">
        <span>服務時間</span>
        <span>08:00 - 17:00</span>
        <span>星期ㄧ至星期六</span>
      </div>

      <div class="location">
        <i class="fa-solid fa-location-dot"></i>320桃園市中壢區復興路46號9樓
        <i class="fa-sharp fa-solid fa-phone"></i>03-4251108
      </div>
    </div>

    <div class="items">
      <div class="about">
        <h5>認識星火</h5>
        <RouterLink to="/" class="link about"><h6>星火緣起</h6></RouterLink>
        <RouterLink to="/" class="link about"><h6>星火願景</h6></RouterLink>
        <RouterLink to="/" class="link about"><h6>服務據點</h6></RouterLink>
        <RouterLink to="/" class="link about"><h6>認養/捐款Q&A</h6></RouterLink>
      </div>

      <div class="service">
        <h5>服務據點</h5>
        <RouterLink to="/" class="link service"><h6>服務內容</h6></RouterLink>
      </div>

      <div class="result">
        <h5>成果佈告欄</h5>
        <RouterLink to="/" class="link result"><h6>故事藝廊</h6></RouterLink>
        <RouterLink to="/" class="link result"><h6>歷年報告</h6></RouterLink>
        <RouterLink to="/" class="link result"><h6>服務里程碑</h6></RouterLink>
      </div>

      <div class="sponsor">
        <h5>認養計畫</h5>
        <RouterLink to="/" class="link sponsor"><h6>認養據點</h6></RouterLink>
        <RouterLink to="/" class="link sponsor"><h6>我要認養</h6></RouterLink>
      </div>

      <div class="donate">
        <h5>捐款專案</h5>
        <RouterLink to="/" class="link donate"><h6>捐款內容</h6></RouterLink>
        <RouterLink to="/" class="link donate"><h6>捐款善心榜</h6></RouterLink>
      </div>

      <div class="contact">
        <h5>聯絡星火</h5>
        <RouterLink to="/" class="link contact"><h6>友會介紹</h6></RouterLink>
        <RouterLink to="/" class="link contact"><h6>總部地點</h6></RouterLink>
      </div>
    </div>
  </footer>
</template>



<style scoped lang="scss">
@import "@/assets/sass/layout/footer";
</style>
