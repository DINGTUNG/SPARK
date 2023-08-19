<script setup>
import { reactive,onMounted } from 'vue';
import { YEAR_REPORT } from "@/constant/resultReport.constant";
import axios from 'axios'
// let years = reactive(YEAR_REPORT);

const reportsYearList = reactive([])
async function reportsYearConnection() {
  try {
    // const response = await axios.post('http://localhost/SPARK_BACK/php/results/report/report_year.php')
    const response = await axios.post('https://tibamef2e.com/chd102/g3/back-end/php/results/report/report_year.php')
    console.log(response)

    if (response.data.length > 0) {
      response.data.forEach(element => {
        reportsYearList.push(element)
      });
    }
  } catch (error) {
    console.error(error);
  }
}

const reportsFinancialList = reactive([])
async function reportsFinancialConnection() {
  try {
    // const response = await axios.post('http://localhost/SPARK_BACK/php/results/report/report_financial.php')
    const response = await axios.post('https://tibamef2e.com/chd102/g3/back-end/php/results/report/report_financial.php')
    
    console.log(response)

    if (response.data.length > 0) {
      response.data.forEach(element => {
        reportsFinancialList.push(element)
      });
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  reportsYearConnection()
  reportsFinancialConnection()
  
})
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
          <img class="water_can" :src="'pictures/decorations/illustration/watering _can.svg'" alt="water">
          <img class="sprout" :src="'pictures/decorations/illustration/sprout.svg'" alt="sprout">
          <h2>年度報告</h2>
          <div class="year_inner">
            <div class="year_card" v-for="item in reportsYearList" :key="item.report_no">
              <div class="year_img">
                <img :src="'pictures/images/results/report/result.png'">
              </div>
              <div class="year_text">
                <p>{{ item.report_year }}年</p>
                <p>{{ item.report_title }}</p>
                <a :href="`https://tibamef2e.com/chd102/g3/back-end/PDF/${item.report_file_path}`" download><button>下載檔案</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="financial_report">
          <img class="flower" :src="'pictures/decorations/illustration/flower.svg'" alt="flower">
          <h2>財務報告</h2>
          <div class="financial_inner">
            <div class="financial_card" v-for="item in reportsFinancialList" :key="item.report_no">
              <div class="financial_card_inner">
                <div class="financial_img">
                  <img :src="'pictures/decorations/illustration/book.svg'" alt="financial">
                </div>
                <div class="financial_text">
                  <p>{{ item.report_year }}年</p>
                  <p>{{ item.report_title }}</p>
                </div>
              </div>
              <a :href="`https://tibamef2e.com/chd102/g3/back-end/PDF/${item.report_file_path}`" download><button>下載檔案</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/pages/work-result/result-report.scss';
</style>
