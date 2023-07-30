<script setup>
//【引入】
import { ref, watch, onMounted, onUnmounted} from 'vue';
import { RouterLink, useRoute, useRouter} from 'vue-router';

//【header logo change for PC & MB】
const imgSrc = ref('pictures/logo/logo_blue.svg') // Default
const currentRoute = useRoute()
//mediaQuery for PC & MB
const mediaQuery1200 = window.matchMedia('(max-width: 1200px)')
const mediaQuery1201to1399 = window.matchMedia('(min-width: 1201px) and (max-width: 1399px)')

const updateImageSource = (newRouteName) => {
  if (mediaQuery1200.matches) {
    imgSrc.value = 'pictures/logo/logo_white.svg'
  } else if (mediaQuery1201to1399.matches) {
    if (newRouteName === "home" || newRouteName === "about" || newRouteName === "service" || newRouteName === "work-result" || newRouteName === "service-milestone" || newRouteName === "sponsor-location" || newRouteName === "donate-list") {
      imgSrc.value = 'pictures/logo/logo_white_second.svg';
    } else {
      imgSrc.value = 'pictures/logo/logo_blue_second.svg';
    }
  } else {
    if (newRouteName === "home" || newRouteName === "about" || newRouteName === "service" || newRouteName === "work-result" || newRouteName === "service-milestone" || newRouteName === "sponsor-location" || newRouteName === "donate-list") {
      imgSrc.value = 'pictures/logo/logo_white.svg';
    } else {
      imgSrc.value = 'pictures/logo/logo_blue.svg';
    }
  }
}

watch(() => currentRoute.name, updateImageSource)

onMounted(() => {
  mediaQuery1200.addEventListener('change', () => updateImageSource(currentRoute.name))
  mediaQuery1201to1399.addEventListener('change', () => updateImageSource(currentRoute.name))
})

onUnmounted(() => {
  mediaQuery1200.removeEventListener('change', () => updateImageSource(currentRoute.name))
  mediaQuery1201to1399.removeEventListener('change', () => updateImageSource(currentRoute.name))
})

//【定義動態生成的導覽列菜單】
const menuItems = ref([
  {
    label: '認識星火',
    route: '/about',
    image: 'pictures/decorations/layout/little_star.png',
    active: false,
    clicked: false,
  },
  {
    label: '服務內容',
    route: '/service', 
    image: 'pictures/decorations/layout/little_star.png',
    active: false,
    clicked: false,
  },
  {
    label: '成果佈告欄',
    route: '/work-result',
    image: 'pictures/decorations/layout/little_star.png',
    active: false,
    clicked: false, 
    children: [ 
      { label: '故事藝廊', route: '/story-gallery' },
      { label: '歷年報告', route: '/result-report' },
      { label: '服務里程碑', route: '/service-milestone' },
    ],
  },
  {
    label: '認養計畫',
    route: '/sponsor',
    image: 'pictures/decorations/layout/little_star.png',
    active: false,
    clicked: false, 
    children: [ 
      { label: '我要認養', route: '/sponsor' },
      { label: '認養地區', route: '/sponsor-location' },
    ],
  },
  {
    label: '捐款專案',
    route: '/donate',
    image: 'pictures/decorations/layout/little_star.png',
    active: false,
    clicked: false, 
    children: [ 
      { label: '捐款內容', route: '/donate' },
      { label: '捐款善心榜', route: '/donate-list' },
    ],
  },
  {
    label: '星火之友',
    route: '/contact', 
    image: 'pictures/decorations/layout/little_star.png',
    active: false,
    clicked: false,
  },
  {
    label: '星火活動',
    route: '/spark-activity', 
    image: 'pictures/decorations/layout/little_star.png',
    active: false,
    clicked: false,
  },
  {
    label: '會員登入',
    route: '/login', 
  },
]);

//【小星星的@mouseenter & @mouseleave & @click 的設定】
const hoverItem = (item) => {
  if (!item.clicked) {
    item.active = true;
  }
};

const deactivateItem = (item) => {
  if (!item.clicked) {
    item.active = false;
  }
};

const activateItem = (item, index) => {
  menuItems.value.forEach((menuItem) => {
    menuItem.active = menuItem === item;
    menuItem.clicked = menuItem === item;
  });
  sessionStorage.setItem('activeItem', index);
};

onMounted(() => {
  const activeItem = sessionStorage.getItem('activeItem');
  if (activeItem !== null) {
    menuItems.value[activeItem].active = true;
    menuItems.value[activeItem].clicked = true;
  }
});

//【回上一頁時，圖檔依舊在此頁面的原位】
let route = useRoute();

watch(route, (newRoute) => {
  let activeItemIndex = menuItems.value.findIndex(item => 
    item.route === newRoute.path || (item.children && item.children.some(child => child.route === newRoute.path))
  );
  
  menuItems.value.forEach((item, index) => {
    if (index === activeItemIndex) {
      item.active = true;
      item.clicked = true;
    } else {
      item.active = false;
      item.clicked = false;
    }
  });

  if (activeItemIndex > -1) {
    sessionStorage.setItem('activeItem', activeItemIndex);
  } else {
    sessionStorage.removeItem('activeItem');
  }
});

//【hamburder 開關】
let navVisible = ref(false);

//【頁面跳轉時置頂】
const router = useRouter();

router.afterEach(() => {
  window.scrollTo(0, 0);
});
</script>



<template>
  <!-- 【header 桌機版】 -->
  <header class="header_PC">
    <!-- 【logo】 -->
    <RouterLink to="/home" class="link_home">
      <Images id="logo" :imgSrc="imgSrc" :alt="Sparklogo"/>
    </RouterLink>
    <!-- 【Navigation bar】 -->
    <nav>
      <ul>
        <!-- main menu -->
        <li v-for="(item, index) in menuItems" :key="index" class="menu_item" @mouseenter="hoverItem(item)" @mouseleave="deactivateItem(item)" @click="activateItem(item, index)">
          <RouterLink :to="item.route" :class="['link_main', { 'member_login': item.label === '會員登入' }]">{{ item.label }}</RouterLink>
          <img v-if="item.active" :src="item.image" class="menu_icon">
          <!-- submenu -->
          <ul v-if="item.children">
            <li v-for="(child, childIndex) in item.children" :key="childIndex" class="submenu_item">
              <RouterLink :to="child.route" class="link_child">{{ child.label }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>


  <!-- 【heder 手機版】 -->
  <header class="header_MB">
    <!-- 【logo】 -->
    <RouterLink to="/home" class="link_home">
      <Images id="logo" :imgSrc="imgSrc" :alt="Sparklogo"/>
    </RouterLink>
    <!-- hamburger -->
    <button class="nav_toggle"  @click="navVisible = !navVisible">  <!--turn on & turn off -->
      <span class="burger_icon" :class="{'toggle': navVisible}"></span>
      <span class="burger_icon" :class="{'toggle': navVisible}"></span>
      <span class="burger_icon" :class="{'toggle': navVisible}"></span>
    </button>
    <!-- main menu -->
    <nav v-show="navVisible"> <!-- click hamburger before show main menu -->
      <ul>
        <!-- main menu -->
        <li v-for="(item, index) in menuItems" :key="index" class="menu_item">
          <RouterLink :to="item.route" class="link link_main"  @click="navVisible = !navVisible">{{ item.label }}</RouterLink>
          <!-- submenu -->
          <ul v-if="item.children">
            <li v-for="(child, childIndex) in item.children" :key="childIndex" class="submenu_item">
              <RouterLink :to="child.route" class="link link_child" @click="navVisible = !navVisible">{{ child.label }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  <!-- blur_background -->
  <div :class="['blur_background', { 'show': navVisible }]"></div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/layout/header";


</style>





