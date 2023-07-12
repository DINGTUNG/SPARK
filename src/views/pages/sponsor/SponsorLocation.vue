<script setup>
import { reactive, ref, computed } from 'vue';
const location = reactive([
    {
        area:'北區',
        name:'基隆',
        people:'2,167'
    },
    {
        area:'北區',
        name:'台北',
        people:'1,844'
    },
    {
        area:'北區',
        name:'新北',
        people:'3,112'
    },
    {
        area:'北區',
        name:'桃園',
        people:'2,675'
    },
    {
        area:'北區',
        name:'新竹',
        people:'1,755'
    },
    {
        area:'中區',
        name:'苗栗',
        people:'1,657'
    },
    {
        area:'中區',
        name:'台中',
        people:'2,675'
    },
    {
        area:'中區',
        name:'彰化',
        people:'1,907'
    },
    {
        area:'中區',
        name:'南投',
        people:'1,677'
    },
    {
        area:'中區',
        name:'雲林',
        people:'1,300'
    },
    {
        area:'中區',
        name:'嘉義',
        people:'2,437'
    },
    {
        area:'南區',
        name:'台南',
        people:'1,543'
    },
    {
        area:'南區',
        name:'高雄',
        people:'1,377'
    },
    {
        area:'南區',
        name:'屏東',
        people:'1,722'
    },
    {
        area:'東區',
        name:'宜蘭',
        people:'1,244'
    },
    {
        area:'東區',
        name:'花蓮',
        people:'1,763'
    },
    {
        area:'東區',
        name:'台東',
        people:'1,763'
    },
])

</script>

<template>
    <section class="location">
        <div class="card" v-for="(item, key) in location" :key="key">
            <div class="tag">{{item.area}}</div>
            <div class="name">{{ item.name }}</div>
            <div class="people">{{ item.people }}</div>
        </div>
    </section>
</template>



<style scoped lang="scss">
</style>
