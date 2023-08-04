<script setup>
import { useLogStore } from '@/stores/login-dummy-data.js'
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useFirestore, useCurrentUser, useFirebaseAuth } from 'vuefire'; //import firebase
const firebase = useFirestore(); //宣告firebase為firebase的內容
import { getRedirectResult, signInWithRedirect, GoogleAuthProvider, signOut, getAuth, updatePassword } from 'firebase/auth'
const auth = useFirebaseAuth() // only exists on client side，這行只能僅存在於前端(client side)
const user = useCurrentUser();
const router = useRouter();
const error = ref(null)// display errors if any(如果有的話就顯示錯誤)
const googleAuthProvider = new GoogleAuthProvider()

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


const email = ref('')
const errorAccount = ref('');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sendEmail = () => {
  const enterEmail = email.value
  if (email.value === '') {
    errorAccount.value = '請輸入信箱';
  } else if(!emailRegex.test(enterEmail)) {
    errorAccount.value = '請輸入正確的信箱格式';
  }else{
    alert('good')
  }
}




</script>
<template>
  <div class="login">
    <h1>忘記密碼</h1>
    <form action="" method="">
      <label for="account">請輸入您的信箱以進行驗證</label>
      <input type="email" class="email" v-model="email" placeholder="輸入您的信箱"
        :class="{ 'animate__animated animate__headShake': errorAccount }" name="memId">
    </form>
    <button class="login_button" @click="sendEmail">寄送驗證信</button>
    <div v-if="errorAccount" class="error_account">
      {{ errorAccount }}
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/sass/components/login/forget";
</style>
