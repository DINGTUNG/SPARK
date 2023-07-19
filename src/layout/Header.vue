<script setup>
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';

let isNavOpen = ref(false);
let isLargeScreen = ref(window.matchMedia("(min-width: 1400px)").matches);
let showWrapper = ref(false);

watchEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 1400px)");
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
    submenu: [
      { label: '緣起', route: '/service' },
      { label: '願景', route: '/about/mission' },
      { label: '服務據點', route: '/about/history' },
      { label: '認養/捐款Q&A', route: '/about/history' }
    ],
    img: 'pictures/decorations/layout/little_star.png' 
  },
  {
    label: '服務內容',
    route: '/service',
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '成果佈告欄',
    submenu: [
      { label: '故事藝廊', route: '/single-news' },
      { label: '歷年報告', route: '/service/service2' },
      { label: '服務里程碑', route: '/service/service2' }
    ],
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '認養計畫',
    submenu: [
      { label: '我要認養', route: '/single-news' },
      { label: '認養地區', route: '/service/service2' }
    ],
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '捐款專案',
    submenu: [
      { label: '捐款內容', route: '/single-news' },
      { label: '捐款善心榜', route: '/service/service2' }
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
    route: '/service',
    img: 'pictures/decorations/layout/little_star.png'
  },
  {
    label: '會員登入',
    route: '/service',
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









<!-- 55555 wwwwwwwwwwwwwwwww-->

<template>
  <header>
    <RouterLink to="/" class="link_home">
      <img alt="Spark logo" class="logo" :src="'pictures/logo/logo_white.svg'" />
    </RouterLink>

    <button class="nav-toggle" v-if="!isLargeScreen" @click="toggleNav">
      <span class="burger-icon"></span>
      <span class="burger-icon"></span>
      <span class="burger-icon"></span>
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
                <span class="submenu-icon"></span>
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
                class="hover-image"
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











<!-- <div class="menu-toggle" @click="toggleMenu">&#9776;</div> -->




