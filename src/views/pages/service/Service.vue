<script setup>
import { reactive } from "vue";
const projectDeteils = reactive([
  {
    title:'家庭扶助',
    subtitle:'兒童少年親屬安置服務',
    text:'依據我國「兒童及少年福利與權益保障法」與「兒童及少年福利與權益保障法施行細則」相關規定，當兒童少年受到虐待不當照顧，無法繼續在親生家庭生活時。',
    describe:'經由政府單位社會工作人員進行專業評估後，將兒童少年安置於適當之親屬家庭中，由親屬家庭代為照顧、養育及保護，根據我國「兒童及少年福利與權益保障法」之規定。',
    left_illustrate:'經由政府單位社會工作人員進行專業評估後，將兒童少年安置於適當之親屬家庭中，由親屬家庭代為照顧、養育及保護，根據我國「兒童及少年福利與權益保障法」之規定。',
    right_illustrate:'親屬家庭、寄養家庭及兒童少年安置及教養機構同為兒童少年家外安置的場域，屬於兒童少年福利體系中的正式資源，雖然將兒童少年交給擴大家庭的成員代為照顧。',
    imgUrl:"pictures/images/service/support.png"
  },
  {
    title:'寄養安置',
    subtitle:'兒童寄養安置服務',
    text:'當兒童少年親生家庭發生重大變故或暫時無法提供適當的照顧時，將兒童少年帶離其親生家庭，藉由寄養家庭的溫馨、用心照顧，提供有計畫期間的替代親生家庭照顧功能之社會福利服務。',
    describe:'為協助寄養兒童少年穩定成長及發展健全人格，同時協助其適應新環境,並於寄養家庭中學習正確的生活規範與行為模式，待原生家庭重建後，能帶著良好的身心狀況返回親生家庭。',
    left_illustrate:'寄養家庭指自願參與家庭寄養服務，並經過政府及本會各地協會審查合乎條件後，接受協會安排暫時照顧需要安置之兒童少年的家庭。',
    right_illustrate:'當寄養兒童少年接受寄養安置後，本會即依寄養兒童少年個別需要，詳列輔導計劃並進行服務，其服務項目包括：訪談輔導、轉學/就學安排與適應協助、營養改善、課業輔導、親生家庭維繋服務等。',
    imgUrl:"pictures/images/service/protect.png"
  },
  {
    title:'兒童保護',
    subtitle:'兒童少年保護服務',
    text:'兒童少年是國家發展的重要人力資源，提供兒童及少年安全的生活環境，確保其健康成長，不僅是每一個家庭的責任，也是國家與社會責無旁貸的工作。',
    describe:'兒童及少年一旦遭受虐待，除了可能造成身體傷殘、心智受創、學習受阻、行為異常、社會適應障礙之外，嚴重者因而致死，甚而會有自殺行為、虐待下一代的暴力循環問題，而社會也將為此付出長期且鉅大的成本與代價。鑑此，本會從不間斷辦理兒童少年保護宣導工作，並積極投入救援輔導服務，防止虐待事件再次發生，',
    left_illustrate:'本會針對遭受虐待之兒童少年及其家庭，提供的保護服務內容有:家庭處遇服務及追蹤輔導服務、生活照顧服務、醫療協助服務、親職教育服務、諮詢及法律服務、兒保宣導及教材推廣服務',
    right_illustrate:'本會希望以家庭為基礎，提供有計畫性的相關服務，以增強兒少復原力、父母或主要照顧者親職能力、改善及提昇家庭功能，進而提供兒少完善照顧與安全的生活環境。',
    imgUrl:"pictures/images/service/placement.png"
  },

  ])
</script>

<template>
  <div class="banner">
    <img class="PC" :src="'pictures/images/service/banner.png'" alt="service-banner">
    <img class="MB" :src="'pictures/images/service/banner_MB.png'" alt="手機板 banner">
  </div>
  <div class="container">
    <div class="main_body">
      <img class="deco" :src="'pictures/characters/star/star_reading.svg'" alt="看書的星星~">
      <img class="deco" :src="'pictures/decorations/illustration/shooting_stars.svg'" alt="流星~">
      <img class="deco" :src="'pictures/characters/girl/girl_hugging_star.svg'" alt="抱著星星">
      <img class="deco" :src="'pictures/decorations/illustration/planet.svg'" alt="星球">
      <div class="title">
        <h1>服務內容</h1>
        <div class="decorative_line">
            <img :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
        </div>
      </div>
      
      <section class="project_deteils" v-for="(item, index) in projectDeteils" :key="index">
        <div class="top">
          <div class="right-pic">
            <img :src="item.imgUrl" alt="家庭扶助示意照片">
          </div>
          <div class="left-card">
            <img :src="'pictures/images/service/elliot-folder.png'" alt="裝飾">
            <h2>{{item.title}}</h2>
            <h3>{{item.subtitle}}</h3>
            <p>{{item.text}}</p>
          </div>
        </div>
        <div class="describe">{{item.describe}}</div>
        <div class="illustrate">
          <div class="left_illustrate">{{item.left_illustrate}}</div>
          <div class="right_illustrate">{{item.right_illustrate}}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/pages/service';
</style>
