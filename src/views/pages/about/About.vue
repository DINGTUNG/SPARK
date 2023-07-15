<script setup>
  // import { reactive } from 'vue'
  // const contact = reactive(
  //   [{
      

  // }]
  // )

</script>

<template>
  <div class="about_container">
    <div class="main_body">
      <div class="about_banner">
        <img :src="'pictures/images/about/banner.jpg'" alt="認識星火封面">
      </div>
      <div class="title_block">
        <h1>認識星火</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.png'" alt="裝飾線">
      </div>
      <div class="title_text">
        <p>星火兒童協會是一個致力於幫助弱勢兒童的非營利組織。我們以教育、健康和福利支援為核心，點燃希望之星。透過資源整合、社區合作和創新計畫，我們提升兒童的生活品質，培養他們的潛能與自信，成為未來堅強有影響力的領袖。關愛、教育和社會參與是我們創造美好世界的使命，讓我們攜手為每個孩子的未來點亮一道光芒。</p>
      </div>
      <div class="card_wrapper">
        <div v-for="index in 3" :class="'about_card_' + index" :key="index">
            <img :src="'pictures/images/about/about_card_' + index + '.jpg'" :alt="'照片' + index">
        </div>
      </div>
      <div class="origin_title">
        <h2>緣起</h2>
        <img class="deco" :src="'pictures/decorations/illustration/decorative_line.png'" alt="裝飾線">
      </div>
      <div class="origin_text">
        <p>民國82年，星火協會在台灣成立，我們的創立者深受對兒童福祉的關懷和熱情所驅使。當時社會中許多弱勢兒童面臨著困境，我們決心為他們提供支援和改變的機會。</p>
        <p>在接下來的幾年裡，星火協會不斷發展和擴展，民國95年，我們開始拓展我們的服務範圍，由社區出發，進一步關注兒童的教育、健康和福利需求。我們致力於創造一個更美好的未來，為孩子們點燃希望的火焰。</p>
        <p>
        隨著時間的推移，星火協會不斷發展壯大，透過無數的努力和支持者的幫助，我們在台灣社會中建立了良好的聲譽和影響力，並於民國110年獲外交部NGO國際事務會表揚「傑出貢獻民間團體-社會福利類獎」。我們感謝所有曾經支持我們的人們，他們的支持和奉獻使我們能夠持續地為兒童提供所需的資源和服務。</p>
        <p>
        星火協會的成立源於對兒童福祉的關切，而我們的成長則得益於我們不斷擴展的服務和承諾。未來，我們將繼續以孩子們的需求為中心，不斷探索和實踐創新的方法，為他們提供更多的支援和機會。</p>
      </div>
      <div class="vision_title">
        <h2>願景</h2>
        <img class="deco" :src="'pictures/decorations/illustration/decorative_line.png'" alt="裝飾線">
      </div>
      <div class="vision_text">
        <p>星火協會的願景是建立充滿希望和公平的社會，讓每個兒童擁有發展潛能，為兒童提供綜合支援和服務，改善生活品質和及促進未來發展是我們的使命。</p>
      </div>












    </div>

  </div>
      <!-- <div class="card_wrapper">
        <div class="about_card_1">
          <img :src="'pictures/images/about/about_card_1.jpg'" alt="照片1">
        </div>
        <div class="about_card_2">
          <img :src="'pictures/images/about/about_card_2.jpg'" alt="照片2">
        </div>
        <div class="about_card_3">
          <img :src="'pictures/images/about/about_card_3.jpg'" alt="照片3">
        </div>
      </div> -->
      
</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/about";
</style>