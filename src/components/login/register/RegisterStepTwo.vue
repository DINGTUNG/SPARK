<script setup>
import { ref } from 'vue';
import { reactive } from "vue";
import { useRouter } from 'vue-router';
import axios from 'axios';

const name = ref('');
const id_number = ref('');
const company_number = ref('');
const cellphone = ref('');
const local_phone = ref('');
const work_phone = ref('');
const address = ref('');
const errorContent = ref('');

const router = useRouter();


const Years = reactive([
    '年份', 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
])
const Months = reactive([
    '月份', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
])
const Days = reactive([
    '日期', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
])
const companyNumber = ref(false);
const showCompanyNumber = () => {
    companyNumber.value = true;
}
const showId = () => {
    companyNumber.value = false;
}

const selectedFile = ref(null);
const imageUrl = ref('');

const handleFileChange = (event) => {
    const file = event.target.files[0];
    selectedFile.value = file;
    imageUrl.value = URL.createObjectURL(file);
};

const submit = () => {
    const enteredName = name.value;
    const selectedNameTitle = document.querySelector('input[name="member_salutation"]:checked');
    const enteredIDNumber = id_number.value;
    const IDNumberRegex = /^[A-Z][1-2]\d{8}$/; //正規表達式，第一碼需大寫英文、第二碼1或2的10位數
    const enteredCompanyNumber = company_number.value;
    const selectedYear = document.getElementById('year').value;
    const selectedMonth = document.getElementById('month').value;
    const selectedDay = document.getElementById('day').value;
    const enteredCellphone = cellphone.value;
    const cellphoneRegex = /^[0-9]{10}$/; //正規表達式，代表0-9數字的10位數
    const enteredAddress = address.value;
    const selectedReceipt = document.querySelector('input[name="receipt_class"]:checked');

    const isIDNumberShow = companyNumber.value == false;
    const isCompanyNumberShow = companyNumber.value == true;

    if (enteredName === '') {
        errorContent.value = '連名字都不填，太狠了';
    } else if (!selectedNameTitle) {
        errorContent.value = '寶貝記得選擇稱謂';
    } else if (isIDNumberShow && !IDNumberRegex.test(enteredIDNumber)) {
        errorContent.value = '身分證字號有問題喔小傻瓜';
    } else if (isCompanyNumberShow && enteredCompanyNumber.length < 8) {
        errorContent.value = '請輸入統一編號';
    } else if (selectedYear === '年份' || selectedMonth === '月份' || selectedDay === '日期') {
        errorContent.value = '寶貝請選擇正確的生日';
    } else if (!cellphoneRegex.test(enteredCellphone) || enteredCellphone.indexOf('09', 0) !== 0) {
        errorContent.value = '寶貝你的手機號碼^^ 是沒填還是亂填呀';
    } else if (enteredAddress === '') {
        errorContent.value = '地址沒填，是不是無家可歸QQ';
    } else if (!selectedReceipt) {
        errorContent.value = '寶貝記得選擇發票種類';
    } else {
        registerStepTwo();
    }

}
//註冊會員第二步驟(詳細資料) API
async function registerStepTwo () {
  try {
        const main_form = document.querySelector('#main_form');
        const formData = new FormData(main_form);
        const res = await axios.post('https://tibamef2e.com/chd102/g3/back-end/php/member/membership_system/registerStepTwo.php', formData, { withCredentials: true })
        if (res.data.status === 'ok') {
            console.log(res.data);
            alert('耶！註冊成功！可以登入囉！');
            router.push({ path: '/login' });
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
        <form id="main_form" method="POST" action="https://tibamef2e.com/chd102/g3/back-end/php/member/membership_system/registerStepTwo.php">
            <div class="main_form">
            <div class="form_title">
                <i class="fa-solid fa-clipboard-list"></i>
                <h4>填寫基本資料</h4>
            </div>
            <div class="form_row">
                <label for="name">姓名/公司名*</label>
                <div class="form_box name">
                    <input type="text" name="member_name" class="name" v-model="name" id="name" placeholder="請輸入姓名/公司名" maxlength="30">
                    <div class="label_radio_wrap">
                        <label class="label_radio">
                            <input type="radio" name="member_salutation" value="先生" class="input_radio"
                                @click="showId">先生</label>
                        <label class=" label_radio"><input type="radio" name="member_salutation" value="小姐" class="input_radio"
                                @click="showId">小姐</label>
                        <label class="label_radio"><input type="radio" name="member_salutation" value="公司" class="input_radio"
                                @click="showCompanyNumber">公司</label>
                    </div>
                </div>
            </div>

            <div class="form_row" id="id_number_row" v-if="!companyNumber">
                <label for="id_number">身分證字號*</label>
                <div class="form_box id_number">
                    <input type="text" name="member_id_card" class="id_number" v-model="id_number" id="id_number" placeholder="請輸入身分證字號"
                        maxlength="10">
                </div>
            </div>

            <div class="form_row" id="company_number_row" v-if="companyNumber">
                <label for="company_number">統一編號*</label>
                <div class="form_box company_number">
                    <input type="text" name="member_id_card"  class="company_number" v-model="company_number" id="company_number" placeholder="請輸入統一編號"
                        maxlength="8">
                </div>
            </div>

            <div class="form_row">
                <label for="birthday">生日*</label>
                <div class="birthday_wrap">
                    <div class="birthday_select">
                        <select name="member_birthyear" id="year">
                            <option v-for="(year, index) in Years" :key="index" :value="year">{{ year }}</option>
                        </select>
                        <Images :imgSrc="'pictures/images/login/chevron_down.svg'" />
                    </div>
                    <div class="birthday_select">
                        <select name="member_birthmonth" id="month">
                            <option v-for="(mouth, index) in Months" :key="index" :value="mouth">{{ mouth }}</option>
                        </select>
                        <Images :imgSrc="'pictures/images/login/chevron_down.svg'" />
                    </div>
                    <div class="birthday_select">
                        <select name="member_birthday" id="day">
                            <option v-for="(day, index) in Days" :key="index" :value="day">{{ day }}</option>
                        </select>
                        <Images :imgSrc="'pictures/images/login/chevron_down.svg'" />
                    </div>

                </div>
            </div>

            <div class="form_row">
                <label for="cellphone">手機*</label>
                <div class="form_box cellphone">
                    <input type="text" name="member_mobile" class="cellphone" v-model="cellphone" id="cellphone" placeholder="請輸入手機號碼"
                        maxlength="10">
                </div>
            </div>

            <div class="form_row">
                <label for="local_phone">住家電話</label>
                <div class="form_box local_phone">
                    <input type="text" name="member_home_phone" class="local_phone" v-model="local_phone" id="local_phone" placeholder="請輸入住家電話">
                </div>
            </div>

            <div class="form_row">
                <label for="work_phone">公司電話*(如個人則非必填)</label>
                <div class="form_box work_phone">
                    <input type="text" name="member_business_phone" class="work_phone" v-model="work_phone" id="work_phone" placeholder="請輸入公司電話">
                </div>
            </div>

            <div class="form_row">
                <label for="address">地址*</label>
                <div class="form_box address">
                    <input type="text" name="member_address" class="address" v-model="address" id="address" placeholder="請輸入地址">
                </div>
            </div>

            <div class="form_row">
                <label for="receipt">發票種類*</label>
                <div class="label_radio_wrap">
                    <label class="label_radio"><input type="radio" name="receipt_class" value="個人"
                            class="input_radio">個人發票</label>
                    <label class="label_radio"><input type="radio" name="receipt_class" value="統編"
                            class="input_radio">統編發票</label>
                    <label class="label_radio"><input type="radio" name="receipt_class" value="捐贈"
                            class="input_radio">捐贈發票</label>
                    <label class="label_radio"><input type="radio" name="receipt_class" value="電子" class="input_radio">電子發票</label>
                </div>
            </div>

            <div class="form_row">
                <h5>會員頭貼</h5>
                <label class="label_up_file">
                    <input type="file" name="member_img" id="up_file" style="display:none"
                        accept="image/gif, image/jpeg, image/png" @change="handleFileChange">
                    <div v-if="!imageUrl" class="up_file_text">
                        <i class="fa-solid fa-file-arrow-up"></i>
                        <p>點擊以上傳圖片</p>
                    </div>
                    <img v-show="imageUrl" :src="imageUrl" />
                </label>
            </div>

            <div v-if="errorContent" class="error_content">
                {{ errorContent }}
            </div>

            <button type="button" class="submit" @click="submit">送出</button>
        </div>
    </form>

</template>

<style scoped lang="scss">
@import "@/assets/sass/components/login/register/register-step-two";
</style>