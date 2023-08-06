<script setup>
import { ref } from 'vue';
import { useFirebaseAuth } from 'vuefire';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter();

const auth = useFirebaseAuth();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = ref('');
const sendEmail = () => {
  const enteredEmail = email.value;
  if (enteredEmail === '') {
    errorAccount.value = '請輸入信箱';
  } else if (!emailRegex.test(enteredEmail)) {
    errorAccount.value = '請輸入正確的信箱格式';
  } else {
    sendPasswordResetEmail(auth, enteredEmail)
      .then(() => {
        alert('驗證信已寄出，請檢查您的信箱。');
        router.push('/login')
      })
      .catch((error) => {
        alert('寄送驗證信時發生錯誤:' + error.message);
      });
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
