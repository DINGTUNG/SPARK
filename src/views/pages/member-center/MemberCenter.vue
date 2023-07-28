<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const getButtonStyle = (routePath) => {
        if(route.path === routePath){
          return 'current-route'
        }else{
          return 'another-route'
        }
      ;
};


</script>

<template>
    <div class="navigation_button_MB">
      <router-link :class="getButtonStyle('/member-center')" to="/member-center">認養紀錄</router-link>
      <router-link :class="getButtonStyle('/member-center/donate-record')" to="/member-center/donate-record">捐款紀錄</router-link>
      <router-link :class="getButtonStyle('/member-center/letter-record')" to="/member-center/letter-record">感謝函專區</router-link>
      <router-link :class="getButtonStyle('/member-center/modify-meminfo')" to="/member-center/modify-meminfo">修改會員資料</router-link>
    </div>
    <router-view/>
</template>

<style scoped lang="scss">
@include custom-responsive ("xs sm") {
  .navigation_button_MB{
      width: 80vw;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: space-between;
      margin: 15vh auto 0;
      .current-route{
        @include smallBlueBtn_MB;
      }
      .another-route{
        @include smallWhiteBtn_MB;
      }
      a{
      text-decoration: none;
      display: inline-block;
      text-align: center;
      line-height: 35px;
    }
  }
}
@include custom-responsive ("xl xx-l") {
  .navigation_button_MB{
    display: none;
  }
}


</style>