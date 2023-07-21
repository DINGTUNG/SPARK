<script setup>
import { reactive } from 'vue';
import { useDonateCartStore } from '@/stores/donate-cart.js';
const donateCartStore = useDonateCartStore();
const donateContentCardList = reactive([
  {
    id: "D001",
    imgSrc: "pictures/images/donate/donate-content/D001_kids_support.jpg",
    title: "扶幼捐款",
    content: "支持需要幫助的幼兒。通過捐贈金錢，我們能夠提供營養、醫療、教育和其他基本需求，讓這些幼兒擁有更好的生活和未來。",
    fundSum: "捐款累計 NT$114,900"
  },
  {
    id: "D002",
    imgSrc: "pictures/images/donate/donate-content/D002_kids_protection.jpg",
    title: "兒童保護",
    content: "支持兒童保護組織和計劃，確保兒童的安全、健康和福祉。透過捐贈金錢，您可以幫助提供緊急援助、醫療保健、教育、心理支持和法律援助。",
    fundSum: "捐款累計 NT$18,800"
  },
  {
    id: "D003",
    imgSrc: "pictures/images/donate/donate-content/D003_kids_sponsor.jpg",
    title: "助養召集令",
    content: "提供受助者孩童所需的經濟援助，為受助者提供穩定的支持，幫助他們改善生活狀況，獲得更好的教育和醫療資源，並提供更積極的未來展望。",
    fundSum: "捐款累計 NT$21,500"
  },
  {
    id: "D004",
    imgSrc: "pictures/images/donate/donate-content/D004_scholarship.jpg",
    title: "獎助學金",
    content: "支持有潛力但經濟困難的學生，幫助他們實現教育目標並追求更好的未來。您可以資助學生的學費、教材、住宿費用或其他與教育相關的費用。",
    fundSum: "捐款累計 NT$247,380"
  },
  {
    id: "D005",
    imgSrc: "pictures/images/donate/donate-content/D005_emergency_ relief_fund.jpg",
    title: "急難救助金",
    content: "支援在緊急情況下遭遇困境的孩童，提供迅速而有效的援助。這些情況可能包括自然災害、人道危機、健康危機、家庭悲劇或其他緊急狀況。",
    fundSum: "捐款累計 NT$107,660"
  },
  {
    id: "D006",
    imgSrc: "pictures/images/donate/donate-content/D006_nutritional_supplements.jpg",
    title: "營養補助",
    content: "支持有營養需求但無法獲得足夠營養的人們，提供營養補助食品、營養品、營養教育和餐飲計畫等。有助於改善孩童的營養狀況，促進身體發育和健康。",
    fundSum: "捐款累計 NT$115,300"
  },
  {
    id: "D007",
    imgSrc: "pictures/images/donate/donate-content/D007_spark_project.jpg",
    title: "星火計畫",
    content: "讓孩子們探索自我，提出他們的夢想計畫，並邀請您投給您最愛的組別，為該組爭取「夢想成真」獎金！讓我們一同以熱情激勵，為孩子們的夢想點燃璀璨星火。",
    fundSum: "捐款累計 NT$87,900"
  }

])


function openDonatePage() {
  const url = 'https://www.buymeacoffee.com/tanuki.jr';
  window.open(url, '_blank');
}

const luckyDay = Math.random() >= 0.8;

</script>

<template>
  <div class="donate_content_card_list">
    <div class="donate_content_card" v-for="donateContentCard in donateContentCardList" :key="donateContentCard.id">
      <div class="card_pic">
        <img :src="donateContentCard.imgSrc" :alt="donateContentCard.title">
      </div>
      <div class="card_content">
        <h3>{{ donateContentCard.title }}</h3>
        <p>{{ donateContentCard.content }}</p>
        <h4>{{ donateContentCard.fundSum }}</h4>
        <button @click="donateCartStore.showSideList">加入清單</button>
      </div>
    </div>


    <div v-if="luckyDay" class="donate_content_card">
      <div class="card_pic">
        <img :src="'pictures/test/tanuki-rectangle.png'" alt="幸福狸貓">
      </div>
      <div class="card_content">
        <h3>幸福狸貓</h3>
        <p>散播幸福散播愛，請支持並贊助二狸貓熱呼呼的番薯!</p>
        <h4>捐款累計 520🍠</h4>
        <button @click="openDonatePage">前往贊助</button>
      </div>
    </div>


  </div>
</template>


<style scoped lang="scss">
@import "@/assets/sass/components/donate/donate-content-card";
</style>
