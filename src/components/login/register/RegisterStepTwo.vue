<script setup>
import { ref } from 'vue';
import { reactive } from "vue";
import { RouterView } from 'vue-router'

const passwordField = ref(null);
const showPassword = ref(true);
const Years = reactive([
    '請選擇年份', 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
])
const Months = reactive([
    '請選擇月份', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
])
const Days = reactive([
    '請選擇日期', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
])

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
            <i class="fa-solid fa-clipboard-list"></i>
            <h4>填寫基本資料</h4>
        </div>
        <div class="form_row">
            <label for="name">姓名*</label>
            <div class="form_box name">
                <input type="text" class="name" v-model="name" id="name" placeholder="請輸入姓名" maxlength="30">
                <div class="label_radio_wrap">
                    <label class="label_radio"><input type="radio" name="name_title" value="male"
                            class="input_radio">先生</label>
                    <label class="label_radio"><input type="radio" name="name_title" value="female"
                            class="input_radio">小姐</label>
                    <label class="label_radio"><input type="radio" name="name_title" value="company"
                            class="input_radio">公司</label>
                </div>
            </div>
        </div>
        <div class="form_row">
            <label for="id_number">身分證字號*</label>
            <div class="form_box id_number">
                <input type="text" class="id_number" v-model="id_number" id="id_number" placeholder="請輸入身分證字號"
                    maxlength="10">
            </div>
        </div>
        <div class="form_row">
            <label for="birthday">生日*</label>
            <div class="birthday_wrap">
                <div class="birthday_select">
                    <select name="year" id="year">
                        <option v-for="year in Years">{{ year }}</option>
                    </select>
                    <img :src="'pictures/images/login/chevron_down.svg'" />
                </div>
                <div class="birthday_select">
                    <select name="month" id="month">
                        <option v-for="month in Months">{{ month }}</option>
                    </select>
                    <img :src="'pictures/images/login/chevron_down.svg'" />
                </div>
                <div class="birthday_select">
                    <select name="day" id="day">
                        <option v-for="day in Days">{{ day }}</option>
                    </select>
                    <img :src="'pictures/images/login/chevron_down.svg'" />
                </div>


            </div>
        </div>
        <div class="form_box email_check">
            <label for="email_check">E-mail*</label>
            <input type="email" class="email_check" id="email_check" value="spark@gmail.com" disabled>
            <button>
                <i class="fa-solid fa-paper-plane"></i>已驗證
            </button>
        </div>
        <div class="form_row">
            <label for="cellphone">手機*</label>
            <div class="form_box cellphone">
                <input type="text" class="cellphone" v-model="cellphone" id="cellphone" placeholder="請輸入手機號碼"
                    maxlength="10">
            </div>
        </div>
        <div class="form_row">
            <label for="local_phone">住家電話</label>
            <div class="form_box local_phone">
                <input type="text" class="local_phone" v-model="local_phone" id="local_phone" placeholder="請輸入住家電話">
            </div>
        </div>
        <div class="form_row">
            <label for="work_phone">公司電話*(如個人則非必填)</label>
            <div class="form_box work_phone">
                <input type="text" class="work_phone" v-model="work_phone" id="work_phone" placeholder="請輸入公司電話">
            </div>
        </div>
        <div class="form_row">
            <label for="address">地址*</label>
            <div class="form_box address">
                <input type="text" class="address" v-model="address" id="address" placeholder="請輸入地址">
            </div>
        </div>
        <div class="form_row">
            <label for="receipt">發票種類*</label>
            <div class="label_radio_wrap">
                <label class="label_radio"><input type="radio" name="receipt" value="personal"
                        class="input_radio">個人發票</label>
                <label class="label_radio"><input type="radio" name="receipt" value="tax_id"
                        class="input_radio">統編發票</label>
                <label class="label_radio"><input type="radio" name="receipt" value="donate"
                        class="input_radio">捐贈發票</label>
                <label class="label_radio"><input type="radio" name="receipt" value="paper" class="input_radio">紙本發票</label>
            </div>
        </div>
        <div class="form_row">
            <h5>會員頭貼</h5>
            <label class="label_up_file">
                <input type="file" name="up_file" id="up_file" style="display:none">
                <div class="up_file_text">
                    <i class="fa-solid fa-file-arrow-up"></i>
                    <p>點擊以上傳圖片</p>
                </div>
            </label>
        </div>
        <button type="submit" class="submit">送出</button>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/components/login/register/register-step-two";
</style>