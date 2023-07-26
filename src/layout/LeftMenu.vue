<script setup>
//引入
import { RouterLink, useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';

//左側導覽列的陣列高度
const menuHeight = computed(() => {
  let baseHeight = 214; // 初始高度
  let itemHeight = 62; // 每增加一個陣列的高度
  let totalHeight = baseHeight + bulletinList.value.length * itemHeight; // 總高度 = 初始高度 + 增加數個陣列的高度
  return totalHeight;
});

//追蹤其變化的包裝器
const menuTitle = ref(""); 
const bulletinList = ref([]);

// 取得當前路徑的資訊(src/router/index.js)
const currentRoute = useRoute(); 

// 監聽當前路徑的變化，更新各陣列的內容
watch(() => currentRoute.name, (newRouteName) => {
  if (newRouteName === "home") {
    menuTitle.value = "";
    bulletinList.value = [
      {
        id: 1,
        title: "",
        routeName: "",
      },
      {
        id: 2,
        title: "",
        routeName: "",
      },
      {
        id: 3,
        title: "",
        routeName: "",
      },
      {
        id: 4,
        title: "",
        routeName: "",
      },
    ];
  } else if (newRouteName === "about") {
    menuTitle.value = "認識星火";
    bulletinList.value = [
      {
        id: 1,
        title: "緣起",
        routeName: ""
      },
      {
        id: 2,
        title: "願景",
        routeName: "",
      },
      {
        id: 3,
        title: "服務據點",
        routeName: "",
      },
      {
        id: 4,
        title: "認養/捐款Q/A",
        routeName: "",
      },
    ];
  } else if (newRouteName === "story-gallery" || newRouteName === "rest" || newRouteName === "service-milestone") {
    menuTitle.value = "成果佈告欄";
    bulletinList.value = [
      {
        id: 1,
        title: "故事藝廊",
        routeName: "story-gallery",
      },
      {
        id: 2,
        title: "歷年報告",
        routeName: "result-report",
      },
      {
        id: 3,
        title: "服務里程碑",
        routeName: "service-milestone",
      },
    ];
  } else if (newRouteName === "sponsor" || newRouteName === "sponsor-location") {
    menuTitle.value = "認養計畫";
    bulletinList.value = [
      {
        id: 1,
        title: "我要認養",
        routeName: "sponsor",
      },
      {
        id: 2,
        title: "認養地區",
        routeName: "sponsor-location",
      },
    ];
  } else if (newRouteName === "donate" || newRouteName === "donate-list") {
    menuTitle.value = "捐款專案";
    bulletinList.value = [
      {
        id: 1,
        title: "捐款內容",
        routeName: "donate",
      },
      {
        id: 2,
        title: "捐款善心榜",
        routeName: "donate-list",
      },
    ];
  } else if (newRouteName === "letter-record" || newRouteName === "adoption-record" || newRouteName === "donate-record" || newRouteName === "modify-meminfo") {
    menuTitle.value = "會員中心";
    bulletinList.value = [
      {
        id: 1,
        title: "認養紀錄",
        routeName: "adoption-record",
      },
      {
        id: 2,
        title: "捐款紀錄",
        routeName: "donate-record",
      },
      {
        id: 3,
        title: "感謝函專區",
        routeName: "letter-record",
      },
      {
        id: 4,
        title: "修改基本資料",
        routeName: "modify-meminfo",
      },
    ];
  } 
}, { immediate: true }); //初始化的時候立即執行一次，而不是等到監聽的數據變化的時候再執行

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






















