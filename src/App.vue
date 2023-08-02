<script setup>
import { RouterView, useRoute } from 'vue-router'
import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
import LeftMenu from '@/layout/LeftMenu.vue';
import RightMenu from '@/layout/RightMenu.vue';
import { useMemberDataStore } from '@/stores/member-data.js'; //學長加的


const route = useRoute();
const memberStore = useMemberDataStore(); //學長加的

const checkLogin = () => { //學長加的
const userData = localStorage.getItem('user');
const userDataObj = userData ? JSON.parse(userData) : null;
// $.get('/php/isLogin.php').then(res => userDataObj = res.data);
if (!userDataObj) return;
console.log(userDataObj)
memberStore.updateUser(userDataObj);
}

checkLogin()

</script>

<template>
  <!-- <pre>{{ memberStore.userData }}</pre> --> <!-- 學長加的 -->
  <Header v-if="!route.meta.hideHeader" />
  <RightMenu v-if="!route.meta.hideRightMenu"/>
  <LeftMenu v-if="!route.meta.hideLeftMenu"/>
  <RouterView />
  <Footer v-if="!route.meta.hideFooter" />
</template>

<style lang="scss"></style>
