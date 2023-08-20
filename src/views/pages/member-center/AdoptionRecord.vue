<script setup>
import { ref , reactive , computed  } from 'vue';

const startDate = ref(null);
const endDate = ref(null);

const filteredData = ref([]);

const showNoDataMessage = computed(() => {
  return !startDate.value || !endDate.value;
});

const endDateMax = ref(null);
const updateEndDateMax = () => {
  if (startDate.value) {
    const oneYearLater = new Date(startDate.value);
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    endDateMax.value = oneYearLater.toISOString().split('T')[0];
  }
};



const adoptionData = reactive([
  {
    count: "1",
    location: "台北星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2022-08-01",
    status: "已繳款",
  },
  {
    count: "2",
    location: "台北星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2022-08-07",
    status: "已繳款",
  },
  {
    count: "3",
    location: "台北星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2022-09-01",
    status: "已繳款",
  },
  {
    count: "4",
    location: "台南星火中心",
    price: "NTD 2,000",
    payment: "年繳",
    date: "2023-01-15",
    status: "已繳款",
  },
  {
    count: "5",
    location: "台南星火中心",
    price: "NTD 2,000",
    payment: "年繳",
    date: "2023-02-18",
    status: "已繳款",
  },
  {
    count: "6",
    location: "台南星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2023-07-22",
    status: "已繳款",
  },
  {
    count: "7",
    location: "台中星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2023-07-28",
    status: "已繳款",
  },
  {
    count: "8",
    location: "台中星火中心",
    price: "NTD 2,000",
    payment: "半年繳",
    date: "2023-07-29",
    status: "已繳款",
  },
  {
    count: "9",
    location: "台中星火中心",
    price: "NTD 2,000",
    payment: "月繳",
    date: "2023-08-05",
    status: "已繳款",
  },
  {
    count: "10",
    location: "台北星火中心",
    price: "NTD 2,000",
    payment: "半年繳",
    date: "2023-08-13",
    status: "未繳款",
  },
])


const filterData = () => {
  if ((!startDate.value && !endDate.value) || (!startDate.value && endDate.value) || (startDate.value && !endDate.value)) {
    filteredData.value = [];
    return;
  }

  const startDateObj = new Date(startDate.value);
  const endDateObj = new Date(endDate.value);

  filteredData.value = adoptionData.filter(data => {
    const dataDate = new Date(data.date);
    return dataDate >= startDateObj && dataDate <= endDateObj;
  });

  if (endDateObj > oneYearLaterDate) {
    filteredData.value = [];
    return;
  }
};

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
            <span>選擇日期區間</span>
            <div class="date_choose">
              <input class="date" v-model="startDate" type="date" id="start" @change="updateEndDateMax">
              <span class="wave">～</span>
              <input class="date" v-model="endDate" type="date" id="end" :max="endDateMax" @change="filterData">
            </div>
            <div class="search">
              <button @click="filterData">查詢</button>
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
            <tr class="info" v-for="data in filteredData" :key="data.count">
              <td data-title="筆數" class="count">{{ '第' + data.count + '筆' }}</td>
              <td data-title="據點">{{ data.location }}</td>
              <td data-title="金額">{{ data.price }}</td>
              <td data-title="定期繳款方式">{{ data.payment }}</td>
              <td data-title="認養日期">{{ data.date }}</td>
              <td data-title="繳款情形">{{ data.status }}</td>
            </tr>
          </tbody>
        </table>

        <div v-if="showNoDataMessage" class="no_data_message">
              請選擇日期區間以查詢資料
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/member-center/adoption-record";
</style>