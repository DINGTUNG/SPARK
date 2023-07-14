
<script setup>
  import { onBeforeMount, onBeforeUpdate, reactive, ref, watch} from 'vue';

  const h1 = ref("認養地區")
  const searchText = ref('')
  let locations = reactive([
    {
      area: '北區',
      name: '基隆',
      people: '2,167'
    },
    {
      area: '北區',
      name: '台北',
      people: '1,844'
    },
    {
      area: '北區',
      name: '新北',
      people: '3,112'
    },
    {
      area: '北區',
      name: '桃園',
      people: '2,675'
    },
    {
      area: '北區',
      name: '新竹',
      people: '1,755'
    },
    {
      area: '中區',
      name: '苗栗',
      people: '1,657'
    },
    {
      area: '中區',
      name: '台中',
      people: '2,675'
    },
    {
      area: '中區',
      name: '彰化',
      people: '1,907'
    },
    {
      area: '中區',
      name: '南投',
      people: '1,677'
    },
    {
      area: '中區',
      name: '雲林',
      people: '1,300'
    },
    {
      area: '中區',
      name: '嘉義',
      people: '2,437'
    },
    {
      area: '南區',
      name: '台南',
      people: '1,543'
    },
    {
      area: '南區',
      name: '高雄',
      people: '1,377'
    },
    {
      area: '南區',
      name: '屏東',
      people: '1,722'
    },
    {
      area: '東區',
      name: '宜蘭',
      people: '1,244'
    },
    {
      area: '東區',
      name: '花蓮',
      people: '1,763'
    },
    {
      area: '東區',
      name: '台東',
      people: '1,763'
    },
  ])
  let locationDisplay = reactive([])

  const updateDisplay = () => {
    if (searchText.value == '') {
      locationDisplay = locations;
    }
  }

  onBeforeUpdate(() => locationDisplay = locations.filter(item => item.name.includes(searchText.value)))

  onBeforeMount(() => updateDisplay())

  const branches = reactive([
    {
      id:'taipei',
      name : '台北星火中心',
      address:'100台北市中正區忠孝西路一段 100 號',
      phoneNumber: '02-12345678',
      email:'tp@spark.org.tw',
      imgUrl:'assets/images/sponsor/sponsor-location/tp_spark.png'
    },
    {
      id:'taichung',
      name : '台中星火中心',
      address:'403台中市西區中港路 100 號',
      phoneNumber: '04-12345678',
      email:'tc@spark.org.tw',
      imgUrl:'assets/images/sponsor/sponsor-location/tc_spark.jpg'
    },
    {
      id:'tainan',
      name : '台南星火中心',
      address:'700台南市中西區民權路 100 號',
      phoneNumber: '06-12345678',
      email:'tn@spark.org.tw',
      imgUrl:'assets/images/sponsor/sponsor-location/tn_spark.jpg'
    },
    {
      id:'taitung',
      name : '台東星火中心',
      address:'950台東市中正路 100 號',
      phoneNumber: '089-12345678',
      email:'td@spark.org.tw',
      imgUrl:'assets/images/sponsor/sponsor-location/tt_spark.png'
    }
  ])
  const selectedBranch = ref(null);
  const container = ref(null);

  const selectBranch = (index) => {
      selectedBranch.value = index;
    }

  const getButtonStyle = (index) => {
      const positions = [
        { top: '50px', right: '70px' },
        { top: '160px', left: '220px' },
        { bottom: '180px', left: '150px' },
        { bottom: '190px', right: '120px' }
      ];
      return positions[index];
    }
  
  const handleClickOutside = (event) => {
    if (!container.value.contains(event.target)) {
      selectedBranch.value = null;
    }
  }
  watch(() => selectedBranch.value, () => {
      if (selectedBranch.value !== null) {
        // Selected a branch, add event listener
        document.addEventListener('click', handleClickOutside);
      } else {
        // No branch selected, remove event listener
        document.removeEventListener('click', handleClickOutside);
      }
    });

</script>
<template>
  <div class="banner">
    <img :src="assets/images/sponsor/sponsor-location/banner.png" alt="bannerImage">
  </div>
  <div class="wrap">
    <div class="container">
      <h1>{{ h1 }}</h1>
      <div class="map">
        <img :src="assets/images/sponsor/sponsor-location/taiwan.png" alt="taiwanMap">
        <div class="branchs" ref="container" @click="handleClickOutside">

          <button v-for="(branch, index) in branches" :key="branch.id" @click="selectBranch(index)" :style=getButtonStyle(index)>
          </button>
          <div class="introduce" v-if="selectedBranch !== null">
            <div class="text">
              <h2>{{ branches[selectedBranch].name }}</h2>
              <p><i class="fa-solid fa-location-dot"></i>：{{ branches[selectedBranch].address }}</p>
              <p><i class="fa-solid fa-phone"></i>：{{ branches[selectedBranch].phoneNumber }}</p>
              <p><i class="fa-solid fa-envelope"></i>：{{ branches[selectedBranch].email }}</p>
            </div>
            <div class="pic"><img :src="branches[selectedBranch].imgUrl" alt="據點示意圖片"></div>
          </div>

        </div>
      </div>
      <input type="search" v-model="searchText" class="search-bar">
      <section class="location">
        <div class="card" v-for="(item, key) in locationDisplay" :key="key">
          <div class="tag">{{ item.area }}</div>
          <div class="name">
            {{ item.name }}
            <div class="people">扶養<span>{{ item.people }}</span>人</div>
          </div>
        </div>
        <div class="deco-stars">
          <img :src="assets/decorations/illustration/golden_stars.png" alt="星星裝飾">
        </div>
        <div class="deco-bigstar">
          <img :src="assets/characters/star/star_superman.svg" alt="星星裝飾">
        </div>
      </section>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/sass/pages/sponsor-location';
</style>
