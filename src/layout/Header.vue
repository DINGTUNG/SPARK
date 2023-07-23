<script setup>
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';

let isNavOpen = ref(false);
let isLargeScreen = ref(window.matchMedia("(min-width: 1200px)").matches);
let showWrapper = ref(false);

watchEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 1200px)");
  mediaQuery.addEventListener('change', () => {
    isLargeScreen.value = mediaQuery.matches;
    if (!isLargeScreen.value) {
      showWrapper.value = false;
    }
  });
  isLargeScreen.value = mediaQuery.matches;
});

const activeSubMenu = ref(null);
const activeImage = ref(null);

const menuItems = ref([
  {
    label: '認識星火',
    route: '/about',
    img: 'pictures/decorations/layout/little_star.png' 
  },
  {
    label: '服務內容',
    route: '/service',
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '成果佈告欄',
    route: '/story-gallery',
    submenu: [
      { label: '故事藝廊', route: '/story-gallery' },
      { label: '歷年報告', route: '/result-report' },
      { label: '服務里程碑', route: '/' }  //尚無連結
    ],
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '認養計畫',
    route: '/sponsor',
    submenu: [
      { label: '我要認養', route: '/sponsor-location' },
      { label: '認養地區', route: '/' } //尚無連結
    ],
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '捐款專案',
    route: '/donate',
    submenu: [
      { label: '捐款內容', route: '/donate' },
      { label: '捐款善心榜', route: '/donate-list' }
    ],
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '星火之友',
    route: '/contact',
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '星火計畫',
    route: '/spark-project',
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '會員登入',
    route: 'login',
  },
]);

const showSubMenu = (index) => {
  activeSubMenu.value = index;
};

const hideSubMenu = () => {
  activeSubMenu.value = null;
};

const showImage = (index) => {
  activeImage.value = index;
};

const hideImage = () => {
  activeImage.value = null;
};

const toggleNav = () => {
  if (!isLargeScreen.value) {
    isNavOpen.value = !isNavOpen.value;
    showWrapper.value = isNavOpen.value;
  }
};

const toggleSubMenu = (index) => {
  if (activeSubMenu.value === index) {
    activeSubMenu.value = null;
  } else {
    activeSubMenu.value = index;
  }
};

const closeNav = () => {
  if (isNavOpen.value && isLargeScreen.value) {
    isNavOpen.value = false;
    showWrapper.value = false;
  }
};
</script>


<template>
  <header>
    <RouterLink to="/" class="link_home">
      <img alt="Spark logo" class="logo" :src="'pictures/logo/logo_white.svg'" />
    </RouterLink>

    <button class="nav_toggle" v-if="!isLargeScreen" @click="toggleNav" v-bind:class="{ open: isNavOpen }">
      <span class="burger_icon"></span>
      <span class="burger_icon"></span>
      <span class="burger_icon"></span>
    </button>

    <div class="wrapper" v-show="isLargeScreen || showWrapper">
      <nav>
        <ul>
          <li v-for="(item, index) in menuItems" :key="index">
            <template v-if="item.submenu && !isLargeScreen">
              <a
                class="link"
                @click="toggleSubMenu(index)"
                :class="{ 'active': activeSubMenu === index }"
              >
                {{ item.label }}
                <span class="submenu_icon"></span>
              </a>
              <ul v-show="activeSubMenu === index">
                <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                  <RouterLink :to="subItem.route" class="link">{{ subItem.label }}</RouterLink>
                </li>
              </ul>
            </template>
            <template v-else>
              <RouterLink
                v-if="item.route"
                :to="item.route"
                :class="['link', { 'member_login': item.label === '會員登入' }]"
                @mouseover="item.label !== '會員登入' ? showSubMenu(index) : null"
                @mouseleave="item.label !== '會員登入' ? hideSubMenu() : null"
              >
                {{ item.label }}
              </RouterLink>
              <a
                v-else
                :href="item.route"
                class="link"
                @mouseover="showSubMenu(index)"
                @mouseleave="hideSubMenu"
              >
                {{ item.label }}
              </a>
              <img
                v-if="(isLargeScreen && (activeImage === index || activeSubMenu === index)) || (!isLargeScreen && activeImage === index)"
                :src="item.img"
                alt="Image"
                class="hover_image"
                style="position: absolute; left: -5px; top: 50%; transform: translateY(-50%);"
              />
              <ul
                v-if="item.submenu"
                class="submenu"
                :class="{ 'active': activeSubMenu === index }"
                @mouseover="showImage(index)"
                @mouseleave="hideImage"
              >
                <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                  <RouterLink :to="subItem.route" class="link">{{ subItem.label }}</RouterLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div :class="['blur-background', { 'show': isNavOpen }]"></div>
</template>



<style scoped lang="scss">
@import "@/assets/sass/layout/header";

@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>




