<script setup>
import { useLogStore } from '../stores/text-log.js';
const logStore = useLogStore();
</script>



<template>
  <div class="about_container">
    <div class="main_body">

      <p>hello,{{ logStore.log[0].name }}</p>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/test';
</style>





