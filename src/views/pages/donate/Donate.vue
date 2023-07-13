<script setup>
import DonateContentCard from '@/components/donate/DonateContentCard.vue';

</script>

<template>
  <div class="body">

    <div class="section_banner">
      <img src="@/assets/images/donate/donate-content/banner.jpg" alt="">
    </div>
    <div class="section_donate">
      <div class="donate_content">
        <div class="title_wrap">
          <h1 class="title">捐款內容</h1>
          <div class="titleline"></div>
        </div>

        <DonateContentCard />

      </div>
    </div>



  </div>
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/donate";
</style>
