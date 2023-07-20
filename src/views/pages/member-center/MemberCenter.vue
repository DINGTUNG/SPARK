<script lang="js" setup>
  const tableData = [
    {
      no: '00001',
      date: '2023.06.10',
      area: '台北星火中心',
      pic:'00001.jpg'
    },
    {
      no: '00001',
      date: '2023.07.08',
      area: '台北星火中心',
      pic:'00035.jpg'
    },
    {
      no: '00001',
      date: '2023.10.10',
      area: '台北星火中心',
      pic:'00040.jpg'
    },
    {
      no: '00001',
      date: '2023.11.29',
      area: '台北星火中心',
      pic:'00066.jpg'
    },
    {
      no: '00018',
      date: '2024.01.01',
      area: '台中星火中心',
      pic:'00105.jpg'
    },
    {
      no: '00018',
      date: '2024.01.20',
      area: '台中星火中心',
      pic:'00112.jpg'
    },
    {
      no: '00018',
      date: '2024.02.22',
      area: '台中星火中心',
      pic:'00134.jpg'
    },
    {
      no: '00018',
      date: '2024.03.28',
      area: '台中星火中心',
      pic:'00155.jpg'
    },
  ]


  const letterRow = ({ row, rowIndex }) => {
    if(rowIndex % 2 == 0){
      return "test-odd test-blue";
    } else {
      return "test-even test-red";
    }
  };

  </script>


<template>

<div class="about_container">
  <div class="main_body">
    
    <br v-for="n in 10" :key="n">
  
     <el-table :data="tableData" border :header-cell-class-name="headerCellClassName" :row-class-name="letterRow">
       <el-table-column prop="no" label="兒童編號" width="180" />
       <el-table-column prop="date" label="日期" width="180" />
       <el-table-column prop="area" label="所屬據點" width="180"/>
       <el-table-column prop="pic" label="來自小朋友的手寫信" />
     </el-table>
  </div>

</div>

</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/member-center/_member-center";

::v-deep .el-table .warning-row {
  background-color: pink;
  color: red;
}

.my-header {
  background: blue !important; 
}

.column{
color: red;

}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>

  