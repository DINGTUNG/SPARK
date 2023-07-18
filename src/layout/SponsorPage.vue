<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    default: true,
  },
  sponsorLocationList: {
    type: Array,
    default: Array,
  },
  count: {
    type: Number,
    default: 0,
  }

});
const totalQuantity = computed(() => {
  return props.sponsorLocationList.reduce((totalQuantity, sponsorLocation) => totalQuantity + sponsorLocation.count, 0);
});

</script>
<template>
  <div class="sponsor_page" :class="{ active: sidebarOpen }">
    <div class="title">
      <h2>我要認養</h2>
      <i class="fa-regular fa-circle-xmark"></i>
    </div>
    <div class="area_card" v-for="sponsorLocation in sponsorLocationList" :key="sponsorLocation.index">
      <div class="sponsor_inner">
        <h5>{{ sponsorLocation.locationName }}</h5>
        <div class="card_count">
          <i class="fa-solid fa-minus" @click="minus(index)"></i>
          {{ sponsorLocation.count }}
          <i class="fa-solid fa-plus" @click="plus(index)"></i>
        </div>
        <h5>${{ 2000 * totalQuantity }}</h5>
      </div>
    </div>

    <div class="sponsor_total">
      <div class="total_price">
        <h5>認養費用</h5>
        <h5>${{ totalQuantity * 2000 }}</h5>
      </div>
      <div class="price_button">
        <a :href="''"><button>核對認養清單</button></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/layout/sponsor-page';
</style>
