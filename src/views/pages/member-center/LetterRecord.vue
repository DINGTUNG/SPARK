<script setup>
import { reactive } from 'vue';


const letterData = reactive([
  {
    childId:"00001",
    date:"2023.07.01",
    location:"台北星火中心",
    jpg:"來自00001小朋友的來信",
  },
  {
    childId:"00008",
    date:"2023.07.01",
    location:"台北星火中心",
    jpg:"來自00001小朋友的來信",
  },
])


</script>

<template>
  <table class="letter_table">

    <caption>感謝函專區</caption>

    <tr>
      <th colspan="2" class="child_id">兒童編號</th>
      <th class="date">收件日期</th>
      <th class="location">所屬據點</th>
      <th class="jpg">感謝函圖檔</th>
    </tr>

    <tr v-for="data in letterData" :key="data.childId">
      <td>{{ data.childId }}</td>
      <td>{{ data.date }}</td>
      <td>{{ data.location }}</td>
      <td>{{ data.jpg }}</td>
    </tr>
  </table>
</template>