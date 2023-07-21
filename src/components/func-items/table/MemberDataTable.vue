<script setup>
import { ref } from 'vue';
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const tableTitle = ref("會員資料");


</script>

<template>
  <table class="member_data_table">

    <caption>
      {{ tableTitle }}<br>
      <span>*備註:提醒，若要修改會員資料，請前往會員中心</span>
    </caption>


    <tr class="user_file">
      <th>個人檔案</th>
      <th>會員編號</th>
    </tr>

    <tr>
      <td>姓名</td>
      <td>英文名</td>
    </tr>

    <tr>
      <td>公司</td>
      <td>統一編號</td>
    </tr>

    <tr>
      <td>身分證字號</td>
    </tr>

    <tr>
      <td>住址</td>
    </tr>




    <tr class="contact" >
      <th colspan="2">聯絡方式</th>
    </tr>
  
    <tr>
      <td>Email</td>
    </tr>

    <tr>
      <td>手機</td>
      <td>住家電話</td>
    </tr>

    <tr>
      <td>公司電話</td>
    </tr>

    <tr class="account" >
      <th colspan="2">帳號</th>
    </tr>

    <tr>
      <td>service@tibame.com</td>
    </tr>

  </table>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/member-data-table';
</style>

