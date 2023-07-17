<!-- <script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, watch, computed } from 'vue';

const tableTitle = ref("");
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
 <table>
  <!-- <caption>{{tableTitle.value}}</caption> -->
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>
</template>

<style scoped lang="scss"></style>
