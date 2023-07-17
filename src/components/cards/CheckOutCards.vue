<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, watch, computed } from 'vue';

const checkOutOverviewTitle = ref("");
const sponsorPrice = ref(2000);

const checkOutDataList = reactive([
  {
    sponsorLocation: "台北",
    sponsorCount: 3,
  },
  {
    sponsorLocation: "台中",
    sponsorCount: 1,
  },
  {
    sponsorLocation: "台南",
    sponsorCount: 4,
  },
  {
    sponsorLocation: "台東",
    sponsorCount: 2,
  },
])

const totalCount = computed(() => checkOutDataList.reduce((total, checkOutData) => total + checkOutData.sponsorCount, 0))

const paymentTitle = ref("");

const currentRoute = useRoute();
console.log(currentRoute.name);

watch(() => {
  if (currentRoute.name === "sponsor-checkout-step-1" || currentRoute.name === "sponsor-checkout-step-2" || currentRoute.name === "sponsor-checkout-step-3") {
    checkOutOverviewTitle.value = "認養總覽";
    paymentTitle.value = "認養費(月)";

  } else if (currentRoute.name === "donate-checkout-step-1" || currentRoute.name === "donate-checkout-step-2") {
    checkOutOverviewTitle.value = "捐款總覽";
    paymentTitle.value = "總計";

  }
}
)


</script>

<template>
  <div class="check_out_card">

    <h2 class="check_out_overview_title">{{ checkOutOverviewTitle }}</h2>


    <div class="checkout_datalist">
      <div v-for="checkOutData in checkOutDataList" :key="checkOutData.sponsorLocation" class="check_out_data">
        <span>{{ checkOutData.sponsorLocation }}地區</span>
        <span>共 {{ checkOutData.sponsorCount }} 位</span>
        <span>NTD {{ (checkOutData.sponsorCount) * sponsorPrice }}</span>
      </div>
    </div>

    <div class="payment">
      <div class="payment_info">
        <span class="payment_title">{{ paymentTitle }}</span>
        <span class="total_price">NTD {{ totalCount * sponsorPrice }}</span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/checkout-cards';
</style>
