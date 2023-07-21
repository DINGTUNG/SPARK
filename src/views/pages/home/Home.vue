<script setup>
import { RouterLink } from 'vue-router'
import News from '@/views/sections/home/News.vue';
import { ref } from 'vue';

const branches = ref([
  { area: "北部", name: "台北星火中心", num: 1800 },
  { area: "中部", name: "台中星火中心", num: 2400 },
  { area: "南部", name: "台南星火中心", num: 1900 },
  { area: "東部", name: "台東星火中心", num: 900 },
]);
const curIndex = ref(null)

// const curBranchName = ref("");
// const curArea = ref("");
// const curNum = ref("");

const showBranch = (index) => {
  curIndex.value = index;
  // curBranchName.value = isShow ? `${branches.value[index].name}` : "";
  // curArea.value = isShow ? `${branches.value[index].area}` : "";
  // curNum.value = isShow ? `${branches.value[index].num}` : "";
};

</script>


<template>
  <div>

    <div class="banner_container">
      <div class="banner">
        <!-- <img :src="'pictures/images/home/home_banner_bg.png'" alt="home_banner_bg" class="home_banner_bg"> -->
        <div class="banner_center">
          <img :src="'pictures/decorations/illustration/white_moon.svg'" alt="white_moon" class="white_moon">
          <img :src="'pictures/decorations/handwriting/ignite_the_night.svg'" alt="ignite_the_night"
            class="ignite_the_night">
          <img :src="'pictures/characters/boy/boy_lighting_up_white.svg'" alt="boy_lighting_up_white"
            class="boy_lighting_up_white">
          <img :src="'pictures/characters/girl/girl_hugging_star_white.svg'" alt="girl_hugging_star_white"
            class="girl_hugging_star_white">
          <img :src="'pictures/decorations/illustration/orange_asterisk_single.svg'" alt="orange_asterisk_single"
            class="orange_asterisk_single">
          <img :src="'pictures/decorations/illustration/golden_star_single_2.svg'" alt="golden_star_single_2"
            class="golden_star_single_2">
          <img :src="'pictures/decorations/illustration/golden_star_single_3.svg'" alt="golden_star_single_3"
            class="golden_star_single_3">
          <img :src="'pictures/decorations/illustration/golden_star_2.svg'" alt="golden_star_2" class="golden_star_2">
          <img :src="'pictures/decorations/illustration/golden_star_2.svg'" alt="golden_star_2" class="golden_star_2">
        </div>
        <img :src="'pictures/decorations/illustration/orange_stars.svg'" alt="orange_stars" class="orange_stars">
        <img :src="'pictures/decorations/illustration/golden_star_single.svg'" alt="golden_star_single"
          class="golden_star_single">
        <img :src="'pictures/decorations/illustration/shooting_star_white.svg'" alt="shooting_star_white"
          class="shooting_star_white">
        <img :src="'pictures/decorations/illustration/shooting_star_white_2.svg'" alt="shooting_star_white_2"
          class="shooting_star_white_2">
        <img :src="'pictures/decorations/illustration/shooting_star_white_group.svg'" alt="shooting_star_white_group"
          class="shooting_star_white_group">

        <div class="home_banner_cloud"></div>
        <!-- <img :src="'pictures/images/home/home_banner_cloud.png'" alt="home_banner_cloud" class="home_banner_cloud"> -->
      </div>
    </div>

    <div class="home_container">
      <div class="section_intro">
        <div class="intro">
          <div class="intro_title">
            <img :src="'pictures/decorations/illustration/pigeon.svg'" alt="pigeon">
            <h1>星火30，感謝有您</h1>
          </div>
          <div class="intro_text">
            30年前，星火成立，三十年來，風風雨雨，在愛心捐助與認養兒童的這份慈善事業中，星火一直致力於這份偉大的事業中，只為了讓社會中每顆幼小的火苗能成為照亮自己和他人的燎原之光，在這三十年間，幫助了數以千計的孩子找到合適的認養人，並且在提升弱勢兒童的福祉上努力的不落人後，如今星火成立30年，感謝各界的善心支持，願你我能讓星火能永遠相傳。
          </div>
        </div>
        <div class="intro_map">
          <img :src="'pictures/images/home/blue_taiwan.svg'" alt="blue_taiwan">

          <div class="branch_dot" v-for="(branch, index) in branches" @click="showBranch(index)"></div>


          <transition>
            <div class="branch_info" v-if="curIndex != null">
              <div class="branch_title">
                <p class="area">{{ branches[curIndex].area }}</p>
                <p class="name">{{ branches[curIndex].name }}</p>
              </div>
              <div class="branch_number">
                <p>服務人數 <span>{{ branches[curIndex].num }}</span> 人</p>
              </div>
            </div>
          </transition>

        </div>
        <img :src="'pictures/characters/girl/girl_bubbling.svg'" alt="girl_bubbling" class="girl_bubbling">
      </div>

      <div class="section_news">
        <News />
      </div>

    </div>
  </div>

  <RouterLink to="/test">測試頁面</RouterLink>
  <br>
  <RouterLink to="/sponsor-checkout-step-1">sponsor-checkout-step-1</RouterLink>
  <br>
  <RouterLink to="/donate-checkout-step-1">donate-checkout-step-1</RouterLink>
  <br>
  <RouterLink to="/letter-record">會員中心</RouterLink>
  <br>
</template>



<style scoped lang="scss">
@import "@/assets/sass/pages/home/home";
</style>
