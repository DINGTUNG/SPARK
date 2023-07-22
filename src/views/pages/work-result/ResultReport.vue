<script setup>
import { reactive } from 'vue';
import { YEAR_REPORT } from "@/constant/resultReport.constant";

let years = reactive(YEAR_REPORT);

</script>

<template>
  <div class="title_img">
    <img :src="'pictures/images/sponsor/banner.png'" alt="banner">
  </div>
  <div class="container">
    <div class="main_body">
      <div class="title_block">
        <h1>歷年報告</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <div class="report_inner">
        <div class="year_report">
          <img class="water_can" :src="'pictures/decorations/illustration/watering _can.svg'" alt="">
          <img class="sprout" :src="'pictures/decorations/illustration/sprout.svg'" alt="">
          <h2>年度報告</h2>
          <div class="year_inner">
            <div class="year_card" v-for="item in years" :key="item.id">
              <div class="year_img">
                <img :src="'pictures/images/results/report/result.png'">
              </div>
              <div class="year_text">
                <p>{{ item.year }}年</p>
                <p>星火執行業務報告</p>
                <button>下載檔案</button>
              </div>
            </div>
          </div>
        </div>
        <div class="financial_report">
          <img class="flower" :src="'pictures/decorations/illustration/flower.svg'" alt="">
          <h2>財務報告</h2>
          <div class="financial_inner">
            <div class="financial_card" v-for="item in years" :key="item.id">
              <div class="financial_card_inner">
                <div class="financial_img">
                  <img :src="'pictures/decorations/illustration/book.svg'" alt="">
                </div>
                <div class="financial_text">
                  <p>{{ item.year }}年</p>
                  <p>星火執行財務報告</p>
                </div>
              </div>
              <button>下載檔案</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/pages/work-result/result-report.scss'
</style>
