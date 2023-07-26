<script setup>
import { reactive } from "vue";

const user = reactive({
    memId:'brt98439849d',
    account:'TouGua0919',
    firstName:'Tou Gua',
    secondName:'Cai',
    ID:'T123008889',
    birthYear:'2005',
    birthMonth:'09',
    birthDay:'19',
    email:'Service@tibame.com',
    phoneNumber:'0978099123',
    companyPhone:'03-425-1108',
    address:'320桃園市中壢區復興路46號9樓'
})
</script>
<template>
    <div class="container">
        <div class="main_body">
            <div class="title">
                <h1>修改基本資料</h1>
                <h5>{{ user.memId }}</h5>
            </div>
            <div class="main_form">
                <label for="account">帳號</label>
                <input id="account" type="text" :placeholder="user.account" disabled>
                <label for="first-name">英文名</label>
                <input id="first-name" type="text" maxlength="20" :placeholder="user.firstName">
                <input type="text" maxlength="20" :placeholder="user.secondName">
                <label for="ID">身分證字號/居留證號</label>
                <input type="text">
                
            </div>
            
        </div>
    </div>
  
</template>
  
<style scoped lang="scss">
@import '@/assets/sass/pages/member-center/modify-meminfo';
</style>
  