<script setup>
import { useMemberDataStore } from '@/stores/member-data.js';
const memberDataStore = useMemberDataStore();

// import { Form, Field } from 'vee-validate';
  
// const schema = {
//   document: (value) => {
//     if (value.length == 2) {
//       return true;
//     }
//       // alert( '請閱讀隱私權政策與認養注意事項並勾選。');
//   },
// };

// function onSubmit(values) {
//   console.log(JSON.stringify(values, null, 2));
// }

</script>


<template>
  <table class="member_data_table">

    <caption>
      會員資料<br>
      <span>*備註:提醒，若要修改會員資料，請前往會員中心</span>
    </caption>


    <tr>
      <th colspan="2" class="mem_file">個人檔案</th>
      <th class="mem_id_title">會員編號</th>
      <th class="mem_id">{{ memberDataStore.memberData.memId }}</th>
    </tr>

    <tr>
      <td class="title">姓名</td>
      <td>{{ memberDataStore.memberData.name }}</td>
      <td class="title">英文名</td>
      <td>{{ memberDataStore.memberData.enName }}</td>
    </tr>

    <tr>
      <td class="title">公司</td>
      <td>{{ memberDataStore.memberData.companyName }}</td>
      <td class="title">統一編號</td>
      <td>{{ memberDataStore.memberData.gui }}</td>
    </tr>

    <tr>
      <td class="title">身分證字號</td>
      <td colspan="3" >{{ memberDataStore.memberData.id }}</td>

    </tr>

    <tr>
      <td class="title">住址</td>
      <td colspan="3">{{ memberDataStore.memberData.address }}</td>
    </tr>


    <tr>
      <th class="contact" colspan="4">聯絡方式</th>
    </tr>

    <tr>
      <td class="title">Email</td>
      <td colspan="3">{{ memberDataStore.memberData.email }}</td>
    </tr>

    <tr>
      <td class="title">手機</td>
      <td>{{ memberDataStore.memberData.mobile }}</td>
      <td class="title">住家電話</td>
      <td>{{ memberDataStore.memberData.tel }}</td>
    </tr>

    <tr>
      <td class="title">公司電話</td>
      <td colspan="3">{{ memberDataStore.memberData.businessPhone }}</td>
    </tr>

    <tr>
      <th class="account" colspan="4">帳號</th>
    </tr>

    <tr>
      <td class="account_data" colspan="2">{{ memberDataStore.memberData.account }}</td>
    </tr>

  </table>

  <form action="">
    <div>
      <input type="checkbox" v-validate="'required'">
      <label for="">當您勾選後，即視同您已同意遵守本網站個人<span>隱私權政策</span>及交易安全宣告與其他有關著作權、版權、商標專用權、網路智慧財產權等之法律規定。</label>
    </div>
    <div>
      <input type="checkbox" v-validate="'required'">
      <label for="">當您勾選後，即視同您已同意遵守本會<span>認養注意事項</span>。</label>
    </div>

  </form>



  <!-- <Form :validation-schema="schema" @submit="onSubmit">


<Field name="document" type="checkbox" value="privacy-policy" />
<label for="">
  當您勾選後，即視同您已同意遵守本網站個人<span>隱私權政策</span>及交易安全宣告與其他有關著作權、版權、商標專用權、網路智慧財產權等之法律規定。
</label>

<Field name="document" type="checkbox" value="sponsor-precautions" />
<label for="">
  當您勾選後，即視同您已同意遵守本會<span>認養注意事項</span>。
</label>
</Form> -->












</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/table/member-data-table';
</style>

