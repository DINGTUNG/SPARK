<script lang="js" setup>
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script>


<template>



<br v-for="n in 100" :key="n">
   <el-table :header-cell-class-name="headerCellClassName" :data="tableData">
      <el-table-column   prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </template>

<style scoped lang="scss">
/* @import "@/assets/sass/pages/member-center/_member-center"; */

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
  