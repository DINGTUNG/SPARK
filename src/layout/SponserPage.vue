<script setup>
import { defineProps,computed } from 'vue';
const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    default: false,
  },
  area:{
    type:Array,
    default: [],
  },
  count:{
    type:Number,
    default:0,
  }

});
const totalQuantity = computed(() => {
  return props.area.reduce((total, item) => total + item.count, 0);
});

</script>
<template>
  <div class="SponserPage" :class="{ active: sidebarOpen }">
    <div class="title">
      <h2>我要認養</h2>
      <i class="fa-regular fa-circle-xmark"></i>
    </div>
    <div class="area_card" v-for="(item, index) in area" :key="index">
      <div class="sponser_inner">
      <h5>{{ item.area }}</h5>
      <div class="card_count">
        <i class="fa-solid fa-minus" @click="minus(index)"></i>
        {{ count }}
        <i class="fa-solid fa-plus" @click="plus(index)"></i>
      </div>
      <h5>${{ 2000 * totalQuantity }}</h5>
    </div>
    </div>

    <div class="sponser_total">
      <div class="tatol_price">
        <h5>認養費用</h5>
        <h5>${{ 2000 * totalQuantity }}</h5>
      </div>
      <div class="price_button">
        <a :href="''"><button>核對認養清單</button></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/layout/_sponserpage';
</style>
