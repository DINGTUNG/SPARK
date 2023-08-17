<script setup>
import { ref,reactive, onMounted } from 'vue';
import axios from 'axios';
const Years = reactive([
    '請選擇年份', 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
])
const Months = reactive([
    '請選擇月份', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
])
const Days = reactive([
    '請選擇日期', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
])

const selectedFile = ref(null);
const imageUrl = ref('');

const handleFileChange = (event) => {
  const file = event.target.files[0];
  selectedFile.value = file;
  imageUrl.value = URL.createObjectURL(file);
};

const member = reactive({});
async function getMemberInfo() {
    try {
    const res = await axios.get('https://tibamef2e.com/chd102/g3/back-end/php/member/membership_system/get_member_info.php', { withCredentials: true });
    Object.assign(member, res.data);
    } catch (error) {
    console.error('網路請求錯誤:', error);
    alert('網路請求錯誤');
    }
}

onMounted(async () => {
  await getMemberInfo(); // 等待資料讀取完成
  selectedReceiptType.value = member.receipt_class;
});


const isEditMode = ref(false);

const toggleEditMode = () => {
    isEditMode.value = !isEditMode.value;
};
const selectedReceiptType = ref('個人');

const isReceiptSelected = (value) => {
    return member.receipt_class === value;
};

</script>
<template>
    <div class="container">
        <div class="main_body">
            <div class="main_form">
                <div class="deco">
                    <Images id="star1" :imgSrc="'pictures/decorations/illustration/smilestar_golden.svg'" :alt="'金星星'" />
                    <Images id="star2" :imgSrc="'pictures/decorations/illustration/smilestar_yellow.svg'" :alt="'黃星星'" />
                    <Images id="rocket" :imgSrc="'pictures/decorations/illustration/rocket_with_gold_fire.svg'" :alt="'火箭'" />
                </div>
                <div class="title">
                    <h1>會員基本資料</h1>
                    <h5>會員編號 {{ member.member_id }}</h5>
                </div>

                <!-- 上傳大頭照 -->
                <label class="label_up_file" >
                    <input
                    type="file"
                    name="up_file"
                    id="up_file"
                    style="display:none"
                    accept="image/gif, image/jpeg, image/png" @change="handleFileChange">
                    <img v-if="!imageUrl" :src="`https://tibamef2e.com/chd102/g3/back-end/images/member-info/${member.member_img}`" id="origin_img" alt="會員頭像">
                    <div v-if="!imageUrl" class="up_file_text">
                        <i class="fa-solid fa-file-arrow-up"></i>
                        <p>點擊上傳圖片</p>
                    </div>
                    <img v-show="imageUrl" :src="imageUrl" />
                </label>
                
                
                <div class="form_item">
                    <label for="account">帳號：</label>
                    <input type="text"
                    class="account_input"
                    :placeholder="member.member_account" disabled>
                </div>
                <div class="form_item">
                    <label for="name">姓名*：</label>
                    <input v-if="isEditMode"
                    type="text" class="name" id="name"
                    :value="member.member_name"
                    maxlength="30">
                    <span v-else>{{ member.member_name }}</span>
                    <div class="label_radio_wrap name_title">
                        <div class="radio_item">
                            <label class="label_radio"><input type="radio" name="name_title" value="male"
                            checked
                            class="input_radio " disabled>先生</label>
                        </div>
                        <div class="radio_item">
                            <label class="label_radio"><input type="radio" name="name_title" value="female"
                            class="input_radio" disabled>小姐</label>
                        </div>
                        <div class="radio_item">
                            <label class="label_radio"><input type="radio" name="name_title" value="company"
                            class="input_radio" disabled>公司</label>
                        </div>
                    </div>
                </div>

                <div class="form_item">
                    <label for="id_number">身分證字號*：</label>
                    <input type="text" class="id_number" id="id_number" :placeholder="member.member_id_card"
                    disabled
                    maxlength="10">
                </div>

                <div class="form_item">
                    <label for="birthday">生日*：</label>
                    <div class="birthday_wrap">
                        <div class="birthday_select">
                            <select v-if="isEditMode" name="year" id="year">
                                <option  v-for="(year,index) in Years" :key="index" :value="member.member_birthyear">{{ year }}</option>
                            </select>
                            <i v-if="isEditMode" class="fa-solid fa-chevron-down"></i>
                            <span v-if="!isEditMode">{{ member.member_birthyear }}</span>
                        </div>
                        <div class="birthday_select">
                            <select v-if="isEditMode" name="month" id="month">
                                <option v-for="(month, index) in Months" :key="index" :value="member.member_birthmonth">{{ month }}</option>
                            </select>
                            <i v-if="isEditMode" class="fa-solid fa-chevron-down"></i>
                            <span v-if="!isEditMode">{{ member.member_birthmonth }}</span>
                        </div>
                        <div class="birthday_select">
                            <select v-if="isEditMode" name="day" id="day">
                                <option v-for="(day, index) in Days" :key="index" :value="member.member_birthday">{{ day }}</option>
                            </select>
                            <i v-if="isEditMode" class="fa-solid fa-chevron-down"></i>
                            <span v-if="!isEditMode">{{ member.member_birthday }}</span>
                        </div>
                        </div>
                </div>
        
                <div class="form_item">
                    <label for="cellphone">手機*：</label>
                    <input v-if="isEditMode"
                    type="text"
                    id="cellphone"
                    :value="member.member_mobile"
                    maxlength="10">
                    <span v-else>{{ member.member_mobile }}</span>
                </div>
         
        
                <div class="form_item">
                    <label for="local_phone">住家電話：</label>
                    <input v-if="isEditMode" type="text" 
                    id="local_phone"
                    :value="member.member_home_phone"
                    placeholder="請輸入住家電話">
                    <span v-else>{{ member.member_home_phone }}</span>
                </div>
       
                <div class="form_item">
                    <label for="work_phone">公司電話：</label>
                    <input v-if="isEditMode" type="text"
                    :value="member.member_business_phone"
                    id="work_phone">
                    <span v-else>{{ member.member_business_phone }}</span>
                </div>
        
                <div class="form_item">
                    <label for="address">地址*：</label>
                    <input v-if="isEditMode" type="text"
                    :value="member.member_address"
                    id="address">
                    <span v-else>{{ member.member_address }}</span>
                </div>
                <div class="form_item">
                    <label for="receipt">發票種類*：</label>
                    <div class="label_radio_wrap receipt">
                        <label class="receipt">
                        <input type="radio" name="receipt" value="個人" class="input_radio" v-model="selectedReceiptType" :disabled="isReceiptSelected('個人')">個人發票
                        </label>
                        <label class="receipt">
                        <input type="radio" name="receipt" value="統編" class="input_radio" v-model="selectedReceiptType" :disabled="isReceiptSelected('統編')">統編發票
                        </label>
                        <label class="receipt">
                        <input type="radio" name="receipt" value="捐贈" class="input_radio" v-model="selectedReceiptType" :disabled="isReceiptSelected('捐贈')">捐贈發票
                        </label>
                        <label class="receipt">
                        <input type="radio" name="receipt" value="電子" class="input_radio" v-model="selectedReceiptType" :disabled="isReceiptSelected('捐贈')">電子發票
                        </label>
                    </div>
                </div>

                <div class="confirm_button">
                    <button class="confirm" type="button"
                    :class="{ gold : isEditMode }"  @click="toggleEditMode">
                    {{ isEditMode ? '確認修改' : '修改基本資料' }}
                    </button>
                    <button v-if="isEditMode"
                        class="cancel"
                        type="button"
                        @click="toggleEditMode">取消
                    </button>
                </div>
            </div>
        </div>
    </div>
  
</template>
  
<style scoped lang="scss">
@import '@/assets/sass/pages/member-center/modify-meminfo';
</style>
  
