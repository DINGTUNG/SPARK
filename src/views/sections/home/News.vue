<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router'

const newsContentCardList = reactive([
  {
    imgSrc: "pictures/images/home/news/news_1.jpg",
    date: "2023.08.20",
    title: "星火30，感謝有您",
    content: "星火兒童認養協會已經在台默默耕耘30年~一路走來感謝大家對星火的肯定與支持，30年前從零到有，星火感謝各界人士的鼎力相助，願我們能一同往前，迎接更美好的明天。",
  },
  {
    imgSrc: "pictures/images/home/news/news_2.jpg",
    date: "2023.08.04",
    title: "東部星火服務據點設立",
    content: "偏鄉服務不落後!!東部星火據點全新設立，為照顧偏遠地區弱勢兒童，星火協會召集各方善心人士相助，一同於東部創辦中心，提供服務。",
  },
  {
    imgSrc: "pictures/images/home/news/news_3.jpg",
    date: "2023.07.13",
    title: "暑假兒童營養午餐提供",
    content: "星火兒童認養協會已經在台默默耕耘30年~一路走來感謝大家對星火的肯定與支持，30年前從零到有，星火感謝各界人士的鼎力相助，願我們能一同往前，迎接更美好的明天。",
  },
  {
    imgSrc: "pictures/images/home/news/news_4.jpg",
    date: "2023.06.30",
    title: "小心詐騙，拒絕詐騙",
    content: "近日詐騙集團猖獗，多利用各式通訊軟體或是社群媒體作為管道進行詐騙，是最為常見的手法，本會提醒各位多多注意。",
  },
  {
    imgSrc: "pictures/images/home/news/news_5.jpg",
    date: "2023.06.02",
    title: "溫馨故事｜我推的孩子",
    content: "每一個在星火會員幫助之下的孩子，都將是未來閃耀的一顆晨星，即使相隔數百公里，但是藉由書信往返的真摯關懷總能傳遞滿滿的溫暖。",
  },
  {
    imgSrc: "pictures/images/home/news/news_6.jpg",
    date: "2023.04.27",
    title: "溫馨故事｜久久的奇妙冒險",
    content: "曾經的久久因為家境問題而長期接受協會認養人的每月認養，如今的久久已經是一名優秀的冒險家，為了感謝認養人，久久決定不當人類了",
  },
])


</script>

<template>
  <div class="news_title">
    <img :src="'pictures/decorations/illustration/orange_asterisk_single_2.svg'" alt="news_asterisk">
    <h2>最新消息</h2>
  </div>
  <div class="news_content_card_list">

    <div class="news_content_card" v-for="newsContentCard in newsContentCardList" :key="newsContentCardList.id">

      <RouterLink to="/single-news" class="news_card_link">
        <div class="card_pic">
          <img :src="newsContentCard.imgSrc" :alt="newsContentCard.title">
          <img :src="'pictures/characters/boy/boy_lighting_up_white.svg'" alt="card_hover_pic" class="card_hover_pic">
        </div>
        <div class="card_content">
          <h5>{{ newsContentCard.date }}</h5>
          <h4>{{ newsContentCard.title }}</h4>
          <p>{{ newsContentCard.content }}</p>
        </div>
      </RouterLink>

    </div>
  </div>
</template>


<style scoped lang="scss">
* {
  font-family: 'Lato', 'Noto Sans TC';
}

.news_title {
  display: flex;
  align-items: center;

  @include custom-responsive("xs sm") {
    padding: 0 0 6%;
  }

  @include custom-responsive("md lg xl 2l") {
    padding: 0 0 4%;
  }

  img {
    @include custom-responsive("xs") {
      width: 6%;
      padding: 0 4% 0 0;
    }

    @include custom-responsive("sm md lg xl 2l") {
      width: 2.5%;
      padding: 0 1.5% 0 0;
    }
  }

  h2 {
    color: $primaryBrandBlue;
  }
}

div.news_content_card_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @include custom-responsive("xs sm") {
    gap: 7vw 0;
  }

  @include custom-responsive("md lg xl 2l") {
    justify-content: space-between;
    gap: 3.5vw 0;
  }

  div.news_content_card {
    background-color: #fff;

    @include custom-responsive("xs sm") {
      width: 100%;
      @include boxShadow_MB;
      border-radius: $br_MB;
    }

    @include custom-responsive("md lg xl") {
      width: 45%;
    }

    @include custom-responsive("2l") {
      width: 30%;
      @include boxShadow_PC;
      border-radius: $br_PC;
    }

    .news_card_link {
      display: flex;
      flex-direction: column;
      text-decoration: none;

      @include custom-responsive("xs sm md lg") {
        border-radius: $br_MB $br_MB 0 0;
      }

      @include custom-responsive("xl 2l") {
        border-radius: $br_PC $br_PC 0 0;
      }

      .card_pic {
        width: 100%;
        overflow: hidden;
        position: relative;

        @include custom-responsive("xs sm md lg") {
          border-radius: $br_MB $br_MB 0 0;
        }

        @include custom-responsive("xl 2l") {
          border-radius: $br_PC $br_PC 0 0;
        }

        img {
          width: 100%;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: $primaryBrandBlue;
          opacity: 0;
          transition: .2s;
        }

        &::after {
          content: "READ NEWS";
          position: absolute;
          left: 50%;
          top: -15%;
          transform: translate(-50%, -50%);
          letter-spacing: 0.4rem;
          color: #fff;
          transition: .2s;
        }

        .card_hover_pic {
          width: 66%;
          position: absolute;
          top: 40%;
          left: 100%;
          transform-origin: bottom left;
          transition: .2s;
        }
      }

      .card_content {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        // flex-grow: 1;
        @include custom-responsive("xs sm") {
          padding: 5vw 5vw 6vw;
        }

        @include custom-responsive("md lg") {
          padding: 2.5vw 2.2vw 2.5vw;
        }

        @include custom-responsive(" xl 2l") {
          padding: 1vw 1.8vw 1.6vw;
        }

        h5 {
          color: $functionalLightGrey4;

          @include custom-responsive("xs sm") {
            padding-bottom: 1.8vw;
          }

          @include custom-responsive("md lg") {
            padding-bottom: 1.2vw;
          }

          @include custom-responsive("xl 2l") {
            padding-bottom: 0.1vw;
          }
        }

        h4 {
          color: $primaryBrandBlue;

          @include custom-responsive("xs sm") {
            @include h4_B_MB;
            padding-bottom: 1.8vw;
          }

          @include custom-responsive("md lg") {
            @include h4_B_MB;
            padding-bottom: 1.2vw;
          }

          @include custom-responsive("xl 2l") {
            @include h4_B_PC;
            padding-bottom: 0.4vw;
          }
        }

        p {
          color: $basicFontColor;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;

          @include custom-responsive("xs sm md lg") {
            @include h6_MB;
          }

          @include custom-responsive("xl 2l") {
            @include h6_PC;
          }
        }
      }
    }

    &:hover .card_pic::before {
      opacity: 0.7;
    }

    &:hover .card_pic::after {
      top: 45%;
    }

    &:hover .card_hover_pic {
      transform: rotate(-43deg);
    }
  }

}
</style>
