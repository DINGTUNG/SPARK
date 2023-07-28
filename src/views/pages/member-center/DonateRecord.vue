<script setup>
import { reactive } from 'vue';


const donateData = reactive([
  {
    count: "1",
    project: "扶幼捐款",
    price: "NTD 500",
    date: "2023.05.01",
    status: "本期已繳款",
  },
  {
    count: "2",
    project: "獎助學金",
    price: "NTD 1,000",
    date: "2023.07.02",
    status: "本期已繳款",
  },
  {
    count: "3",
    project: "扶幼捐款",
    price: "NTD 8,880",
    date: "2023.09.23",
    status: "本期已繳款",
  },
  {
    count: "4",
    project: "助養召集令",
    price: "NTD 3,600",
    date: "2023.12.19",
    status: "本期已繳款",
  },
  {
    count: "5",
    project: "助養召集令",
    price: "NTD 3,600",
    date: "2023.12.19",
    status: "本期已繳款",
  },
  {
    count: "6",
    project: "兒童保護",
    price: "NTD 1,000",
    date: "2024.03.15",
    status: "本期已繳款",
  },
  {
    count: "7",
    project: "扶幼捐款",
    price: "NTD 3,600",
    date: "2024.05.07",
    status: "本期已繳款",
  },
  {
    count: "8",
    project: "獎助學金",
    price: "NTD 2,000",
    date: "2023.06.06",
    status: "本期已繳款",
  },
])


</script>

<template>

  <div class="donate_record_container">
    <div class="main_body">

      <Images id="deco" :imgSrc="'pictures/decorations/illustration/smilestar.svg'" alt="微笑星星裝飾" />
      <Images id="deco" :imgSrc="'pictures/decorations/illustration/telescope_2.svg'" alt="望遠鏡裝飾" />

      <div class="table">
        <div class="title">
          <Images id="love_book" :imgSrc="'pictures/decorations/illustration/love_book.svg'" alt="感謝函裝飾" />
          <h1>捐款紀錄</h1>
        </div>
        <div class="text">
          <p>非常感謝您的無私愛心捐款！您的善舉將為我們帶來無比的溫暖與希望，讓我們一同為更美好的明天努力。
            <br>
            在這光輝的路上，我們深切感受到您的陪伴與支持，謝謝您成為這份愛心的重要一環！
          </p>
        </div>

        <div class="date_block">
          <div class="date_picker">
            <span>選擇捐款日期</span>
            <div class="date_choose">
              <div class="date">
                <span>2022/09/20</span>
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              ～
              <div class="date">
                <span>2022/09/20</span>
                <i class="fa-solid fa-calendar-days"></i>
              </div>
            </div>
            <div class="search">
              <button>查詢</button>
            </div>
          </div>
          <h6>親愛的會員您好，本會提供近付款狀態查詢，查詢區間以一年為限。若有任何問題請您來電04-22012345轉881、880由專人為您服務。</h6>
        </div>
        


        <table class="donate_table">
          <thead>
            <tr class="table_title">
              <th class="count">筆數</th>
              <th class="project">捐款專案</th>
              <th class="price">金額</th>
              <th class="date">捐款日期</th>
              <th class="status">繳款情形</th>
            </tr>
          </thead>

          <tbody>
            <tr class="info" v-for="data in  donateData" :key="data.count">
              <td data-title="筆數" class="count">{{ '第' + data.count + '筆' }}</td>
              <td data-title="捐款專案">{{ data.project }}</td>
              <td data-title="金額">{{ data.price }}</td>
              <td data-title="捐款日期">{{ data.date }}</td>
              <td data-title="繳款情形">{{ data.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/member-center/donate-record";
</style>
