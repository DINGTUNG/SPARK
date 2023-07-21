<script setup>
  import { reactive } from 'vue'
  const visionContents = reactive([
    {
      id: 1,
      icon: 'pictures/icons/about/icon_1.svg',
      alt: '我們運用的icon',
      title: '我們運用',
      description: '社會工作的專業方法，致力於貧困家庭兒童的生活扶助、保護受虐及需要專業照顧的兒童，包括提供營養飲食、醫療保健、教育資源、心理輔導⋯⋯等，我們與專業人士合作，致力於創造一個溫暖、安全且有機會的環境。'
    },
    {
      id: 2,
      icon: 'pictures/icons/about/icon_2.svg',
      alt: '我們運用的icon',
      title: '我們期待',
      description: '透過我們的努力，讓台灣更多兒童享有家庭妥善的照顧、身心安全的保護、健康成長的環境、充分受教育的機會快樂學習的生活。我們致力於建立全面的兒童福利體系，並積極參與政策倡議，推動兒童權益的保障和落實。'
    },
    {
      id: 3,
      icon: 'pictures/icons/about/icon_3.svg',
      alt: '我們運用的icon',
      title: '我們秉持',
      description: '以「及時的幫助、溫暖的關懷、滿溢的愛心、社工的專業」之服務精神為兒童謀福利，無論是提供情緒支持、心理輔導、學業輔導還是家庭協助，我們都以個別化和全人關懷的方式與每個兒童建立起信任和連結。'
    }
  ])

  //據點資訊
  const branches = reactive([
    {
      id: 1,
      area: '總部',
      address: '320桃園市中壢區復興路46號9樓',
      phone: '03-4251108',
      email: 'fund@spark.org.tw'
    },
    {
      id: 2,
      area: '台北星火中心',
      address: '100台北市中正區忠孝西路一段100號',
      phone: '02-12345678',
      email: 'tp@spark.org.tw'
    },
    {
      id: 3,
      area: '台中星火中心',
      address: '403台中市西區中港路100號',
      phone: '04-12345678',
      email: 'tc@spark.org.tw'
    },
    {
      id: 4,
      area: '台南星火中心',
      address: '700台南市中西區民權路100號',
      phone: '06-12345678',
      email: 'tn@spark.org.tw'
    },
    {
      id: 5,
      area: '台東星火中心',
      address: '950台東市中正路100號',
      phone: '089-12345678',
      email: 'td@spark.org.tw'
    }
  ])


  //FAQ區
  import { ref } from 'vue'
  const faqBase = ref([
    {
      q: '如何進行兒童認養？',
      a:'兒童認養通常可以通過與相關慈善組織或兒童保護機構聯繫，您可以向他們了解認養流程和所需的文件及費用。通常，您需要填寫申請表格、提供必要的文件和支付相應的認養費用。',
      open: false
    },
    {
      q: '認養一個兒童需要支付多少費用？',
      a:'具體的認養費用因組織和項目的不同而有所差異。費用可能涵蓋兒童的生活費、教育費用、醫療保健等。建議您與相關組織聯繫以了解具體的費用詳情。',
      open: false
    },
    {
      q: '是否可以選擇特定的兒童進行認養？',
      a:'有些組織提供選擇特定兒童進行認養的選項，但這通常取決於兒童的可用性和組織的政策，您可以向組織咨詢是否有這樣的選項。',
      open: false
    },
    {
      q: '兒童認養的期限是多久？',
      a:'兒童認養的期限可以根據組織和項目的不同而有所變化，有的認養是長期的，直到兒童成年；而有的認養可能是暫時的，針對特定的時間段，您可以向組織了解認養的具體期限。',
      open: false
    },
    {
      q: '我可以與被認養的兒童保持聯繫嗎？',
      a:'這取決於組織的政策和認養的類型。有的組織鼓勵認養家庭與兒童建立聯繫，例如：通過信件、視訊通話...等方式，您可以向組織咨詢他們的聯繫政策和建議。',
      open: false
    },
    {
      q: '兒童認養費用有哪些包含的內容？',
      a:'具體的認養費用內容因組織和項目的不同而有所差異。通常認養費用可能用於兒童的生活費、教育費用、醫療保健、心理支持等方面，您可以向組織咨詢費用的詳細訊息。',
      open: false
    },
    {
      q: '是否可以在認養期間給兒童寄送禮物或信件？',
      a:'這取決於組織的政策和認養的類型。有的組織允許認養家庭給兒童寄送禮物或寫信件以表達關愛和支持，您可以向組織咨詢相關的指導和建議。',
      open: false
    },
    {
      q: '如果我無法繼續支持認養費用，是否可以取消認養？',
      a:'在某些情況下，如果您無法繼續支持認養費用，您可以與組織協商取消認養或尋求其他解決方案，建議您及時與組織聯繫，並了解他們的取消政策和程序。',
      open: false
    }
    
  ])

  //一次只展開一個FAQ項
  const closeAllFaq = (item) => {
    if(!item.open){
      faqBase.value.forEach(el => el.open = false)
    }
    item.open = !item.open;
  }
</script>


<template>
  
  <div class="about_banner">
    <img :src="'pictures/images/about/banner.jpg'" alt="認識星火封面">
  </div>

`  <div class="about_container">
    <div class="main_body">`
      
      <img class="deco" :src="'pictures/decorations/illustration/shooting_stars_2.svg'" alt="流星裝飾">
      <img class="deco" :src="'pictures/decorations/illustration/planet.svg'" alt="行星裝飾">
      <img class="deco" :src="'pictures/decorations/illustration/shooting_stars_2.svg'" alt="流星裝飾2">
      <img class="deco" :src="'pictures/decorations/illustration/shooting_stars_2.svg'" alt="流星裝飾3">

    
      <div class="title_block">
        <h1>認識星火</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
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
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <div class="origin_text">
        <p>民國82年，星火協會在台灣成立，我們的創立者深受對兒童福祉的關懷和熱情所驅使；而當時社會中許多弱勢兒童面臨著困境，這些弱勢兒童不是無助的，他們擁有無限的潛能和夢想，我們決心為他們提供支援和改變的機會。</p>
        <p>在接下來的幾年裡，星火協會不斷發展和擴展，民國95年，我們開始拓展我們的服務範圍，由社區出發，進一步關注兒童的教育、健康和福利需求。我們致力於創造一個更美好的未來，為孩子們點燃希望的火焰。</p>
        <p>
        隨著時間的推移，星火協會不斷發展壯大，透過無數的努力和支持者的幫助，我們在台灣社會中建立了良好的聲譽和影響力，並於民國110年獲外交部NGO國際事務會表揚「傑出貢獻民間團體-社會福利類獎」。我們深信，每一個兒童都應該擁有平等、健康和幸福的成長環境，並有權追求自己的夢想。非常感謝所有曾經支持我們的人們，他們的支持和奉獻使我們能夠持續地為兒童提供所需的資源和服務。</p>
        <p>
        星火協會的成立源於對兒童福祉的關切，而我們的成長則得益於我們不斷擴展的服務和承諾。未來，我們將繼續以孩子們的需求為中心，不斷探索和實踐創新的方法，為他們提供更多的支援和機會。</p>
      </div>
      <div class="vision_title">
        <h2>願景</h2>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <div class="vision_text">
        <p>
        星火協會的願景是建立充滿希望和公平的社會，讓每個兒童擁有發展潛能，為兒童提供綜合支援和服務，改善生活品質和及促進未來發展是我們的使命，我們也也希望每個兒童都能成為社會的中堅力量，為建立更美好的未來做出貢獻。這是我們堅定的使命和承諾。</p>
      </div>

      <div class="vision_house">     
          <img class="roof" :src="'pictures/decorations/illustration/roof.svg'" alt="屋頂背景">
          <div class="bgc_primaryblue">
              <div class="vision_content" v-for="item in visionContents" :key="item.id">
                <div class="icon_title">
                  <img class="icon" :src="item.icon" :alt="item.alt">
                  <h4>{{ item.title }}</h4>
                </div>
                <p>{{ item.description }}</p>
              </div>
              <div class="bottom_line"></div>
          </div>
          <img class="floor" :src="'pictures/decorations/illustration/floor.svg'" alt="地板背景">
      </div>

      <div class="branch_title">
        <h2>服務據點</h2>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <div class="branch_card_wrapper">
        <div class="branch_card" v-for="branch in branches" :key="branch.id">
          <div class="branch_info">
            <h5>{{ branch.area }}</h5>
            <p><i class="fa-solid fa-location-dot"></i>{{ branch.address }}</p>
            <p><i class="fa-solid fa-phone"></i>{{ branch.phone }}</p>
            <p><i class="fa-solid fa-envelope"></i>{{ branch.email }}</p>
          </div>
          <img class="telescope" :src="'pictures/decorations/illustration/telescope_white.svg'" alt="望遠鏡裝飾物">
        </div>
      </div>

      <!-- FAQ -->
      <div class="faq_title">
        <h2>認養/捐款 Q&A</h2>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>

      <div class="faq_wrapper">
        <div class="faq_field" v-for="(faq, i) in faqBase" :key="i">
          <div class="open_faq" @click="closeAllFaq(faq)" >
            <h5>
              {{ faq.q }}
              <i class="fa-solid fa-plus" :class="faq.open ? 'rotate' : ''"></i>
            </h5>
            
            <p :class="faq.open ? 'visible' : 'invisible'">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
     
      
</template>


<style scoped lang="scss">
@import "@/assets/sass/pages/about";
</style>