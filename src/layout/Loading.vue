<template>
  <div class="loading">

    <div class="animation_wrap">
      <img class="logo" :src="'pictures/logo/logo_blue.svg'" alt="">
      <img class="animate__animated animate__bounceIn animate__infinite star" :src="'pictures/characters/star/star_superman.svg'" alt="">
      <p class="animate__animated animate__lightSpeedInLeft">即將抵達星火總部</p>

    </div>

  </div>
</template>


<style lang="scss">
div.loading {
  background-image: url('/pictures/background/loading_bg.svg');
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 999;
  @include flex_hm;

  div.animation_wrap {
    width: 30vw;
    height: 30vw;
    position: absolute;
    top: 15vh;
    @include flex_vm;
    gap: 10vh;

    img.logo{
      width: 30vw;

    }

    img.star {
      width: 8vw;
      --animate-duration: 3s;
    }

    p {
      color: $primaryBrandBlue;
      font-weight: bold;
      font-size: 2vw;
      --animate-duration: 1.5s;
    }
  }

}

</style>

