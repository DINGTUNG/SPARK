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
       <el-table-column prop="date" label="Date" width="180" />
       <el-table-column prop="name" label="Name" width="180" />
       <el-table-column prop="address" label="Address" />
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

  