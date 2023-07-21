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

};

  
</script>

<template>
  <div class="login_body">
    <img :src="'public/pictures/images/login/login.png'" class="title_img">
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
      <div class="login_block">
        <div class="login_title">
          <h5>以其他方式登入</h5>
          <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="">
        </div>
        <div class="google_login">
          <button>登入</button>
        </div>
        <div class="fb_login">
          <button>登入</button>
        </div>
    </div>
    </div>
   
  </div>
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/login";
</style>