<script setup>
import { onMounted } from 'vue';
import axios from 'axios'
import { useDonateCartStore, DonateProject } from '@/stores/donate-cart.js';
const donateCartStore = useDonateCartStore();

const luckyDay = Math.random() >= 0.8;

function openDonatePage() {
  const url = 'https://www.buymeacoffee.com/tanuki.jr';
  window.open(url, '_blank');
}

function showSideList(donateProjectId, donateProjectName) {
  donateCartStore.donateCart.length = 0
  const chosenDonateProject = {
    donate_project_id: donateProjectId,
    donate_project_name: donateProjectName
  }

  donateCartStore.donateCart.push(chosenDonateProject)
  console.log(donateCartStore.donateCart);
  donateCartStore.showSideList()
}

// 串接資料庫
async function donateConnection() {
  try {
    const response = await axios.post('https://tibamef2e.com/chd102/g3/back-end/php/donate/donate-project/get_donate_project.php')

    if (response.data.length > 0) {
      response.data.forEach(element => {
        donateCartStore.DonateList.push(element)
      });
    }
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  donateConnection()
})

</script>


<template>
  <div class="donate_content_card_list">
    <div class="donate_content_card" v-for="(item, index) in donateCartStore.DonateList" :key="index"
      :ref="item.donate_project_id" :id="item.donate_project_id">
      <div class="card_pic">
        <img :src="`http://localhost/SPARK_BACK/images/donate-project/${item.donate_project_image}`"
          :alt="item.donate_project_name">
      </div>
      <div class="card_content">
        <h3>{{ item.donate_project_name }}</h3>
        <p>{{ item.donate_project_summarize }}</p>
        <h4>捐款累計 NTD {{ item.donate_project_amount }}</h4>

        <button @click="showSideList(item.donate_project_id, item.donate_project_name)">加入清單</button>
        <!-- 點擊button觸發程式並帶入donateContentCard.id -->
      </div>
    </div>

    <div v-if="luckyDay" class="donate_content_card">
      <div class="card_pic">
        <img :src="DonateProject.TYPE.SIAWASE_TANUKI.imgSrc" alt="DonateProject.TYPE.SIAWASE_TANUKI.">
      </div>
      <div class="card_content">
        <h3>{{ DonateProject.TYPE.SIAWASE_TANUKI.title }}</h3>
        <p>{{ DonateProject.TYPE.SIAWASE_TANUKI.content }}</p>
        <h4>捐款累計 {{ DonateProject.TYPE.SIAWASE_TANUKI.fundSum }}🍠</h4>
        <button @click="openDonatePage">前往贊助</button>
      </div>
    </div>


  </div>
</template>



<!-- <template>
  <div class="donate_content_card_list">
    <div class="donate_content_card" v-for="donateProject in DonateProject.TYPES" :key="donateProject.id"
      :ref="donateProject.ref" :id="donateProject.id">
      <div class="card_pic">
        <img :src="donateProject.imgSrc" :alt="donateProject.title">
      </div>
      <div class="card_content">
        <h3>{{ donateProject.title }}</h3>
        <p>{{ donateProject.content }}</p>
        <h4>捐款累計 NTD {{ donateProject.fundSum }}</h4>

        <button @click="showSideList(donateProject)">加入清單</button>
        點擊button觸發程式並帶入donateContentCard.id
      </div>
    </div>

    <div v-if="luckyDay" class="donate_content_card">
      <div class="card_pic">
        <img :src="DonateProject.TYPE.SIAWASE_TANUKI.imgSrc" alt="DonateProject.TYPE.SIAWASE_TANUKI.">
      </div>
      <div class="card_content">
        <h3>{{ DonateProject.TYPE.SIAWASE_TANUKI.title }}</h3>
        <p>{{ DonateProject.TYPE.SIAWASE_TANUKI.content }}</p>
        <h4>捐款累計 {{ DonateProject.TYPE.SIAWASE_TANUKI.fundSum }}🍠</h4>
        <button @click="openDonatePage">前往贊助</button>
      </div>
    </div>


  </div>
</template> -->


<style scoped lang="scss">
@import "@/assets/sass/components/func-items/cards/donate/donate-content-card";
</style>
