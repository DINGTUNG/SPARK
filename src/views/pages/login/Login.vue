<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import 'animate.css';



//import firebase
import { useFirestore } from 'vuefire';
const firebase = useFirestore(); //宣告firebase為firebase的內容
console.log(firebase) //檢查看看
import {getRedirectResult,signInWithRedirect,signOut,} from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'

const auth = useFirebaseAuth() // only exists on client side，這行只能僅存在於前端(client side)

// display errors if any(如果有的話就顯示錯誤)
const error = ref(null)

import { GoogleAuthProvider } from 'firebase/auth'
const googleAuthProvider = new GoogleAuthProvider()
//登入跳轉函式，會跳轉到google的帳號頁面
function signinRedirect() {
  signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signinRedirect', reason)
    error.value = reason
  })
}


// only on client side
onMounted(() => {
  getRedirectResult(auth)
  .then((Response)=>{
    })
  .catch((reason) => {
    console.error('Failed redirect result', reason)
    error.value = reason
  })
})



const router = useRouter();
const account = ref('');
const password = ref('');
const errorAccount = ref('');
const passwordField = ref(null);
const showPassword = ref(true);

function showHide() {
  if (passwordField.value.type === 'password') {
    passwordField.value.type = 'password';
  } else {
    passwordField.value.type = 'text';
  }
  // 切换显示密码图标
  showPassword.value = !showPassword.value;
}

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
    } else {
      console.log('帳號或密碼不正確');
      errorAccount.value = '帳號或密碼不正確';
    }
  }
};


</script>
<template>
  <div class="login_body">
    <img :src="'public/pictures/images/login/login.jpg'" class="title_img">
    <div class="login">
      <h1>會員登入</h1>
      <label for="account">帳號</label>
      <input type="text" class="account" v-model="account" placeholder="輸入您的帳號或信箱" :class="{'animate__animated animate__headShake': errorAccount}">
      <label for="password">密碼</label>
      <div class="password_wrapper" ref="passwordField" :class="{'animate__animated animate__headShake': errorAccount}"> 
        <input :type="showPassword ? 'password' : 'text'" class="password" v-model="password" placeholder="輸入您的密碼">
        <span class="toggle" @click="showHide">
          <img v-if="showPassword" :src="'public/pictures/images/login/eye_hide.svg'" alt="hide" />
          <img v-else :src="'public/pictures/images/login/eye_show.svg'" alt="show" />
        </span>
        <div class="forgot_psw">
          <i class="fa-solid fa-circle-question"></i>
          <a href="#">忘記密碼</a>
        </div>
      </div>

      <div v-if="errorAccount" class="error_account">
        {{ errorAccount }}
      </div>
      <button class="login_button" @click="login">登入</button>

      <div class="login_methods">
        <div class="line"></div>
        <h6>以其他方式登入</h6>
        <div class="line"></div>
      </div>
      <button class="google_login" @click="signinRedirect">
        <i class="fa-brands fa-google"></i>
        以 google 帳號登入
      </button>

      <div class="signup">
        <span>
          你還不是會員嗎？
          <i class="fa-solid fa-pen"></i>
          <a href="#">註冊會員</a>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/login";
</style>
