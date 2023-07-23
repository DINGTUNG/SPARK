<script setup></script>

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
                        <div class="step_text">步驟</div>
                        <div class="step_number">1</div>
                    </div>
                    <i class="fa-solid fa-arrow-right"></i>
                    <div class="step_item two">
                        <div class="step_text">步驟</div>
                        <div class="step_number">2</div>
                    </div>
                </div>
                <p class="header_notice">
                    完成註冊後，帳號、姓名和身分證/統一編號將無法變更，為避免影響您權益，請正確填寫，有任何問題請來電洽詢。
                </p>
            </div>
            <div class="main_form">
                <div class="form_title">
                    <img src="" alt="">
                    <div class="form_title_text">您的帳號密碼</div>
                </div>
                <div class="form_row">
                    <label for="account">帳號*</label>
                    <div class="form_box">
                        <input type="text" class="account" v-model="account" id="account">
                    </div>
                </div>
                <div class="form_row">
                    <label for="password">密碼*</label>
                    <div class="form_box">
                        <input type="password" class="password" v-model="account" id="password">
                    </div>
                </div>
                <div class="form_row">
                    <label for="password_check">確認密碼*</label>
                    <div class="form_box">
                        <input type="password" class="password_check" v-model="account" id="password_check">
                    </div>
                </div>
                <input type="email" class="email_check" v-model="email_check" id="email_check">
                <input type="text" class="safety_code" v-model="safety_code" id="safety_code">
                <button>下一步</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/pages/register";
</style>