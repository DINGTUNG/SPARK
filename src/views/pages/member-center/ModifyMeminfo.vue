<script setup>
import { reactive } from 'vue';

const Years = reactive([
    2005, '請選擇年份', 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
])
const Months = reactive([
    9, '請選擇月份', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
])
const Days = reactive([
    19, '請選擇日期', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
])

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
                <h1>修改會員資料</h1>
                <h5>會員編號 brt98439849d</h5>
            </div>
                <div class="form_item">
                    <label for="account">帳號</label>
                    <input type="text" placeholder="TouGua0919" disabled>
                </div>
                <div class="form_item">
                    <label for="name">姓名*</label>
                    <input type="text" class="name" id="name" value="蔡頭瓜" maxlength="30">
                    <div class="label_radio_wrap name_title">
                        <div class="radio_item">
                            <label class="label_radio"><input type="radio" name="name_title" value="male"
                            checked
                            class="input_radio ">先生</label>
                        </div>
                        <div class="radio_item">
                            <label class="label_radio"><input type="radio" name="name_title" value="female"
                            class="input_radio">小姐</label>
                        </div>
                        <div class="radio_item">
                            <label class="label_radio"><input type="radio" name="name_title" value="company"
                            class="input_radio">公司</label>
                        </div>
                    </div>
                </div>
            <div class="form_item">
                <label for="id_number">身分證字號*</label>
                <input type="text" class="id_number" v-model="id_number" id="id_number" placeholder="T123008889"
                disabled
                maxlength="10">
            </div>
                <div class="form_item">
                    <label for="birthday">生日*</label>
                    <div class="birthday_wrap">
                        <div class="birthday_select">
                            <select  name="year" id="year">
                                <option  v-for="(year,index) in Years" :key="index">{{ year }}</option>
                            </select>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="birthday_select">
                            <select name="month" id="month">
                                <option v-for="(month, index) in Months" :key="index">{{ month }}</option>
                            </select>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="birthday_select">
                            <select name="day" id="day">
                                <option v-for="(day, index) in Days" :key="index">{{ day }}</option>
                            </select>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        </div>
                </div>
        
                <div class="form_item">
                    <label for="cellphone">手機*</label>
                    <input type="text" class="cellphone"  id="cellphone" value="0978099123"
                        maxlength="10">
                </div>
         
        
                <div class="form_item">
                    <label for="local_phone">住家電話</label>
                    <input type="text" class="local_phone"  id="local_phone" placeholder="請輸入住家電話">

                </div>
       
                <div class="form_item">
                    <label for="work_phone">公司電話</label>
                    <input type="text" class="work_phone"  id="work_phone" value="03-425-1108">
                </div>

        
                <div class="form_item">
                    <label for="address">地址*</label>
                    <input type="text" class="address"  id="address" value="320桃園市中壢區復興路46號9樓">
                </div>
                <div class="form_item">
                    <label for="receipt">發票種類*</label>
                        <div class="label_radio_wrap receipt">
                            <label class="receipt"><input type="radio" name="receipt" value="personal"
                                    class="input_radio">個人發票</label>
                            <label class="receipt"><input type="radio" name="receipt" value="tax_id"
                                    class="input_radio">統編發票</label>
                            <label class="receipt"><input type="radio" name="receipt" value="donate"
                            checked
                            class="input_radio">捐贈發票</label>
                            <label class="receipt"><input type="radio" name="receipt" value="paper" class="input_radio">紙本發票</label>
                    </div>
                </div>
                <button class="confirm" type="button">
                    確認修改
                </button>
            </div>
        </div>
    </div>
  
</template>
  
<style scoped lang="scss">
@import '@/assets/sass/pages/member-center/modify-meminfo';
</style>
  
