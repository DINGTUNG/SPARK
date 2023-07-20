<template>
  <el-table :data="tableData" :table-layout="tableLayout" :cell-class-name="myRow">
    <el-table-column v-for="headerCell in tableHeader" :key="headerCell.label" :prop="headerCell.prop"
      :label="headerCell.label" />
  </el-table>
</template>

<script lang="ts" setup>




import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableHeader = [
  { label: "tanuki-1", prop: "date" },
  { label: "tanuki-2", prop: "name" },
  { label: "tanuki-3", prop: "address" },
]

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

const myRow = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 0) {
    return "test-blue";
  } else {
    return "test-red";
  }
};

</script>

<style scoped lang="scss">
@import '@/assets/sass/pages/member-center/member-center.scss';
</style>


<style>
.test-red {
  font-weight: bold;
  background-color: red;

}

.cell {
  color: chartreuse;

}

.test-blue {
  font-weight: bold;
}
</style>

