<script setup>
  import SideBar from '../spark-back/SideBar.vue';
  import { ref,reactive } from 'vue'
  const page = ref(1)
  const model = ref(true)




  const donateList = reactive([
    {
      no: '1',
      id: '00001',
      name: '扶幼捐款',
      start_date: '2023.01.17',
      end_date: '2028.01.17',
    },
    {
      no: '2',
      id: '00002',
      name: '兒童保護',
      start_date: '2023.03.08',
      end_date: '2028.03.08',
    },
    {
      no: '3',
      id: '00003',
      name: '助養召集令',
      start_date: '2023.05.22',
      end_date: '2028.05.22',
    },
    {
      no: '4',
      id: '00004',
      name: '獎助學金',
      start_date: '2023.06.27',
      end_date: '2028.06.27',
    },
    {
      no: '5',
      id: '00005',
      name: '急難救助金',
      start_date: '2023.08.05',
      end_date: '2028.08.05',
    },
    {
      no: '6',
      id: '00006',
      name: '營養補助',
      start_date: '2023.11.13',
      end_date: '2028.11.13',
    },
    {
      no: '7',
      id: '00007',
      name: '特殊醫療照顧',
      start_date: '2023.12.26',
      end_date: '2028.12.26',
    },
    {
      no: '8',
      id: '00008',
      name: '特殊節日送暖金',
      start_date: '2024.01.10',
      end_date: '2028.01.10',
    },
  ])
</script>


<template>
  <div class="container">
    
    <SideBar/>
    <!-- <div class="sidebar">

      <div class="logo">
        <img :src="'pictures/logo/logo_white.svg'" alt="星火logo">
      </div>
      <v-expansion-panels variant="accordion" elevation="0">
        <v-expansion-panel
          v-for="i in 9"
          :key="i"
          title="會員管理"
          text="會員"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div> -->


    <div class="table_body">

      <h1>捐款管理｜捐款專案</h1>
      <v-table>
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>
              專案編號
            </th>
            <th>
              專案名稱
            </th>
            <th >
              開始日期
            </th>
            <th>
              結束日期
            </th>
            <th>
              狀態
            </th>
            <th>
              功能
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in donateList"
            :key="item.id" class="no-border">
            <td class="td_no">{{ item.no }}</td>
            <td class="id">{{ item.id }}</td>
            <td class="name">{{ item.name }}</td>
            <td class="start_date">{{ item.start_date }}</td>
            <td class="end_date">{{ item.end_date }}</td>
            <td class="online">{{ item.online ? '已上架' : '未上架' }}</td>
            <td>
              <v-switch
              v-model="item.online"
              color="#1D3D6C"
              density="compact"
              hide-details="true"
              inline
              inset></v-switch>
            </td>
            <td class="function">{{ item.function }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-btn
      min-width="100"
      color="#1D3D6C"
      :ripple="false"
      rounded="xl"
      size="x-large"
      variant="flat"
      style="color: white;"
      >新增</v-btn>

      <!-- 分頁 -->
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="5"
          rounded="circle"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
          active-color="#F5F4EF"
          color="#E7E6E1"
        ></v-pagination>
      </div>
      
    
    </div>

  </div>
  </template>

<style scoped lang="scss">
@import "@/assets/sass/pages/spark-back/donation-project";


</style>