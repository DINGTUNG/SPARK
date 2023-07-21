<template>

<div class="about_container">
  <div class="main_body">
    <el-table :data="tableData" :table-layout="tableLayout" :cell-class-name="letterRow" border >
      <el-table-column prop="no" label="兒童編號" width="220" />
      <el-table-column prop="date" label="日期" width="220" />
      <el-table-column prop="area" label="所屬據點" width="220" />
      <el-table-column prop="pic" label="圖檔" />
    </el-table>
  </div>
</div>

</template>

<script lang="js" setup>
  import { ref } from 'vue'

  const tableLayout = ref('fixed')

  const tableData = [
    {
      no: '00001',
      date: '2023.06.10',
      area: '台北星火中心',
      pic: '00001.jpg'
    },
    {
      no: '00001',
      date: '2023.07.08',
      area: '台北星火中心',
      pic: '00035.jpg'
    },
    {
      no: '00001',
      date: '2023.10.10',
      area: '台北星火中心',
      pic: '00040.jpg'
    },
    {
      no: '00001',
      date: '2023.11.29',
      area: '台北星火中心',
      pic: '00066.jpg'
    },
    {
      no: '00018',
      date: '2024.01.01',
      area: '台中星火中心',
      pic: '00105.jpg'
    },
    {
      no: '00018',
      date: '2024.01.20',
      area: '台中星火中心',
      pic: '00112.jpg'
    },
    {
      no: '00018',
      date: '2024.02.22',
      area: '台中星火中心',
      pic: '00134.jpg'
    },
    {
      no: '00018',
      date: '2024.03.28',
      area: '台中星火中心',
      pic: '00155.jpg'
    },
  ]

  // const letterRow = ({ row, rowIndex }) => {
  //   if (rowIndex % 2 == 0) {
  //     return "no_bgcolor";
  //   } else {
  //     return "bgcolor";
  //   }
  // };


</script>

<style scoped lang="scss">
  @import '@/assets/sass/pages/member-center/member-center.scss';
</style>

