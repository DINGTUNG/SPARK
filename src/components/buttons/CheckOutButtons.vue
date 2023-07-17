<script setup>
import { RouterLink } from 'vue-router';
import {reactive } from 'vue';

const stepRouterLink = reactive(
  [
    "donate-checkout-step-1",


  ]
)

// const currentRoute = useRoute();
// console.log(currentRoute.name);



</script>

<template>
  <div class="check_out_buttons_container">

    <RouterLink :to="{ name: stepRouterLink.routeName }" class="link"><button class="prev">上一步</button></RouterLink>
    <RouterLink :to="{ name: stepRouterLink.routeName }"><button class="next">下一步</button></RouterLink>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/components/func-items/buttons/checkout-buttons';
</style>
