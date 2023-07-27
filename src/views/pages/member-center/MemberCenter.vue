<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const getButtonStyle = (routePath) => {
      return {
        backgroundColor: route.path === routePath ? 'red' : 'blue',

      };
};


</script>


<template>
    <div class="navigation_button_MB">
      <router-link :style="getButtonStyle('/member-center')" to="/member-center">認養紀錄</router-link>
      <router-link :style="getButtonStyle('/member-center/donate-record')" to="/member-center/donate-record">捐款紀錄</router-link>
      <router-link :style="getButtonStyle('/member-center/letter-record')" to="/member-center/letter-record">感謝函專區</router-link>
      <router-link :style="getButtonStyle('/member-center/modify-meminfo')" to="/member-center/modify-meminfo">修改會員資料</router-link>
    </div>
    <router-view/>
</template>
