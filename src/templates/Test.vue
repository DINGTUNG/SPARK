<script lang="js" setup>
import SideBar from '../views/pages/spark-back/SideBar.vue';

</script>


<template>
  <div class="about_container">
    <div class="main_body">

      <br v-for="n in 10" :key="n">

      <SideBar/>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/test';
</style>




