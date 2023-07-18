<script setup>

</script>

<template>
  <div class="SponserPage">
    <div class="title">
      <h2>我要認養</h2>
      <span>x</span>
    </div>
    <div class="sponser_inner">
      <h5>台南市</h5>
      <div class="card_count">
        <span @click="minus(index)">-</span>
        <p>1</p>
        <span @click="plus(index)">+</span>
      </div>
      <h5>$2000</h5>
    </div>
    <div class="sponser_total">
      <div class="tatol_price">
        <h5>認養費用</h5>
        <h5>$2000</h5>
      </div>
      <div class="price_button">
        <button>核對認養清單</button>
      </div>
     
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/layout/_sponserpage'
</style>
