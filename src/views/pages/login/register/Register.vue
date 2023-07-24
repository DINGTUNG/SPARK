<script setup>
import { ref } from 'vue';

const passwordField = ref(null);
const showPassword = ref(true);

function showHide() {
    if (passwordField.value.type === 'password') {
        passwordField.value.type = 'password';
    } else {
        passwordField.value.type = 'text';
    }
    // 切換顯示密碼圖示
    showPassword.value = !showPassword.value;
}
</script>

<template>
    <div class="register_container">
        <div class="register_banner">
            <p>助貧不是一個人做很多<br>是每個人都做了一點</p>
            <img :src="'pictures/logo/logo_white_vertical.png'" alt="logo" class="logo">
        </div>
        <div class="register_main">
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
                    <label for="account">帳號*</label>
                    <div class="form_box account">
                        <input type="text" class="account" v-model="account" id="account" placeholder="請輸入英數字8至20字元"
                            minlength="8" maxlength="20">
                    </div>
                </div>
                <div class="form_row">
                    <label for="password">密碼*</label>
                    <div class="form_box password" ref="passwordField">
                        <input :type="showPassword ? 'password' : 'text'" class="password" v-model="password" id="password"
                            placeholder="請輸入英數字8至20字元" minlength="8" maxlength="20">
                        <span class="toggle" @click="showHide">
                            <img v-if="showPassword" :src="'public/pictures/images/login/eye_hide.svg'" alt="hide" />
                            <img v-else :src="'public/pictures/images/login/eye_show.svg'" alt="show" />
                        </span>
                    </div>
                </div>
                <div class="form_row">
                    <label for="password_check">確認密碼*</label>
                    <div class="form_box password_check" ref="passwordField">
                        <input :type="showPassword ? 'password' : 'text'" class="password_check" v-model="password_check"
                            id="password_check" placeholder="請再輸入一次密碼" minlength="8" maxlength="20">
                        <span class="toggle" @click="showHide">
                            <img v-if="showPassword" :src="'public/pictures/images/login/eye_hide.svg'" alt="hide" />
                            <img v-else :src="'public/pictures/images/login/eye_show.svg'" alt="show" />
                        </span>
                    </div>
                </div>
                <div class="form_box email_check">
                    <input type="email" class="email_check" v-model="email_check" id="email_check"
                        placeholder="請輸入Email並點擊寄送驗證碼">
                    <button>
                        <i class="fa-solid fa-paper-plane"></i>寄送驗證碼
                    </button>
                </div>
                <div class="form_box">
                    <input type="text" class="safety_code" v-model="safety_code" id="safety_code" placeholder="請輸入收到之驗證碼">
                </div>
                <button class="next_step">下一步</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/register";
</style>