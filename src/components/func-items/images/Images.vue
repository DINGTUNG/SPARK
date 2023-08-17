<script setup>
import { defineProps } from 'vue'
import { publicPath } from '@/plugins/dynamic-url.js'


const props = defineProps({
  class: String,
  imgSrc: String,
  alt: String
})
</script>

<template>
  <img :class="class" :src="`${publicPath}${imgSrc}`" :alt="alt" />
</template>