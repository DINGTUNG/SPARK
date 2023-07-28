<script setup>
import { reactive } from 'vue';


const adoptionData = reactive([
  {
    count: "1",
    location: "台北星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2023.05.01",
    status: "已繳款",
  },
  {
    count: "2",
    location: "台北星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2023.09.01",
    status: "已繳款",
  },
  {
    count: "3",
    location: "台北星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2023.09.01",
    status: "已繳款",
  },
  {
    count: "4",
    location: "台南星火中心",
    price: "NTD 2,000",
    payment: "年繳",
    date: "2024.01.15",
    status: "未繳款",
  },
  {
    count: "5",
    location: "台南星火中心",
    price: "NTD 2,000",
    payment: "年繳",
    date: "2024.02.18",
    status: "已繳款",
  },
  {
    count: "6",
    location: "台南星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2025.04.22",
    status: "已繳款",
  },
  {
    count: "7",
    location: "台中星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2026.09.25",
    status: "已繳款",
  },
  {
    count: "8",
    location: "台中星火中心",
    price: "NTD 2,000",
    payment: "半年繳",
    date: "2027.05.13",
    status: "未繳款",
  },
])


</script>

<template>

  <div class="adoption_record_container">
    <div class="main_body">

      <Images id="deco" :imgSrc="'pictures/decorations/illustration/smilestar.svg'" alt="微笑星星裝飾" />
      <Images id="deco" :imgSrc="'pictures/decorations/illustration/telescope_2.svg'" alt="望遠鏡裝飾" />

      <div class="table">
        <div class="title">
          <Images id="love_book" :imgSrc="'pictures/decorations/illustration/love_book.svg'" alt="感謝函裝飾" />
          <h1>認養紀錄</h1>
        </div>
        <div class="text">
          <p>非常感謝您的無私愛心捐款！您的善舉將為我們帶來無比的溫暖與希望，讓我們一同為更美好的明天努力。
            <br>
            在這光輝的路上，我們深切感受到您的陪伴與支持，謝謝您成為這份愛心的重要一環！
          </p>
        </div>

        <div class="date_block">
          <div class="date_picker">
            <span>選擇認養日期</span>
            <div class="date_choose">
              <div class="date">
                <span>2022/07/23</span>
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              <span class="wave">～</span>
              <div class="date">
                <span>2022/07/23</span>
                <i class="fa-solid fa-calendar-days"></i>
              </div>
            </div>
            <div class="search">
              <button>查詢</button>
            </div>
          </div>
          <h6>親愛的會員您好，本會提供近付款狀態查詢，查詢區間以一年為限。若有任何問題請您來電04-22012345轉881、880由專人為您服務。</h6>
        </div>
        


        <table class="adoption_table">
          <thead>
            <tr class="table_title">
              <th class="count">筆數</th>
              <th class="location">據點</th>
              <th class="price">金額</th>
              <th class="payment">定期繳款方式</th>
              <th class="date">認養日期</th>
              <th class="status">繳款情形</th>
            </tr>
          </thead>

          <tbody>
            <tr class="info" v-for="data in adoptionData" :key="data.count">
              <td data-title="筆數" class="count">{{ '第' + data.count + '筆' }}</td>
              <td data-title="據點">{{ data.location }}</td>
              <td data-title="金額">{{ data.price }}</td>
              <td data-title="定期繳款方式">{{ data.payment }}</td>
              <td data-title="認養日期">{{ data.date }}</td>
              <td data-title="繳款情形">{{ data.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/member-center/adoption-record";
</style>