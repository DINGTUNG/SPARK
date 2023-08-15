<script setup>
import { useSponsorCartStore, Location } from '@/stores/sponsor-cart.js';
import { useMemberDataStore } from '@/stores/member-data.js';
import { usePaymentStore } from '@/stores/payment.js';

const paymentStore = usePaymentStore()
const sponsorCartStore = useSponsorCartStore();
const memberDataStore = useMemberDataStore();

</script>

<template>
  <div class="table_wrap">

    <table class="sponsor_overview">
      <tr>
        <th colspan="4">認養總覽</th>
      </tr>

      <tr>
        <td class="title">編號</td>
        <td class="title">認養地區</td>
        <td class="title">認養人數</td>
        <td class="title">金額</td>
      </tr>

      <tbody v-for="([locationId], index) in [...sponsorCartStore.cart]" :key="locationId">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ sponsorCartStore.getLocationFromSponsorLocationList(locationId) }}</td>
          <td class="add_and_remove">
            <span class="count"> {{ sponsorCartStore.getCurrentCountInCart(locationId) }}</span>
          </td>
          <td>NTD {{ sponsorCartStore.getLocationTotalCost(locationId) }}</td>
        </tr>
      </tbody>

      <tfoot>
        <td colspan="4" class="total">
          <div>
            <img class="star" :src="'pictures/decorations/illustration/orange_asterisk_single_2.svg'"
              alt=""><span>認養費({{ sponsorCartStore.chosenPlanType.display}})</span><span>NTD {{ sponsorCartStore.totalCost * sponsorCartStore.chosenPlanType.period }}</span>
          </div>
        </td>
      </tfoot>


    </table>

    <table class="sponsor_info sponsor_info_PC">
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
        <td>{{ sponsorCartStore.chosenPlanType.display }}繳</td>
      </tr>

      <tr>
        <td class="title">手機</td>
        <td>{{ memberDataStore.memberData.mobile }}</td>
        <td class="title">繳款方式</td>
        <td>{{ paymentStore.chosenMethodType.display }}</td>
      </tr>

    </table>


    <table class="sponsor_info sponsor_info_MB">
      <tr>
        <th colspan="2">認養資訊</th>
      </tr>
      <tr>
        <td class="title">姓名</td>
        <td>{{ memberDataStore.memberData.name }}</td>
      </tr>
      <tr>
        <td class="title">會員編號</td>
        <td>{{ memberDataStore.memberData.memId }}</td>
      </tr>
      <tr>
        <td class="title">公司</td>
        <td>{{ memberDataStore.memberData.companyName }}</td>
      </tr>
      <tr>
        <td class="title">統一編號</td>
        <td>{{ memberDataStore.memberData.gui }}</td>
      </tr>
      <tr>
        <td class="title">Email</td>
        <td>{{ memberDataStore.memberData.email }}</td>
      </tr>
      <tr>
        <td class="title">定期繳款方案</td>
        <td>一次繳清</td>
      </tr>
      <tr>
        <td class="title">手機</td>
        <td>{{ memberDataStore.memberData.mobile }}</td>
      </tr>
      <tr>
        <td class="title">繳款方式</td>
        <td>{{ paymentStore.chosenMethodType.display }}</td>
      </tr>

    </table>


  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/sponsor/sponsor-overview-table.scss';
</style>
