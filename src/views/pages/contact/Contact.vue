<script setup>
import { reactive, ref } from 'vue'
const contact = reactive(
  [
    {
      index: 1,
      img: 'pictures/images/contact/contact_1.jpg',
      title: '小木偶兒童發展協會',
      article: '創立於民國90年，為促進兒童福祉發展，由各地兒童認養協會邀請有關人士組成，委員包括：扶幼委員、校長、醫生、律師、心理學者、相關學者、相關社團負責人、社政主管和單位主管等，由他們指導兒童保護所需專業知識、技巧及有關之問題諮詢。',
      localSrc:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.896095380549!2d121.56469999999997!3d25.037600000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzE1LjQiTiAxMjHCsDMzJzUyLjkiRQ!5e0!3m2!1szh-TW!2stw!4v1690364919114!5m2!1szh-TW!2stw"
    },
    {
      index: 2,
      img: 'pictures/images/contact/contact_2.jpg',
      title: '星火之友會',
      article: '由星火協會扶助長大就業的自立青年組成。不少星火兒童目前已成家立業，擁有穩定的家庭，他們回到星火協會貢獻心力，成立星火之友會，將自己親身體驗及奮鬥歷程與目前受助兒童分享，並捐款提供獎助學金、急難救助金，擔任認養人或助養人，為促進兒童福祉貢獻一份力量。',
      localSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12240.781771745847!2d116.38688526549414!3d39.914642244392645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f052dd9bcd81ab%3A0xde43eaed9b106064!2z5pWF5a6u!5e0!3m2!1szh-TW!2stw!4v1690364963553!5m2!1szh-TW!2stw"
    },
    {
      index: 3,
      img: 'pictures/images/contact/contact_3.jpg',
      title: '希望志工',
      article: '希望志工是由一群深具富有愛心、耐心的志工組成的，協助本會提各種支援服務工作。',
      localSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.1815990882!2d-122.52000088158587!3d37.75767131512582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z576O5ZyL5Yqg5Yip56aP5bC85Lqe6IiK6YeR5bGx!5e0!3m2!1szh-TW!2stw!4v1690364998144!5m2!1szh-TW!2stw" 
    },
    {
      index: 4,
      img: 'pictures/images/contact/contact_4.jpg',
      title: '小小花園兒童教育基金會',
      article: '創立於民國87年，致力於貧困兒童的教育扶助事業，由各界學者專家、德高望重仕紳及熱心公益人士組成，以其學識、經驗及影響力，促進貧困兒童的教育發展，並且致力促進與政府、社會及有關機構之友好合作關係，並籌募經費及提供專業意見，推動扶幼教育工作。',
      localSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.1815990882!2d-122.52000088158587!3d37.75767131512582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z576O5ZyL5Yqg5Yip56aP5bC85Lqe6IiK6YeR5bGx!5e0!3m2!1szh-TW!2stw!4v1690365111879!5m2!1szh-TW!2stw" 
    },
  ]
);



const activeLocationIndex = ref(0);
const toggleLocation = (index) => {
    if (index >= 0 && index < contact.length) {
        activeLocationIndex.value = index;
        console.log(activeLocationIndex.value);
    } else {
        console.error('Invalid index:', index);
    }
};




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
        <div class="contact_message" v-for="(item,index) in contact" :key="item.index">
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
            <h4 @click="toggleLocation(index)" v-for="item in contact" :key="item.index">{{ item.title }}</h4>
          </div>
          <iframe :src="contact[activeLocationIndex].localSrc"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

        </div>
      </div>
      <img :src="'pictures/characters/star/star_superman.svg'" alt="星星超人" class="superman">
      <img :src="'pictures/decorations/illustration/contact_star.svg'" alt="碎星" class="contact_star">
    </div>
  </div>
</template>

<style scoped lang="scss">@import'@/assets/sass/pages/contact';</style>
