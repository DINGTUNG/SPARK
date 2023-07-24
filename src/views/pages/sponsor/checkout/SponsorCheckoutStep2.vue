<script setup>
import SponsorCheckoutCard from '@/components/func-items/cards/sponsor/SponsorCheckoutCard.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'
import PaymentPlan from '@/components/checkout/PaymentPlan.vue'
import PaymentMethod from '@/components/checkout/PaymentMethod.vue'



</script>

<template>
  <div class="sponsor_checkout_container">
    <!-- 撐開頁面之臨時空間 -->
    <br v-for="n in 20" :key="n">

    <div class="main_body">
      <div class="checkout_wrap">

        <div class="payment_wrap">

          <div class="payment_plan">
            <PaymentPlan />
          </div>

          <div class="payment_method">
            <PaymentMethod />
          </div>

        </div>

        <div class="overview_wrap">
          <SponsorCheckoutCard />
          <CheckoutButtons />
        </div>

      </div>

      <img :src="'pictures/decorations/illustration/rocket_with_gold_fire.svg'"  alt="">

    </div>


  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/sponsor/checkout/sponsor-checkout-step-2';


</style>
