<script setup>
import { defineProps, onMounted } from 'vue'
import { publicPath, testPath } from '@/plugins/axios.js'

// const props = defineProps(['className', 'imgURL', 'alt'])

onMounted(() => {
  console.log("testPath", testPath);
})

const props = defineProps({
  class: String,
  imgSrc: String,
  alt: String
})
</script>

<template>
  <img :class="className" :src="`${publicPath}${imgURL}`" :alt="alt" />
</template>