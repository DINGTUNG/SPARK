<!-- <script setup>
import { ref } from 'vue';

const openedEnvelope = ref(false);
const showEnvelope = ref(true);
const envoyAnimation = ref(false);
const clueAnimation = ref(false);
const aiAnimation = ref(false);
const clueAccount = ref('');
const envoyAccount = ref('');
const aiAccount = ref('');

const openEnvelope = () => {
  openedEnvelope.value = true;
};

const addAnimation = (type) => {
  eval(`${type}Animation.value = true`);
  setTimeout(() => {
    eval(`${type}Animation.value = false`);
  }, 1500);

  setTimeout(() => {
    window.open('https://www.didiyun.com', '_blank');
  }, 3000);
};
</script>



<template>
    <div class="shadow" v-if="showEnvelope" @click.self="showEnvelope = false">
        <div class="envelop" :class="{'open': openedEnvelope}">
            <div class="top">
            <div class="invitation"></div>
            </div>
            <div class="front"></div>
            <div class="paper">
                <div class="head-left">
                <p class="title">尊敬的 guguji5 ，</p>
                <p class="time">今天是您成为滴滴云用户的 <span class="hot">200</span> 天，感恩！</p>
                <p class="desc">为答谢您一直以来的厚爱，我们诚挚的邀请您加入“<span class="hot">推广返利计划</span>”，期望您在享受滴滴云优质服务的同时，也将他们推广给更多有需要的企业和朋友们。同时，会将推广获得收益返利给长久以来一直支持我们的您。</p>
                <p class="desc">此致，敬礼</p>
                </div>
            </div>
        </div>
    </div>


    <div>
      <button v-if="showEnvelope" @click="openEnvelope">Open Envelope</button>
  
      <div v-if="openedEnvelope">
        <div v-if="!envoyAnimation" class="envoy">Envoy Account: {{ envoyAccount }}</div>
        <div v-if="!clueAnimation" class="clue">Clue Account: {{ clueAccount }}</div>
        <div v-if="!aiAnimation" class="ai">AI Account: {{ aiAccount }}</div>
      </div>
    </div>
  </template> -->

  
  <script lang="ts" setup>
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script>


<template>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <h1>hellllllo</h1>
    <h2>hellllllo</h2>
  </template>
  
  <style scoped lang="scss">
@import "@/assets/sass/pages/home/letter";
</style>