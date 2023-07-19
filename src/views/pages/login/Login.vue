<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router=useRouter();
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
  } else {
    if (enteredAccount === 'tibame' && enteredPassword === '1234') {
      errorAccount.value = ''; 
      console.log('登入成功');
      alert('登入成功');
      router.push({ path: '/' });
      //跳轉頁面失效
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
  <div class="main_body">
    <img src="https://picsum.photos/300/200/?random=10">
    <div class="login">
      <h1>會員登入</h1>
      <label for="account">帳號</label>
      <input type="text" class="account" v-model="account">
      <label for="">密碼</label>
      <input type="password" class="password" v-model="password">
      <div v-if="errorAccount" class="errorAccount">
        {{ errorAccount }}
      </div>
      <button class="login_button" @click="login">登入</button>
    </div>

  </div>
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/login";
</style>