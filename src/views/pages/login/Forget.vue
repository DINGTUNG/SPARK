<script setup>
import { useLogStore } from '@/stores/login-dummy-data.js'
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

import VueRecaptcha from 'vue3-recaptcha2';

import { useFirestore, useCurrentUser, useFirebaseAuth } from 'vuefire'; //import firebase
const firebase = useFirestore(); //宣告firebase為firebase的內容
import { getRedirectResult, signInWithRedirect, GoogleAuthProvider, signOut, getAuth, updatePassword } from 'firebase/auth'
const auth = useFirebaseAuth() // only exists on client side，這行只能僅存在於前端(client side)
const user = useCurrentUser();
const router = useRouter();
const error = ref(null)// display errors if any(如果有的話就顯示錯誤)
const googleAuthProvider = new GoogleAuthProvider()
const logStore = useLogStore();//假帳號js

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
    <div class="login">
      <h1>忘記密碼</h1>
      <form action="" method="">
        <label for="account">請輸入您的信箱</label>
        <input type="text" class="account" v-model="account" placeholder="輸入您的信箱"
          :class="{ 'animate__animated animate__headShake': errorAccount }" name="memId" autocomplete="username">
      </form>
      <button class="login_button" @click="login">寄送驗證信</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/sass/pages/login";
</style>
