<script setup>
import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();



import { useMemberDataStore } from '@/stores/member-data.js';

const memberDataStore = useMemberDataStore();


</script>

<template>
  <div class="table_wrap">

    <table>
      <tr>
        <th colspan="4">認養總覽</th>
      </tr>

      <tr>
        <td class="title">編號</td>
        <td class="title">認養地區</td>
        <td class="title">認養人數</td>
        <td class="title">金額</td>
      </tr>

      <tbody v-for="(location, index) in sponsorCartStore.locationList" :key="location.id">
        <tr v-if="sponsorCartStore.getCurrentCountInCart(location.id) != 0">
          <td>{{ index + 1 }}</td>
          <td>{{ location.name }}</td>
          <td class="add_and_remove">
            <span class="count"> {{ sponsorCartStore.getCurrentCountInCart(location.id) }}</span>
          </td>
          <td>NTD {{ sponsorCartStore.getLocationTotalCost(location.id) }}</td>


        </tr>
      </tbody>

      <tfoot>
        <!-- <td class="total">NTD {{ sponsorCartStore.getLocationTotalCost(location.id) }}</td> -->
      </tfoot>


    </table>

    <table>
      <tr>
        <th colspan="4">認養資訊</th>
      </tr>

      <tr>
        <td class="title">姓名</td>
        <td>{{ memberDataStore.memberData.name }}</td>
        <td class="title">會員編號</td>
        <td>{{ memberDataStore.memberData.memId }}</td>
      </tr>

      <tr>
        <td class="title">公司</td>
        <td>{{ memberDataStore.memberData.companyName }}</td>
        <td class="title">統一編號</td>
        <td>{{ memberDataStore.memberData.gui }}</td>
      </tr>


      <tr>
        <td class="title">Email</td>
        <td>{{ memberDataStore.memberData.email }}</td>
        <td class="title">定期繳款方案</td>
        <td>{{ sponsorCartStore.chosenPlanType.display}}繳</td>
      </tr>

      <tr>
        <td class="title">手機</td>
        <td>{{ memberDataStore.memberData.mobile }}</td>
        <td class="title">繳款方式</td>
        <td>{{ sponsorCartStore.chosenMethodType.display}}</td>
      </tr>

    </table>





  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/_sponsor-overview-table.scss';
</style>
