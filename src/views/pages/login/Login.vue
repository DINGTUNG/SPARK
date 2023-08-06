<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
<<<<<<< HEAD
const error = ref(null)// display errors if any(如果有的話就顯示錯誤)
const googleAuthProvider = new GoogleAuthProvider()
const logStore = useLogStore();//假帳號js
// const newPassword = getASecureRandomPassword();
// updatePassword(user, newPassword).then(() => {
//   console.log('重設密碼成功');
// }).catch((error) => {
//   console.log('重設密碼失敗');
// });

//登入跳轉函式，會跳轉到google的帳號頁面
function signInRedirect() {
  signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed signInRedirect', reason)
    error.value = reason
  })
}
//vFire-google
onMounted(() => {
  getRedirectResult(auth)
    .then((Response) => {
      console.log(Response);
    })
    .catch((reason) => {
      console.error('Failed redirect result', reason)
      error.value = reason
    })
})

const isValidToken = ref(false)//reCapthcha的判斷
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


// 一般帳號登入
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
  // 切換顯示密碼圖標
  showPassword.value = !showPassword.value;
}

const login = () => {
  const enteredAccount = account.value; // 獲取用戶的帳密
  const enteredPassword = password.value;
  // 進行驗證
  if (enteredAccount === '' || enteredPassword === '') {
    errorAccount.value = '請輸入帳號或密碼';
  } else if (!isValidToken.value) {
      errorAccount.value = '請進行驗證';
  } else {
    const userIndex = logStore.log.findIndex((item) => item.name === enteredAccount);
    if (userIndex !== -1 && logStore.log[userIndex].pass === enteredPassword) {
      logStore.log.forEach((item) => {
        item.state = false
      });
      logStore.log[userIndex].state = true;
      logStore.token = userIndex;
      errorAccount.value = '';
      alert(`登入成功：${logStore.log[userIndex].name}`);
      console.log(logStore.log[userIndex].state)
      router.push({ path: '/home' });
      account.value = '';
      password.value = '';

    } else {
      errorAccount.value = '帳號或密碼不正確';
    }
  }
};

=======
>>>>>>> 475f9761748409a1fd9bb322686b2c1bac6aadee
</script>
<template>
  <div class="login_body">
    <div class="login_banner_PC">
      <p>助貧不是一個人做很多<br>是每個人都做了一點</p>
      <img :src="'pictures/logo/logo_white_vertical.png'" alt="logo" class="logo">
    </div>
    <div class="login_banner_MB">
      <p>助貧不是一個人做很多<br>是每個人都做了一點</p>
      <img :src="'pictures/logo/logo_white_second.svg'" alt="logo" class="logo">
    </div>
  </div>
  <router-view />
</template>
<style scoped lang="scss">
@import "@/assets/sass/pages/login";
</style>
