<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, watch, computed } from 'vue';

// import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const checkoutOverviewTitle = ref("");
const sponsorPrice = ref(2000);

const checkoutDataList = reactive([
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

const totalCount = computed(() => checkoutDataList.reduce((total, checkoutData) => total + checkoutData.sponsorCount, 0))

const paymentTitle = ref("");

const currentRoute = useRoute();
console.log(currentRoute.name);

watch(() => {
 if (currentRoute.name === "donate-checkout-step-1" || currentRoute.name === "donate-checkout-step-2") {
    checkoutOverviewTitle.value = "捐款總覽";
    paymentTitle.value = "總計";

  }
}
)

</script>

<template>
  <div class="check_out_card">

    <h2 class="check_out_overview_title">{{ checkoutOverviewTitle }}</h2>


    <div class="checkout_datalist">
      <div v-for="checkoutData in checkoutDataList" :key="checkoutData.sponsorLocation" class="check_out_data">
        <span>{{ checkoutData.sponsorLocation }}地區</span>
        <span>共 {{ checkoutData.sponsorCount }} 位</span>
        <span>NTD {{ (checkoutData.sponsorCount) * sponsorPrice }}</span>
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
@import '@/assets/sass/components/func-items/cards/checkout-card';
</style>
