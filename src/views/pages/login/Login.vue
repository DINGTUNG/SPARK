<script setup>
import 'animate.css';
import { ref, onMounted, reactive, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import VueRecaptcha from 'vue3-recaptcha2';
import { useFirestore } from 'vuefire'; //import firebase
const firebase = useFirestore(); //宣告firebase為firebase的內容
import { getRedirectResult, signInWithRedirect, signOut, } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
const auth = useFirebaseAuth() // only exists on client side，這行只能僅存在於前端(client side)
const user = useCurrentUser();
const router = useRouter();
const error = ref(null)// display errors if any(如果有的話就顯示錯誤)
const Membership = ref(false)
import { GoogleAuthProvider } from 'firebase/auth'
const googleAuthProvider = new GoogleAuthProvider()
//登入跳轉函式，會跳轉到google的帳號頁面
function signInRedirect() {
  signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signInRedirect', reason)
    error.value = reason
  })
}

onMounted(() => {
  getRedirectResult(auth)
    .then((Response) => {
      // console.log(Response);

    })
    .catch((reason) => {
      console.error('Failed redirect result', reason)
      error.value = reason
    })
})



//google登入跳轉函式:問題:跳轉遲鈍
// const handleLoginStatusChange = () => {
//   if (isLoggedIn()) {
//     console.log('使用者已登入');
//     router.push('/');
//   } else {
//     console.log('使用者已登出');
//   }
// };

// watch(user, handleLoginStatusChange, { deep: true });
// const isLoggedIn = () => {
//   return user.value !== null;
// };



const isValidToken = ref(false)
const instance_vueRecaptchaV2 = reactive({
  data_v2SiteKey: '6LdCGEwnAAAAAD5ILm-sPl_6mswpIfvMKY89E-hr',
  recaptchaVerified: (response_token) => {
    console.log('驗證成功');
    console.log(response_token);
    // 連接後端API，給後端進行認證
    // Connect to your Backend service.
    isValidToken.value = true;
  },
  recaptchaExpired: () => {
    // 驗證過期後進行的動作
    console.log('驗證過期啦QAQ');
  },
  recaptchaFailed: () => {
    console.log('驗證失敗');
    // 驗證失敗進行的動作
  },
});

console.log(Membership.value)


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
  } else if (!isValidToken.value) {
    errorAccount.value = '請進行驗證';
  } else {
    if (enteredAccount === 'tibame' && enteredPassword === '1234') {
      errorAccount.value = '';
      alert('登入成功');
      Membership.value = true;
      router.push({ path: '/' });
      return Membership;
    } else {
      errorAccount.value = '帳號或密碼不正確';
    }
  }
};
</script>
<template>
  <div class="login_body">
    <img :src="'pictures/images/login/login.jpg'" class="title_img">
    <div class="login">
      <h1>會員登入</h1>
      <!-- <p v-if="user">Hello {{ user.providerData.displayName }}</p> -->
      <label for="account">帳號</label>
      <input type="text" class="account" v-model="account" placeholder="輸入您的帳號或信箱"
        :class="{ 'animate__animated animate__headShake': errorAccount }">
      <label for="password">密碼</label>

      <div class="password_wrapper" ref="passwordField" :class="{ 'animate__animated animate__headShake': errorAccount }">
        <div class="password_block">
          <input :type="showPassword ? 'password' : 'text'" class="password" v-model="password" placeholder="輸入您的密碼">
          <span class="toggle" @click="showHide"> <img v-if="showPassword"
              :src="'pictures/images/login/eye_hide.svg'" alt="hide" />
            <img v-else :src="'pictures/images/login/eye_show.svg'" alt="show" /></span>
        </div>
        <div class="recaptcha_forget_block">
          <vue-recaptcha :sitekey="instance_vueRecaptchaV2.data_v2SiteKey" size="normal" theme="light" hl="zh-TW"
            @verify="instance_vueRecaptchaV2.recaptchaVerified" @expire="instance_vueRecaptchaV2.recaptchaExpired"
            @fail="instance_vueRecaptchaV2.recaptchaFailed" ref="vueRecaptcha">
          </vue-recaptcha>
          <div class="forgot_psw">
            <i class="fa-solid fa-circle-question"></i>
            <a href="#">忘記密碼</a>
          </div>
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
      <button class="google_login" @click="signInRedirect">
        <i class="fa-brands fa-google"></i>
        以 google 帳號登入
      </button>

      <div class="signup">
        <span>
          你還不是會員嗎？
          <i class="fa-solid fa-pen"></i>
          <RouterLink to="/register">註冊會員</RouterLink>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/sass/pages/login";
</style>
