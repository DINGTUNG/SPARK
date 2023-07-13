<script setup>
const top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div class="rightMenu">
    <ul>
        <li>
            <img src="@/assets/icons/right-menu/sponsor_icon.png" alt="領養icon">
            我要認養
        </li>
        <li>
            <img src="@/assets/icons/right-menu/sponsor_list_icon.png" alt="領養清單icon">
            認養清單
        </li>
        <li>
            <img src="@/assets/icons/right-menu/donate_icon.png" alt="捐款icon">
            我要捐款
        </li>
        <li>
            <img src="@/assets/icons/right-menu/donate_list_icon.png
            " alt="捐款清單icon">
            捐款清單
        </li>
    </ul>
    <div class="other">
        <img src="@/assets/icons/right-menu/letter.png" alt="感謝信">
        <img src="@/assets/icons/right-menu/message.png" alt="message">
        <button id="top" @click="top"><img src="@/assets/icons/right-menu/TOP_icon.png" alt="TOP"></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/base/color';
@import '@/assets/sass/base/fonts/fonts-mixin';
@import '@/assets/sass/base/border-radius';

    .rightMenu{
        position: fixed;
        right: 0;
        top: 55%;
        transform: translateY(-50%);
        ul{
            width: 110px;
            height: 440px;
            background-color: $secondaryLightBlue3;
            list-style: none;
            color: #fff;
            border-radius: $smallBtnBr 0  0 $smallBtnBr;
            @include h6_PC;
            cursor: pointer;
            li{
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 10px;
                height: 110px;
                img{
                    width: 72px;
                    &:hover{
                        scale: 1.1;
                    }
                }
            }
        }
        .other{
            display: flex;
            flex-direction: column;
            width: 110px;
            margin: auto;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            #top{
                background: none;
                border: none;
                cursor: pointer;
            }
        }
    }
</style>
