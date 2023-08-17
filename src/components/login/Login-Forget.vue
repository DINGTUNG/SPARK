<script setup>
import { ref } from 'vue';
import axios from 'axios';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const account = ref('');
const errorAccount = ref('');
const sendEmail = () => {
  const enteredEmail = account.value;
  if (enteredEmail === '') {
    errorAccount.value = '請輸入信箱';
  } else if (!emailRegex.test(enteredEmail)) {
    errorAccount.value = '請輸入正確的信箱格式';
  } else {
    verifyLetter();
  }
}

const password = ref('');
const passwordField = ref(null);
const showPassword = ref(true);
const password_check = ref('');

function showHide() {
    if (passwordField.value.type === 'password') {
        passwordField.value.type = 'password';
    } else {
        passwordField.value.type = 'text';
    }
    // 切換顯示密碼圖示
    showPassword.value = !showPassword.value;
}


async function verifyLetter () {
    try{
        const member_account = account.value;
        const res = await axios.get(`https://tibamef2e.com/chd102/g3/back-end/php/member/membership_system/forget_verification_letter.php?member_account=${member_account}`, { withCredentials: true })
        if (res.data.status === "ok") {
            alert('驗證碼已寄出，請至信箱收取');
        } else {
            const msg = res.data.msg;
            errorAccount.value = msg;
        }
    } catch (error) {
        console.error('網路請求錯誤:', error);
        alert('網路請求錯誤');
    }
};

const verify_ststus = ref(false);
const safety_code = ref('');



const verifySecond = (safety_code) => {
    const verification_code = getCookie('verification_code');
    if( safety_code == verification_code) {
        deleteCookie('verification_code');
        alert('驗證成功，請繼續填寫資料');
        verify_ststus.value = true;
        //驗證成功，刪除對應的 cookie
    } else {
        alert('驗證碼錯誤');
    }
}
//抓對應的 cookie
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

async function resetPassword () {
  try {
        const main_form = document.querySelector('#main_form');
        const formData = new FormData(main_form);
        const res = await axios.post('https://tibamef2e.com/chd102/g3/back-end/php/member/membership_system/update_password.php', formData)
        console.log(res.data);
        if (res.data.status === 'ok') {
            alert('密碼修改成功，請重新登入');
            window.location.href = 'https://tibamef2e.com/chd102/g3/home'
        } else {
            const msg = res.data.msg;
            alert(msg);
        }
    } catch (error) {
        console.error('網路請求錯誤:', error);
        alert('網路請求錯誤');
    }
};


</script>

<template>
  <div class="login">
    <h1>忘記密碼</h1>
      <label for="account">請輸入您的信箱以進行驗證</label>
      <form id="main_form" method="POST" action="https://tibamef2e.com/chd102/g3/back-end/php/member/membership_system/update_password.php">
          <div class="form_box account">
            <input type="email" class="account" :class="{ 'animate__animated animate__headShake': errorAccount }" name="member_account" v-model="account" placeholder="請輸入電子信箱">
            <button type="button" @click="sendEmail">
                <i class="fa-solid fa-paper-plane"></i>寄送驗證碼
            </button>
        </div>
          <div v-if="errorAccount" class="error_account">
            {{ errorAccount }}
          </div>
        <div class="form_box safety_code">
            <input type="text" @keyup.enter="verifySecond(safety_code)" class="safety_code" v-model="safety_code"  placeholder="請輸入信箱收到之驗證碼">
            <button type="button"  @click="verifySecond(safety_code)">
              <i v-if="verify_ststus" class="fa-solid fa-check"></i>確認驗證碼
            </button>
        </div>
        <div class="password" v-if="verify_ststus">
            <div class="form_row">
              <div class="form_box password" ref="passwordField">
                  <input name="member_password" :type="showPassword ? 'password' : 'text'" class="password" v-model="password" id="password"
                      placeholder="密碼:請輸入英數字8至20字元" minlength="8" maxlength="20">
                  <span class="toggle" @click="showHide">
                      <img v-if="showPassword" :src="'pictures/images/login/eye_hide.svg'" alt="hide" />
                      <img v-else :src="'pictures/images/login/eye_show.svg'" alt="show" />
                  </span>
              </div>
          </div>

          <div class="form_row">
              <div class="form_box password_check" ref="passwordField">
                  <input :type="showPassword ? 'password' : 'text'" class="password_check" v-model="password_check"
                      id="password_check" placeholder="請再輸入一次密碼" minlength="8" maxlength="20">
                  <span class="toggle" @click="showHide">
                      <img v-if="showPassword" :src="'pictures/images/login/eye_hide.svg'" alt="hide" />
                      <img v-else :src="'pictures/images/login/eye_show.svg'" alt="show" />
                  </span>
              </div>
          </div>
          <button class="next_step" type="button" @click.prevent="resetPassword">確定修改</button>
        </div>
      </form>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/components/login/forget";
</style>
