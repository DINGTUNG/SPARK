<script setup>
import { ref } from 'vue';
import { reactive } from "vue";
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import axios from 'axios';

const account = ref('');
const password = ref('');
const safety_code = ref('');
const password_check = ref('');
const errorContent = ref('');

const passwordField = ref(null);
const showPassword = ref(true);

const router = useRouter();


function showHide() {
    if (passwordField.value.type === 'password') {
        passwordField.value.type = 'password';
    } else {
        passwordField.value.type = 'text';
    }
    // 切換顯示密碼圖示
    showPassword.value = !showPassword.value;
}

function alertSafetyCode() {
    const enteredAccount = account.value;
    const AccountRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (enteredAccount === '' || !AccountRegex.test(enteredAccount)) {
        alert('小寶貝，你的信箱格式有問題');
    } else {
        verifyOne();
    }
}

//連接會員 email 驗證 API

async function verifyOne () {
  try {
        const verify_form = document.querySelector('#verify_form');
        const formData = new FormData(verify_form);
        const res = await axios.post('http://localhost/SPARK_BACK/php/member/membership_system/verification_letter.php', formData ,{ withCredentials: true})
        if (res.data.status === 'ok') {
            alert('驗證碼已經寄出囉，偷偷告訴你是「0000」');
        } else {
            const msg = res.data.msg;
            alert(msg);
        }
    } catch (error) {
        console.error('網路請求錯誤:', error);
        alert('網路請求錯誤');
    }
};

//連接會員驗證碼 API
const verifySecond = (safety_code) => {
    const verification_code = getCookie('verification_code');
    if( safety_code == verification_code) {
        alert('驗證成功，請繼續填寫資料');
        deleteCookie('verification_code');
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


const nextStep = () => {
    const enteredAccount = account.value;
    const AccountRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const enteredPassword = password.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    const enteredSafetyCode = safety_code.value;
    const enteredPasswordCheck = password_check.value;

    if (enteredAccount === '') {
        errorContent.value = '帳號欄跟你的戶頭一樣空耶';
    } else if (!AccountRegex.test(enteredAccount)) {
        errorContent.value = '信箱不要亂填，我都有在看^^';
    } else if (enteredSafetyCode !== '0000') {
        errorContent.value = '驗證碼要確定餒？';
    } else if (!passwordRegex.test(enteredPassword)) {
        errorContent.value = '密碼有誤！叭叭叭！！(噴乾冰)';
    } else if (enteredPasswordCheck === '' || enteredPasswordCheck !== enteredPassword) {
        errorContent.value = '兩組密碼不一樣啦是不是老番顛';
    } else {

        router.push({ path: '/register/register-step-two' });
    }
}


</script>

<template>
    <div class="main_header">
        <h1 class="header_title">註冊會員</h1>
        <div class="header_step">
            <div class="step_item one">
                <div class="step_text">步 驟</div>
                <div class="step_number">1</div>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
            <div class="step_item two">
                <div class="step_text">步 驟</div>
                <div class="step_number">2</div>
            </div>
        </div>
        <p class="header_notice">
            完成註冊後，帳號、姓名和身分證/統一編號將無法變更，為避免影響您權益，請正確填寫，有任何問題請來電洽詢。
        </p>
    </div>
    <div class="main_form">
        <div class="form_title">
            <i class="fa-solid fa-circle-user"></i>
            <h4>您的帳號密碼</h4>
        </div>

        <div class="form_row">
            <label for="account">帳號(電子信箱)*</label>
            <div class="form_box account">
                <form id="verify_form" method="POST" action="http://localhost/SPARK_BACK/php/member/membership_system/verification_letter.php">
                    <input type="email" class="account" name="member_account" v-model="account" id="account" placeholder="請輸入電子信箱">
                    <button type="button" @click="alertSafetyCode">
                        <i class="fa-solid fa-paper-plane"></i>寄送驗證碼
                    </button>
                </form>
            </div>
        </div>

        <div class="form_box safety_code">
            <input type="text" class="safety_code" v-model="safety_code" id="safety_code" @keyup.enter="verifySecond(safety_code)" placeholder="請輸入信箱收到之驗證碼">
        </div>

        <div class="form_row">
            <label for="password">密碼*</label>
            <div class="form_box password" ref="passwordField">
                <input name="member_password" :type="showPassword ? 'password' : 'text'" class="password" v-model="password" id="password"
                    placeholder="請輸入英數字8至20字元" minlength="8" maxlength="20">
                <span class="toggle" @click="showHide">
                    <img v-if="showPassword" :src="'pictures/images/login/eye_hide.svg'" alt="hide" />
                    <img v-else :src="'pictures/images/login/eye_show.svg'" alt="show" />
                </span>
            </div>
        </div>

        <div class="form_row">
            <label for="password_check">確認密碼*</label>
            <div class="form_box password_check" ref="passwordField">
                <input :type="showPassword ? 'password' : 'text'" class="password_check" v-model="password_check"
                    id="password_check" placeholder="請再輸入一次密碼" minlength="8" maxlength="20">
                <span class="toggle" @click="showHide">
                    <img v-if="showPassword" :src="'pictures/images/login/eye_hide.svg'" alt="hide" />
                    <img v-else :src="'pictures/images/login/eye_show.svg'" alt="show" />
                </span>
            </div>
        </div>

        <div v-if="errorContent" class="error_content">
            {{ errorContent }}
        </div>

        <!-- <RouterLink to="/register/register-step-two" class="next_step">
            <button @click="nextStep">下一步</button>
        </RouterLink> -->

        <button class="next_step" @click="nextStep">下一步</button>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/components/login/register/register-step-one";
</style>