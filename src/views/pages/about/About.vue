<script setup>

import { ref } from 'vue';
const h1 = ref("認識星火")

</script>

<template>
  <div class="about_countainer">
    <div class="main_body">
      <div class="about_banner">
        <img :src="'assets/images/about/banner.jpg'" alt="認識星火封面">
      </div>
      <div class="title_block">
        <h1>認識星火</h1>
        <img class="deco" :src="'assets/decorations/illustration/decorative_line.png'" alt="裝飾線">
      </div>
      

    </div>
  </div>











  </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/about";
</style>