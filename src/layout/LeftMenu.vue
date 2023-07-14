<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed, defineProps} from 'vue'; 

// const menuTitle = ref("成果佈告欄");
// const bulletinList = ref([
//   {
//     id: 1,
//     title: "故事藝廊",
//     link: "/"
//   },
//   {
//     id: 2,
//     title: "歷年報告",
//     link: "/"
//   },
//   {
//     id: 3,
//     title: "服務里程碑",
//     link: "/"
//   },
// ]);


const props = defineProps({
  page: {
    type: String,
    default: "home",
  },
});

const menuTitle = ref("");
const bulletinList = ref([]);

if (props.page === "home") {
  menuTitle.value = "成果佈告欄";
  bulletinList.value = [
    {
      id: 1,
      title: "故事藝廊",
      link: "/",
    },
    {
      id: 2,
      title: "歷年報告",
      link: "/",
    },
    {
      id: 3,
      title: "服務里程碑",
      link: "/",
    },
  ];
} else if (props.page === "about") {
  menuTitle.value = "關於我們";
  bulletinList.value = [
    {
      id: 1,
      title: "公司簡介",
      link: "/",
    },
    {
      id: 2,
      title: "團隊成員",
      link: "/",
    },
    {
      id: 3,
      title: "使命與價值觀",
      link: "/",
    },
  ];
} else if (props.page === "contact") {
  menuTitle.value = "聯絡我們";
  bulletinList.value = [
    {
      id: 1,
      title: "聯絡方式",
      link: "/",
    },
    {
      id: 2,
      title: "地理位置",
      link: "/",
    },
  ];
}

const menuHeight = computed(() => {
  // 初始高度
  let baseHeight = 214;
  // 每增加一個陣列的高度
  let itemHeight = 62;
  // 總高度 = 初始高度 + 增加數個陣列的高度
  let totalHeight = baseHeight + bulletinList.value.length * itemHeight;
  return totalHeight;
});
</script>

<template>
  <div class="left_menu" :style="{ height: menuHeight + 'px' }">
    <h2>{{ menuTitle }}</h2>
    <ul>
      <li v-for="item in bulletinList" :key="item.id">
        <RouterLink :to="item.link" class="link"><h3>{{ item.title }}</h3></RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/layout/_left-menu.scss'
</style>



