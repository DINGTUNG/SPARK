<script setup>
  import { ref } from 'vue'
  
    const account = ref('');
    const password = ref('');
    const errorAccount = ref('');

    const login = () => {
      // 獲取用戶的帳密
      const enteredAccount = account.value;
      const enteredPassword = password.value;

      // 進行驗證
      if (enteredAccount === '' || enteredPassword === '') {
        errorAccount.value = '請輸入帳號或密碼';
      }else{
        if (enteredAccount === 'tibame' && enteredPassword === '1234') {
        console.log('登入成功');
        alert('登入成功')
        errorAccount.value = ''; //清空錯誤訊息沒有效？
      } else {
        console.log('帳號或密碼不正確');
        errorAccount.value = '帳號或密碼不正確';
      }
      }


  


      // return {
      // account,
      // password,
      // showError,
      // login
      // };
    };


</script>

<template>
  <!-- <img alt="" class="loginImg" src="@/assets/" width="360"/> -->
  <div class="login">
    <h1>會員登入</h1>
    <label for="account">帳號</label>
    <input type="text" class="account" v-model="account">
    <label for="">密碼</label>
    <input type="password" class="password" v-model="password">
    <button class="login" @click="login">登入</button>
  </div>

  <div v-if="errorAccount" class="errorAccount">
      {{ errorAccount }}
  </div>
</template>



<style scoped lang="scss">
@import "@/assets/sass/base/fonts/fonts-mixin";
@import "@/assets/sass/base/color";
@import "@/assets/sass/pages/login";


</style>