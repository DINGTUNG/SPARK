<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFirebaseAuth } from 'vuefire';
import { verifyPasswordResetCode, confirmPasswordReset,sendPasswordResetEmail } from 'firebase/auth';

const auth = useFirebaseAuth();
const router = useRouter();
const errorAccount = ref('');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const langResources = {
  en: {
    resetScreenTitle: 'Reset Password',
    newPasswordLabel: 'Please enter your new password:',
    continueButton: 'Continue',
    successMessage: 'Password reset successful!',
    errorMessage: 'Error occurred during password reset.',
  },
  zh: {
    resetScreenTitle: '重置密碼',
    newPasswordLabel: '請輸入新密碼：',
    continueButton: '繼續',
    successMessage: '密碼重置成功！',
    errorMessage: '重置密碼時發生錯誤。',
  }
};

const email = ref('');
const newPassword = ref('');
const errorPassword = ref('');
const resetScreenVisible = ref(false);

const handleResetPassword = (actionCode, lang) => {
  const texts = langResources[lang] || langResources['zh'];
  // Verify the password reset code is valid.
  verifyPasswordResetCode(auth, actionCode).then((email) => {
    const accountEmail = email;

    // Show the reset screen with the user's email and ask the user for the new password.
    resetScreenVisible.value = true;

  }).catch((error) => {
    alert('驗證重置密碼動作代碼錯誤:', error);
  });
}

const showResetScreen = () => {
  // You can use Vue's binding syntax here to show the reset password screen
  // and let the user enter a new password.
}

const sendEmail = () => {
  const enteredEmail = email.value;
  if (enteredEmail === '') {
    errorAccount.value = '請輸入信箱';
  } else if (!emailRegex.test(enteredEmail)) {
    errorAccount.value = '請輸入正確的信箱格式';
  } else {
    handleResetPassword('actionCode', 'en');
    sendPasswordResetEmail(auth, enteredEmail)
      .then(() => {
        alert('驗證信已寄出，請檢查您的信箱。');
      })
      .catch((error) => {
        alert('寄送驗證信時發生錯誤:', error); 
      });
  }
}

const continueReset = () => {
  const newPasswordValue = newPassword.value;
  if (!newPasswordValue) {
    errorPassword.value = '請輸入新密碼';
  } else {
    confirmPasswordReset(auth, 'actionCode', newPasswordValue).then((resp) => {
      // Password reset has been confirmed and new password updated.
      alert('密碼重置成功！');
      // TODO: Display a link back to the app, or sign-in the user directly
      // if the page belongs to the same domain as the app:
      // auth.signInWithEmailAndPassword(accountEmail, newPasswordValue);
      // TODO: If a continue URL is available, display a button which on
      // click redirects the user back to the app via continueUrl with
      // additional state determined from that URL's parameters.
    }).catch((error) => {
      alert('確認重置密碼錯誤:', error);
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

      <!-- Show the reset password screen -->
      <div v-if="resetScreenVisible">
        <label for="newPassword">{{ texts.newPasswordLabel }}</label>
        <input type="password" class="newPassword" v-model="newPassword" placeholder="輸入您的新密碼">
        <button @click="continueReset">{{ texts.continueButton }}</button>
        <div v-if="errorPassword" class="error_password">
          {{ errorPassword }}
        </div>
      </div>
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
