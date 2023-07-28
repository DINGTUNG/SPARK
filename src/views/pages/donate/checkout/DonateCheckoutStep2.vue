<script setup>
import MemberDataTable from '@/components/func-items/table/MemberDataTable.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'
import DonateCheckoutCard from '@/components/func-items/cards/donate/DonateCheckoutCard.vue'


</script>

<template>
  <div class="donate_checkout_container">


    <div class="main_body">
      <div class="checkout_wrap">

        <div class="member_data_table">
          <MemberDataTable />
        </div>

        <div class="overview_wrap">
          <DonateCheckoutCard />
          <CheckoutButtons />
        </div>

      </div>

      <img :src="'pictures/characters/girl/girl_bubbling.svg'" alt="">

    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/donate/checkout/donate-checkout-step-2';
</style>
