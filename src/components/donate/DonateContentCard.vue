<script setup>
import { reactive } from 'vue';

const donateContentCardList = reactive([
  {
    id: "D001",
    imgSrc: "src/assets/images/donate/donate-content/D001_kids_support.jpg",
    title: "扶幼捐款",
    content: "支持需要幫助的幼兒。通過捐贈金錢，我們能夠提供營養、醫療、教育和其他基本需求，讓這些幼兒擁有更好的生活和未來。"
  },
  {
    id: "D002",
    imgSrc: "",
    title: "兒童保護",
    content: "支持兒童保護組織和計劃，確保兒童的安全、健康和福祉。透過捐贈金錢，您可以幫助提供緊急援助、醫療保健、教育、心理支持和法律援助。"
  },
  {
    id: "D003",
    imgSrc: "",
    title: "助養召集令",
    content: "提供受助者孩童所需的經濟援助，為受助者提供穩定的支持，幫助他們改善生活狀況，獲得更好的教育和醫療資源，並提供更積極的未來展望。"
  },
  {
    id: "D004",
    imgSrc: "",
    title: "獎助學金",
    content: "支持有潛力但經濟困難的學生，幫助他們實現教育目標並追求更好的未來。您可以資助學生的學費、教材、住宿費用或其他與教育相關的費用。"
  },
  {
    id: "D005",
    imgSrc: "",
    title: "急難救助金",
    content: "支援在緊急情況下遭遇困境的孩童，提供迅速而有效的援助。這些情況可能包括自然災害、人道危機、健康危機、家庭悲劇或其他緊急狀況。"
  },
  {
    id: "D006",
    imgSrc: "",
    title: "營養補助",
    content: "支持有營養需求但無法獲得足夠營養的人們，提供營養補助食品、營養品、營養教育和餐飲計畫等。有助於改善孩童的營養狀況，促進身體發育和健康。"
  },
  {
    id: "D007",
    imgSrc: "",
    title: "認養人",
    content: "通過認養人捐款，您將能夠建立一種特殊的連結和關係。您的捐款將直接用於改善受助者的生活條件，幫助他們應對日常生活所需的費用。"
  },
  {
    id: "D008",
    imgSrc: "",
    title: "永久認養人",
    content: "透過永久認養人捐款，您的捐款將持續用於改善受助者的生活條件，確保他們能夠長期受到經濟、教育或其他方面的支持。"
  },
  {
    id: "D009",
    imgSrc: "",
    title: "星火計畫",
    content: "星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫星火計畫"
  }
])

</script>

<template>
  <div class="donate_content_card_list" v-for="donateContentCard in donateContentCardList" :key="donateContentCard.id">

    <div class="donate_content_card">

      <img :src="donateContentCard.imgSrc" :alt="donateContentCard.title">
      <div class="card_text">
        <h3>{{ donateContentCard.title }}</h3>
        <p>{{ donateContentCard.content }}</p>
        <button>加入清單</button>
      </div>


    </div>




  </div>
</template>

<style scoped lang="scss">
@import'../../assets/sass/base/fonts/fonts-mixin';
@import'../../assets/sass/base/color';

div.donate_content_card_list {

  div.donate_content_card {
    width: 480px;

    img {
      width: 100%;
    }

    .card_text {
      box-sizing: border-box;
      padding: 45px 50px;
      outline: solid 1px red;

      h3 {
        @include h3_PC;
        color: $primaryBrandBlue;
        outline: solid 1px red;
      }

      p {
        @include h6_PC;
        color: $basicFontColor;
        outline: solid 1px red;
      }

      button {}

    }



  }

}
</style>
