<script setup>
import { reactive } from 'vue';

const donateContentCardList = reactive([
  {
    id: "D001",
    imgSrc: "/pictures/images/donate/donate-content/D001_kids_support.jpg",
    title: "扶幼捐款",
    content: "支持需要幫助的幼兒。通過捐贈金錢，我們能夠提供營養、醫療、教育和其他基本需求，讓這些幼兒擁有更好的生活和未來。"
  },
  {
    id: "D002",
    imgSrc: "/pictures/images/donate/donate-content/D002_kids_protection.jpg",
    title: "兒童保護",
    content: "支持兒童保護組織和計劃，確保兒童的安全、健康和福祉。透過捐贈金錢，您可以幫助提供緊急援助、醫療保健、教育、心理支持和法律援助。"
  },
  {
    id: "D003",
    imgSrc: "/pictures/images/donate/donate-content/D003_kids_sponsor.jpg",
    title: "助養召集令",
    content: "提供受助者孩童所需的經濟援助，為受助者提供穩定的支持，幫助他們改善生活狀況，獲得更好的教育和醫療資源，並提供更積極的未來展望。"
  },
  {
    id: "D004",
    imgSrc: "/pictures/images/donate/donate-content/D004_scholarship.jpg",
    title: "獎助學金",
    content: "支持有潛力但經濟困難的學生，幫助他們實現教育目標並追求更好的未來。您可以資助學生的學費、教材、住宿費用或其他與教育相關的費用。"
  },
  {
    id: "D005",
    imgSrc: "/pictures/images/donate/donate-content/D005_emergency_ relief_fund.jpg",
    title: "急難救助金",
    content: "支援在緊急情況下遭遇困境的孩童，提供迅速而有效的援助。這些情況可能包括自然災害、人道危機、健康危機、家庭悲劇或其他緊急狀況。"
  },
  {
    id: "D006",
    imgSrc: "/pictures/images/donate/donate-content/D006_nutritional_supplements.jpg",
    title: "營養補助",
    content: "支持有營養需求但無法獲得足夠營養的人們，提供營養補助食品、營養品、營養教育和餐飲計畫等。有助於改善孩童的營養狀況，促進身體發育和健康。"
  },
  {
    id: "D007",
    imgSrc: "/pictures/images/donate/donate-content/D007_spark_project.jpg",
    title: "星火計畫",
    content: "讓孩子們探索自我，提出他們的夢想計畫，並邀請您投給您最愛的組別，為該組爭取「夢想成真」獎金！讓我們一同以熱情激勵，為孩子們的夢想點燃璀璨星火。"
  }
])

</script>

<template>
  <div class="donate_content_card_list">

    <div class="donate_content_card" v-for="donateContentCard in donateContentCardList" :key="donateContentCard.id">
      <img :src="donateContentCard.imgSrc" :alt="donateContentCard.title">
      <div class="card_content">
        <h3>{{ donateContentCard.title }}</h3>
        <p>{{ donateContentCard.content }}</p>
        <button>加 入 清 單</button>
      </div>

    </div>

  </div>
</template>


<style scoped lang="scss">
@import'@/assets/sass/base/fonts/fonts-mixin';
@import'@/assets/sass/base/color';
@import'@/assets/sass/base/border-radius';
@import'@/assets/sass/base/box-shadow';
@import'@/assets/sass/components/func-items/buttons/buttons-mixin';
@import'@/assets/sass/components/func-items/buttons/buttons';

div.donate_content_card_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 45px 0;

  div.donate_content_card {
    width: 46%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: $br_PC;
    @include boxShadow_PC;
    // outline: solid 1px red;

    img {
      width: 100%;
      border-radius: $br_PC $br_PC 0 0;
    }

    .card_content {
      box-sizing: border-box;
      padding: 40px 45px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      h3 {
        @include h3_PC;
        color: $primaryBrandBlue;
        padding-bottom: 15px;
      }

      p {
        @include h6_PC;
        color: $basicFontColor;
        padding-bottom: 80px;
      }

      button {
        @include smallBlueBtn_PC;
        border: none;
        margin-top: auto;
        margin-left: auto;
        transition: .3s;

        &:hover {
          background-color: $secondaryLightBlue3;
          @include boxShadow_PC;
          cursor: pointer;
        }

      }

    }



  }

}
</style>
