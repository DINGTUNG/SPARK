<script setup>
import { RouterView, useRoute } from 'vue-router'
import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';
import LeftMenu from '@/layout/LeftMenu.vue';
import RightMenu from '@/layout/RightMenu.vue';

const route = useRoute();
</script>

<template>
  <Header v-if="!route.meta.hideHeader" />
  <RightMenu v-if="!route.meta.hideRightMenu"/>
  <LeftMenu v-if="!route.meta.hideLeftMenu"/>
  <RouterView />
  <Footer v-if="!route.meta.hideFooter" />
</template>

<style lang="scss"></style>
