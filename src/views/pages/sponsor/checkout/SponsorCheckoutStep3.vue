<script setup>
import MemberDataTable from '@/components/func-items/table/MemberDataTable.vue'
import SponsorCheckoutCard from '@/components/func-items/cards/sponsor/SponsorCheckoutCard.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'



</script>

<template>
  <div class="sponsor_checkout_container">


    <div class="main_body">
      <div class="checkout_wrap">

        <div class="member_data_table">
          <MemberDataTable />
        </div>

        <div class="overview_wrap">
          <SponsorCheckoutCard />
          <CheckoutButtons />
        </div>

      </div>

      <img :src="'pictures/characters/girl/girl_bubbling.svg'" alt="">

    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/sponsor/checkout/sponsor-checkout-step-3';
</style>
