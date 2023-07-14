<script setup>
const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div class="rightMenu">
    <ul>
        <li>
          <RouterLink to="/sponsor" class="link sponsor">
            <div class="icon"><img :src="'assets/icons/right-menu/sponsor_icon.png'" alt="領養icon"></div>
            我要認養</RouterLink>
        </li>
        <li>
            <a href="">
                <div class="icon"><img :src="'assets/icons/right-menu/sponsor_list_icon.png'" alt="領養清單icon"></div>
                認養清單
            </a>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <img :src="'assets/icons/right-menu/donate_icon.png'" alt="捐款icon">
                </div>
                    我要捐款
                
            </a>
        </li>
        <li>
            <a href="">
                <div class="icon">
                    <img :src="'assets/icons/right-menu/donate_list_icon.png'
                    " alt="捐款清單icon">
                </div>
                捐款清單
            </a>
        </li>
    </ul>
    <div class="other">
        <div class="icon"><img :src="'assets/icons/right-menu/letter.png'" alt="感謝信"></div>
        <div class="icon"><img :src="'assets/icons/right-menu/message.png'" alt="message"></div>
        <div class="icon"><button id="top" @click="top"><img :src="'assets/icons/right-menu/TOP_icon.png'" alt="TOP"></button></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    @import '@/assets/sass/layout/right-menu';
</style>
