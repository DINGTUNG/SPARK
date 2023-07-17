<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, watch } from 'vue';

const checkOutOverviewTitle = ref("");
const checkOutData = reactive({

  sponsorLocation: "台北",
  sponsorCount: 1,
  sponsorPrice: 2000,

})

const paymentTitle = ref("");

const currentRoute = useRoute();

watch(() => currentRoute.name, (newRouteName) => {
  if (newRouteName === "sponsor-checkout-step-1" || newRouteName === "sponsor-checkout-step-2" || newRouteName === "sponsor-checkout-step-3") {
    checkOutOverviewTitle.value = "認養總覽";
    paymentTitle.value = "認養費(月)";

  } else if (newRouteName === "donate-checkout-step-1" || newRouteName === "donate-checkout-step-2") {
    checkOutOverviewTitle.value = "捐款總覽";
    paymentTitle.value = "總計";

  }
})



</script>

<template>
  <div class="check_out_card">

    <h2>{{ checkOutOverviewTitle }}</h2>

    <div class="check_out_data">
      <span>{{ checkOutData.sponsorLocation }}地區</span>
      <span>共{{ checkOutData.sponsorCount }}位</span>
      <span>NTD{{ checkOutData.sponsorPrice }}</span>
    </div>

    <h4>{{ paymentTitle }}</h4>
    <h3>NTD 6000</h3>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/cards/checkout-cards';

div.check_out_card {
  width: 500px;
  height: 400px;
  @include boxShadow_PC;
  border-radius: $br_PC;

  div.check_out_data {
    @include flex_hm;
    gap: 20px;


    span {
      @include h5_PC
    }

  }




}
</style>
