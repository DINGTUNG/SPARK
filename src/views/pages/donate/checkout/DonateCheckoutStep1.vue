<script setup>
import DonateCheckoutTable from '@/components/func-items/table/donate/DonateCheckoutTable.vue'
import DonateCheckoutCard from '@/components/func-items/cards/donate/DonateCheckoutCard.vue'
import CheckoutButtons from '@/components/func-items/buttons/CheckoutButtons.vue'
import PaymentMethod from '@/components/checkout/PaymentMethod.vue'

</script>

<template>
  <div class="sponsor_checkout_container">

    <div class="main_body">
      <div class="checkout_wrap">

        <div class="checkout_table_wrap">
          <div class="donate_checkout_table">
            <DonateCheckoutTable />
          </div>

          <div class="payment_method">
            <PaymentMethod />
          </div>
        </div>

        <div class="checkout_overview_wrap">
          <DonateCheckoutCard />
          <CheckoutButtons />
        </div>
      </div>

      <img :src="'pictures/decorations/illustration/rocket_with_gold_fire.svg'" alt="">

    </div>


  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/donate/checkout/donate-checkout-step-1';

div.checkout_wrap {



  div.checkout_overview_wrap {
    @include flex_vm;
    gap: 40px;
  }

}
</style>
