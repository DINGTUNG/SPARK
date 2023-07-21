<script setup>
import SponsorCheckoutSideList from '@/layout/checkout-side-list/SponsorCheckoutSideList.vue';

import { useSponsorCartStore } from '@/stores/sponsor-cart.js';

const sponsorCartStore = useSponsorCartStore();

const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div class="rightMenu">
    <ul>
        <li>
          <RouterLink to="/sponsor" class="link sponsor">
            <div class="icon"><img :src="'pictures/icons/right-menu/sponsor_icon.png'" alt="領養icon"></div>
            我要認養</RouterLink>
        </li>
        <li @click="sponsorCartStore.showSideList">
                <div class="icon"><img :src="'pictures/icons/right-menu/sponsor_list_icon.png'" alt="領養清單icon"></div>
                認養清單
        </li>
        <li>
            <div class="icon"><img :src="'pictures/icons/right-menu/donate_icon.png'" alt="捐款icon"></div>
                我要捐款
        </li>
        <li>
                <div class="icon">
                    <img :src="'pictures/icons/right-menu/donate_list_icon.png'
                    " alt="捐款清單icon">
                </div>
                捐款清單
        </li>
    </ul>
    <div class="other">
        <div class="icon"><img :src="'pictures/icons/right-menu/letter.png'" alt="感謝信"></div>
        <div class="icon"><img :src="'pictures/icons/right-menu/message.png'" alt="message"></div>
        <div class="icon"><button id="top" @click="top"><img :src="'pictures/icons/right-menu/TOP_icon.png'" alt="TOP"></button></div>
    </div>
  </div>
  <div class="rightMenu_MB">
    <ul>
        <ul>
            <li>
                <RouterLink to="/sponsor" class="link sponsor">
                我要<br>認養
                </RouterLink>
            </li>
            <li @click="sponsorCartStore.showSideList">
                 認養<br>清單
            </li>
        </ul>

        <ul>
            <li>
                我要<br>捐款
            </li>
            <li>
                捐款<br>清單
            </li>
        </ul>
    </ul>
        <button id="top" @click="top">
            <img :src="'pictures/icons/right-menu/TOP_icon.png'" alt="TOP">
        </button>
  </div>
  <SponsorCheckoutSideList />
</template>

<style scoped lang="scss">
    @import '@/assets/sass/layout/right-menu';
</style>
