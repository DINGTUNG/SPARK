
<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <footer>
    <div class="footer_content">
      <div class="information">

        <div class="logo">
          <img src="@assets/logo/logo.svg" alt="Vue logo" width="360">
        </div>

        <div class="business_hours">
          <span class="service_hours">服務時間</span>
          <span class="time">08:00 - 17:00</span>
          <span class="date">星期一至星期六</span>
        </div>

        <div class="location">
          <span class="headquarters">總部</span>
          <i class="fa-solid fa-location-dot"></i><span>320桃園市中壢區復興路46號9樓</span>
          <br>
          <i class="fa-sharp fa-solid fa-phone"></i><span>03-4251108</span>
        </div>
      </div>

      <div class="items">
        <div class="list">
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

        <div class="newsletter">
          <label for=""><h6>星火電子報</h6></label>
          <input type="email" name="" id="" placeholder="E-mail" style="border:1px solid rgba(255,255,255,0.45)">
        </div>
      </div>
    </div>

    <div class="footer_copyright">
      <div class="copyright">
        <span>Copyright© 星火兒童認養協會</span>
      </div>
    </div>
  </footer>
</template>



<style scoped lang="scss">
@import "@/assets/sass/layout/footer";
</style>
