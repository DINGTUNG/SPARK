<script setup>
import { useDonateCartStore } from '@/stores/donate-cart.js';
const donateCartStore = useDonateCartStore();

</script>

<template>
  <div class="donate_content_card_list">
    <div class="donate_content_card" v-for="donateContentCard in donateCartStore.donateContentCardList" :key="donateContentCard.id">
      <div class="card_pic">
        <img :src="donateContentCard.imgSrc" :alt="donateContentCard.title">
      </div>
      <div class="card_content">
        <h3>{{ donateContentCard.title }}</h3>
        <p>{{ donateContentCard.content }}</p>
        <h4>{{ donateContentCard.fundSum }}</h4>
        
        <button @click="donateCartStore.showSideList(donateContentCard.id)" >加 入 清 單</button>
        <!-- 點擊button觸發程式並帶入donateContentCard.id -->
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
div.donate_content_card_list {
  display: flex;
  flex-wrap: wrap;

  @include custom-responsive("xs sm") {
    gap: 6vw 0;
  }

  @include custom-responsive("xl xxl") {
    justify-content: space-between;
    gap: 3.5vw 0;
  }

  div.donate_content_card {
    background-color: #fff;
    display: flex;
    flex-direction: column;

    @include custom-responsive("xs sm") {
      width: 100%;
      @include boxShadow_MB;
      border-radius: $br_MB;
    }

    @include custom-responsive("xl xxl") {
      width: 44%;
      @include boxShadow_PC;
      border-radius: $br_PC;

      &:hover img {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }

    div.card_pic {
      overflow: hidden;

      @include custom-responsive("xs sm") {
        border-radius: $br_MB $br_MB 0 0;
      }

      @include custom-responsive("xl xxl") {
        border-radius: $br_PC $br_PC 0 0;
      }

      img {
        width: 100%;
        transition: 0.4s;
      }
    }

    div.card_content {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      @include custom-responsive(" xs sm") {
        padding: 4vw 4.5vw;
      }

      @include custom-responsive(" xl xxl") {
        padding: 2vw 2.3vw;
      }

      h3 {
        color: $primaryBrandBlue;

        @include custom-responsive(" xs sm") {
          @include h3_MB;
          padding-bottom: 2vw;
        }

        @include custom-responsive(" xl xxl") {
          @include h3_PC;
          padding-bottom: 0.8vw;
        }
      }

      p {
        color: $basicFontColor;

        @include custom-responsive(" xs sm") {
          @include h6_MB;
          padding-bottom: 4vw;
        }

        @include custom-responsive(" xl xxl") {
          @include h6_PC;
          padding-bottom: 2vw;
        }
      }

      h4 {
        color: $secondaryLightBlue2;
        margin-top: auto;

        @include custom-responsive(" xs sm") {
          @include h4_MB;
          padding-bottom: 4vw;
        }

        @include custom-responsive(" xl xxl") {
          @include h4_PC;
          padding-bottom: 2vw;
        }
      }

      button {
        border: none;
        margin-left: auto;

        @include custom-responsive(" xs sm") {
          @include smallBlueBtn_MB;
        }

        @include custom-responsive(" xl xxl") {
          @include smallBlueBtn_PC;
        }
      }

    }

  }

}
</style>
