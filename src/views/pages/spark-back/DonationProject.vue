<script setup>
import SideBar from '../spark-back/SideBar.vue';
import { ref, reactive,computed  } from 'vue'
const page = ref(1)
const dialog = ref(false)

const dialogDelete = ref(false); // 控制刪除對話框的顯示
const itemToDelete = ref(null); // 存儲要刪除的項目

function showDeleteDialog(item) {
  itemToDelete.value = item; // 存儲要刪除的項目
  dialogDelete.value = true; // 顯示刪除對話框
}

function deleteItemConfirm() {
  // 不直接執行刪除操作，僅關閉刪除對話框，讓使用者確認是否刪除
  closeDelete(); // 關閉刪除對話框
}

function closeDelete() {
  dialogDelete.value = false; // 隱藏刪除對話框
  if (itemToDelete.value) {
    const confirmDelete = confirm("是否確定要刪除？");
    if (confirmDelete) {
      const index = donateList.indexOf(itemToDelete.value);
      if (index !== -1) {
        donateList.splice(index, 1); // 從列表中刪除項目沒效 
      }
    }
    itemToDelete.value = null; // 清空要刪除的項目
  }
}

// 換頁
const itemsPerPage = 8;
  const displayedDonateList = computed(() => {
    const startIdx = (page.value - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return donateList.slice(startIdx, endIdx);
  });


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
  {
    no: '9',
    id: '00001',
    name: '扶幼捐款',
    start_date: '2023.01.17',
    end_date: '2028.01.17',
  },
  {
    no: '10',
    id: '00002',
    name: '助養召集令',
    start_date: '2023.03.08',
    end_date: '2028.03.08',
  },
  {
    no: '11',
    id: '00003',
    name: '獎助學金',
    start_date: '2023.05.22',
    end_date: '2028.05.22',
  },
  {
    no: '12',
    id: '00004',
    name: '急難救助金',
    start_date: '2023.06.27',
    end_date: '2028.06.27',
  },
  {
    no: '13',
    id: '00005',
    name: '獎助學金',
    start_date: '2023.08.05',
    end_date: '2028.08.05',
  },
  {
    no: '14',
    id: '00006',
    name: '營養補助',
    start_date: '2023.11.13',
    end_date: '2028.11.13',
  },
  {
    no: '15',
    id: '00007',
    name: '特殊醫療照顧',
    start_date: '2023.12.26',
    end_date: '2028.12.26',
  },
  {
    no: '16',
    id: '00008',
    name: '營養補助',
    start_date: '2024.01.10',
    end_date: '2028.01.10',
  },
  {
    no: '17',
    id: '00005',
    name: '助養召集令',
    start_date: '2023.08.05',
    end_date: '2028.08.05',
  },
  {
    no: '18',
    id: '00006',
    name: '特殊醫療照顧',
    start_date: '2023.11.13',
    end_date: '2028.11.13',
  },
  {
    no: '19',
    id: '00007',
    name: '扶幼捐款',
    start_date: '2023.12.26',
    end_date: '2028.12.26',
  },
  {
    no: '20',
    id: '00008',
    name: '兒童保護',
    start_date: '2024.01.10',
    end_date: '2028.01.10',
  },
  {
    no: '21',
    id: '00005',
    name: '助養召集令',
    start_date: '2023.08.05',
    end_date: '2028.08.05',
  },
  {
    no: '22',
    id: '00006',
    name: '兒童保護',
    start_date: '2023.11.13',
    end_date: '2028.11.13',
  },
  {
    no: '23',
    id: '00007',
    name: '營養補助',
    start_date: '2023.12.26',
    end_date: '2028.12.26',
  },
  {
    no: '24',
    id: '00008',
    name: '特殊節日送暖金',
    start_date: '2024.01.10',
    end_date: '2028.01.10',
  },
])

</script>


<template>
  <div class="container">

    <div class="sidebar">
      <SideBar />
    </div>
    <div class="table_body">

      <h1>捐款管理｜捐款專案</h1>
      <v-table>
        <thead>
          <tr>
            <th>No.</th>
            <th>專案編號</th>
            <th>專案名稱</th>
            <th >開始日期</th>
            <th>結束日期</th>
            <th>狀態</th>
            <th>功能</th>
            <th>刪改</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in displayedDonateList" :key="item.id" class="no-border">
            <td class="td_no">{{ item.no }}</td>
            <td class="id">{{ item.id }}</td>
            <td class="name">{{ item.name }}</td>
            <td class="start_date">{{ item.start_date }}</td>
            <td class="end_date">{{ item.end_date }}</td>
            <td class="online">{{ item.online ? '已上架' : '未上架' }}</td>
            <td>
              <v-switch v-model="item.online" color="#EBC483" density="compact" hide-details="true" inline
                inset></v-switch>
            </td>
            <td>
              <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-pencil
              </v-icon>
              <v-icon size="small" @click="showDeleteDialog(item.raw)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>

      <v-btn class="text" min-width="100" color="#1D3D6C" :ripple="false" rounded="xl" size="x-large" variant="flat">新增</v-btn>

      <!-- 分頁 -->
      <div class="text-center">
        <v-pagination v-model="page" :length="3" rounded="circle" prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right" active-color="#F5F4EF" color="#E7E6E1"></v-pagination>
      </div>
    </div>

    <v-dialog v-model="dialogDelete" max-width="800px" persistent="true">

      <v-card class="delete_dialog">
        <v-card-title class="text-center">
          確定是否要刪除此捐款專案？
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#F2DFBF" variant="text" @click="closeDelete">
            取消
          </v-btn>
          <v-btn color="#F2DFBF" variant="text" @click="deleteItemConfirm">
            刪除
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>




  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/spark-back/donation-project";
</style>
