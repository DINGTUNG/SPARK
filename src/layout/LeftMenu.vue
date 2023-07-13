<script setup>
import { RouterLink,RouterView } from 'vue-router';
import { ref, computed} from 'vue';

const menuTitle = ref("成果佈告欄");
const bulletinList = ref([
  {
    id: 1,
    title: "故事藝廊",
    link: "/"
  },
  {
    id: 2,
    title: "歷年報告",
    link: "/"
  },
  {
    id: 3,
    title: "服務里程碑",
    link: "/"
  },
]);

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
        <RouterLink :to="item.link" class="link">
          <h3>{{ item.title }}</h3>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/layout/_left-menu.scss'
</style>



