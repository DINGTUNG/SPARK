<script setup>
import { defineProps } from 'vue'
import { publicPath } from '@/plugins/dynamic-url.js'

// const props = defineProps(['className', 'imgURL', 'alt'])

// onMounted(() => {
//   console.log("testPath", testPath);
// })

const props = defineProps({
  class: String,
  imgSrc: String,
  alt: String
})
</script>

<template>
  <img :class="className" :src="`${publicPath}${imgSrc}`" :alt="alt" />
</template>