<script setup>
import { reactive } from 'vue';
let years = reactive([
  {
    id: '0',
    year: '2022'
  },
  {
    id: '1',
    year: '2021'
  },
  {
    id: '2',
    year: '2020'
  },
  {
    id: '3',
    year: '2019'
  },
  {
    id: '4',
    year: '2018'
  },
  {
    id: '5',
    year: '2017'
  },
  {
    id: '6',
    year: '2016'
  },
  {
    id: '7',
    year: '2015'
  },

])

</script>

<template>
  <div class="title_img">
    <img :src="'pictures/images/sponsor/banner.png'" alt="">
  </div>
  <div class="container">
    <div class="main_body">
      <div class="title_block">
        <h1>歷年報告</h1>
        <div class="top_line">
          <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="">
        </div>
      </div>
      <div class="report_inner">
        <div class="year_report">
          <img class="water_can" :src="'pictures/decorations/illustration/watering _can.svg'" alt="">
          <img class="sprout" :src="'pictures/decorations/illustration/sprout.svg'" alt="">
          <h2>年度報告</h2>
          <div class="year_inner">
            <div class="year_card" v-for="(item, index) in years" :key="item.id">
              <div class="year_img">
                <img src="https://picsum.photos/150/200/?random=10">
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
          <img class="flower" src="pictures/decorations/illustration/flower.svg" alt="">
          <h2>財務報告</h2>
          <div class="financial_inner">
            <div class="financial_card" v-for="(item, index) in years" :key="item.id">
              <div class="financial_card_inner">
                <div class="financial_img">
                  <img :src="'public/pictures/decorations/illustration/book.svg'" alt="">
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
@import'@/assets/sass/pages/work-result/ResultReport.scss'
</style>
