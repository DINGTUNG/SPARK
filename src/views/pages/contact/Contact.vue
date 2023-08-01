<script setup>
import { reactive, ref } from 'vue'
const contact = reactive([
  {
    index: 1,
    img: 'pictures/images/contact/contact_1.jpg',
    title: '小木偶兒童發展協會',
    article: '創立於民國90年，為促進兒童福祉發展，由各地兒童認養協會邀請有關人士組成，委員包括：扶幼委員、校長、醫生、律師、心理學者、相關學者、相關社團負責人、社政主管和單位主管等，由他們指導兒童保護所需專業知識、技巧及有關之問題諮詢。',
    lat:24.95763 , // 地點的緯度值
    lng:121.2250, // 地點的經度值
    localSrc: 'https://maps.google.com/maps?q=24.9738,121.1898&z=13&ie=UTF8&iwloc=&output=embed', // 這裡的緯度和經度值會在程式執行時動態生成
  },
  {
    index: 2,
    img: 'pictures/images/contact/contact_2.jpg',
    title: '星火之友會',
    article: '由星火協會扶助長大就業的自立青年組成。不少星火兒童目前已成家立業，擁有穩定的家庭，他們回到星火協會貢獻心力，成立星火之友會，將自己親身體驗及奮鬥歷程與目前受助兒童分享，並捐款提供獎助學金、急難救助金，擔任認養人或助養人，為促進兒童福祉貢獻一份力量。',
    lat: 38.8977, // 地點的緯度值
    lng: -77.0365, // 地點的經度值
    localSrc: 'https://maps.google.com/maps?q=38.8977,-77.0365&z=13&ie=UTF8&iwloc=&output=embed', 
  },
  {
    index: 3,
    img: 'pictures/images/contact/contact_3.jpg',
    title: '希望志工',
    article: '希望志工是由一群深具富有愛心、耐心的志工組成的，協助本會提各種支援服務工作。',
    lat:55.7517, // 地點的緯度值
    lng:37.6178, // 地點的經度值
    localSrc: 'https://maps.google.com/maps?q=55.7517,37.6178&z=13&ie=UTF8&iwloc=&output=embed', 
  },
  {
    index: 4,
    img: 'pictures/images/contact/contact_4.jpg',
    title: '小小花園兒童教育基金會',
    article: '創立於民國87年，致力於貧困兒童的教育扶助事業，由各界學者專家、德高望重仕紳及熱心公益人士組成，以其學識、經驗及影響力，促進貧困兒童的教育發展，並且致力促進與政府、社會及有關機構之友好合作關係，並籌募經費及提供專業意見，推動扶幼教育工作。',
    lat:39.9042, // 地點的緯度值
    lng:116.4074, // 地點的經度值
    localSrc: 'https://maps.google.com/maps?q=39.9042,116.4074&z=13&ie=UTF8&iwloc=&output=embed', 
  },
]);

const activeLocationIndex = ref(0);

const toggleLocation = (index) => {
  if (index >= 0 && index < contact.length) {
    activeLocationIndex.value = index;
    console.log(activeLocationIndex.value);
  } else {
    console.error('Invalid index:', index);
  }
};

function getEmbeddedMapUrl(location) {
  return `https://maps.google.com/maps?q=${location.lat},${location.lng}&z=13&ie=UTF8&iwloc=&output=embed`;
}

</script>
<template>
  <div class="title_img">
    <img :src="'pictures/images/contact/banner.png.png'" alt="">
  </div>
  <div class="container">
    <div class="main_body">
      <div class="title_block">
        <h1>星火之友</h1>
        <img class="deco_line" :src="'pictures/decorations/illustration/decorative_line.svg'" alt="裝飾線">
      </div>
      <div class="title_text">
        <p>星星之火，可以燎原，星火協會一直以來致力於促進貧困兒童的福祉促進，歷盡大小風雨，在這過程中的背後，少不了各界善心人士的各方支持幫忙，如今的星火能夠成長茁壯，少不了這些友會的共同努力~</p>
        <div class="border_line"></div>
      </div>
      <div class="contact_block">
        <div class="contact_message" v-for="(item, index) in contact" :key="item.index">
          <div class="contact_message_inner">
            <img :src="item.img">
            <div class="contact_text">
              <h4>{{ item.title }}</h4>
              <p>{{ item.article }}</p>
            </div>
          </div>
          <div class="text_line"></div>
        </div>
        <div class="map">
          <h2>友會地點</h2>
          <div class="local_stick">
            <h4 @click="toggleLocation(index)" v-for="(item, index) in contact" :key="item.index">{{ item.title }}</h4>
          </div>
          <template v-if="activeLocationIndex >= 0 && activeLocationIndex < contact.length">
            <iframe :src="getEmbeddedMapUrl(contact[activeLocationIndex])" width="600" height="450" style="border:0;"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </template>
        </div>
      </div>
      <img :src="'pictures/characters/star/star_superman.svg'" alt="星星超人" class="superman">
      <img :src="'pictures/decorations/illustration/contact_star.svg'" alt="碎星" class="contact_star">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/pages/contact';
</style>
