<script setup>
import { useDonateCartStore } from '@/stores/donate-cart.js';
import { useMemberDataStore } from '@/stores/member-data.js';
import { usePaymentStore } from '@/stores/payment.js';

const paymentStore = usePaymentStore()

const donateCartStore = useDonateCartStore();
const memberDataStore = useMemberDataStore();

</script>

<template>
  <div class="table_wrap">

    <table class="donate_overview">
      <tr>
        <th colspan="4">捐款總覽</th>
      </tr>

      <tr>
        <td class="title">編號</td>
        <td class="title">捐款專案</td>
        <td class="title">金額</td>
      </tr>

      <tbody>
        <tr>
          <td>1</td>
          <td>{{ donateCartStore.chosenDonateProject.title }}</td>
          <td>NTD {{ donateCartStore.chosenPrice }}</td>
        </tr>
      </tbody>

      <tfoot>
        <td colspan="4" class="total">
          <div>
            <img class="star" :src="'/public/pictures/decorations/illustration/orange_asterisk_single_2.svg'"
              alt=""><span>捐款總計</span><span>NTD {{ donateCartStore.chosenPrice }}</span>
          </div>
        </td>
      </tfoot>


    </table>

    <table class="donate_info">
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
        <td>一次繳清</td>
      </tr>

      <tr>
        <td class="title">手機</td>
        <td>{{ memberDataStore.memberData.mobile }}</td>
        <td class="title">繳款方式</td>
        <td>{{ paymentStore.chosenMethodType.display }}</td>
      </tr>

    </table>


  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/donate/donate-overview-table';

</style>
