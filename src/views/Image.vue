<script setup>
    import { publicPath } from 'axios'
    const props = defineProps(['className', 'imgURL', 'alt' ])
</script>

<template>
    <img 
        :class="className" 
        :src="`${publicPath}${imgURL}`"
        :alt="alt"
    />
</template>