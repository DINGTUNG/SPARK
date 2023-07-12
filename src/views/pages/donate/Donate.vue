<script setup>
import DonateContentCard from '../../../components/donate/DonateContentCard.vue';

</script>

<template>
  <div class="body">

    <div class="section_banner">
      <img src="" alt="">
    </div>
    <div class="section_donate">
      <div class="donate_container">
        <h1 class="title">捐款內容</h1>
        <div class="title_line"></div>
      </div>
    </div>

    <div>
      <DonateContentCard />
    </div>

  </div>
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/donate";
</style>
