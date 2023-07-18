<!-- <script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, watch, computed } from 'vue';

const tableTitle = ref("");

const tableHeader = reactive([
  ["認養地區", "認養人數", "金額"]
  ,
  ["捐款專案", "金額"]]
)


const sponsorPrice = ref(2000);

const tableDataList = reactive([
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

const totalCount = computed(() => tableDataList.reduce((total, tableData) => total + tableData.sponsorCount, 0))

const paymentTitle = ref("");

const currentRoute = useRoute();
console.log(currentRoute.name);

watch(() => {
  if (currentRoute.name === "sponsor-checkout-step-1" || currentRoute.name === "sponsor-checkout-step-2" || currentRoute.name === "sponsor-checkout-step-3") {
    tableTitle.value = "認養清單";



  } else if (currentRoute.name === "donate-checkout-step-1" || currentRoute.name === "donate-checkout-step-2") {
    tableTitle.value = "捐款清單";

  }
}
)



</script> -->

<template>
  <table class="checkout_table">
    <!-- <caption class="caption"><h2>{{ tableTitle }}</h2></caption>
    <tr>
      <th>{{tableHeader[0][0]}}</th>
      <th>{{tableHeader[0][1]}}</th>
      <th>{{tableHeader[0][2]}}</th>

    </tr> -->
  </table>
</template>

<style scoped lang="scss"></style>
