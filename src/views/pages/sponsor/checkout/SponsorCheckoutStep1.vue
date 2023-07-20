<script setup>
import SponsorCheckoutTable from '@/components/func-items/table/SponsorCheckoutTable.vue'
import SponsorCheckoutCard from '@/components/func-items/cards/SponsorCheckoutCard.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'



</script>

<template>
  <div class="sponsor_checkout_container">
    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 20" :key="n">

    <div class="main_body">
      <div class="checkout_wrap">

        <div class="checkout_table_wrap">
          <SponsorCheckoutTable />
        </div>


        <div class="checkout_overview_wrap">
          <SponsorCheckoutCard />
          <CheckoutButtons />
        </div>
      </div>

      <img :src="'pictures/decorations/illustration/rocket_with_gold_fire.svg'"  :class="filter-gold" alt="">

    </div>


  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/sponsor/checkout/sponsor-checkout-step-1';
</style>
