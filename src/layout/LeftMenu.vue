<script setup>

import { RouterLink, useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';

const menuTitle = ref("");
const bulletinList = ref([]);

const menuHeight = computed(() => {
  let baseHeight = 214; // 初始高度
  let itemHeight = 62; // 每增加一個陣列的高度
  let totalHeight = baseHeight + bulletinList.value.length * itemHeight; // 總高度 = 初始高度 + 增加數個陣列的高度
  return totalHeight;
});

const currentRoute = useRoute(); // 取得當前路徑的資訊(src/router/index.js)

// 監聽當前路徑的變化，更新各陣列的內容
watch(() => currentRoute.name, (newRouteName) => {
  if (newRouteName === "home") {
    menuTitle.value = "服務里程碑";
    bulletinList.value = [
      {
        id: 1,
        title: "認養地區",
        routeName: "",
      },
      {
        id: 2,
        title: "捐款善心榜",
        routeName: "",
      },
      {
        id: 3,
        title: "捐款善心榜",
        routeName: "",
      },
      {
        id: 4,
        title: "捐款善心榜",
        routeName: "",
      },
    ];
  } else if (newRouteName === "sponsor") {
    menuTitle.value = "認養計畫";
    bulletinList.value = [
      {
        id: 1,
        title: "認養地區",
        routeName: ""
      },
      {
        id: 2,
        title: "我要認養",
        routeName: "",
      },
    ];
  } else if (newRouteName === "sponsor-location") {
    menuTitle.value = "認養計畫";
    bulletinList.value = [
      {
        id: 1,
        title: "認養地區",
        routeName: ""
      },
      {
        id: 2,
        title: "我要認養",
        routeName: "",
      },
    ];
  } else if (newRouteName === "donate") {
    menuTitle.value = "捐款專案";
    bulletinList.value = [
      {
        id: 1,
        title: "捐款內容",
        routeName: ""
      },
      {
        id: 2,
        title: "捐款善心榜",
        routeName: "",
      },
    ];
  }
});

</script>

<template>
  <div class="left_menu_container" :style="{ height: menuHeight + 'px' }">
    <h3>{{ menuTitle }}</h3>
    <ul>
      <li v-for="item in bulletinList" :key="item.id">
        <RouterLink :to="{ name: item.routeName }" class="link">
          <h4>{{ item.title }}</h4>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/sass/layout/_left-menu.scss'
</style>






















