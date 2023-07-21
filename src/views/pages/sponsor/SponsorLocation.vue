
<script setup>
    import { reactive, ref, watch} from 'vue';

    const h1 = ref("認養地區")
    let locations = reactive([
      { 
        id:'0',
        area: '北區',
        name: '基隆',
        people: '2,167'
      },
      {
        id:'0',
        area: '北區',
        name: '台北',
        people: '1,844'
      },
      {
        id:'0',
        area: '北區',
        name: '新北',
        people: '3,112'
      },
      {
        id:'0',
        area: '北區',
        name: '桃園',
        people: '2,675'
      },
      {
        id:'0',
        area: '北區',
        name: '新竹',
        people: '1,755'
      },
      {
        id:'1',
        area: '中區',
        name: '苗栗',
        people: '1,657'
      },
      {
        id:'1',
        area: '中區',
        name: '台中',
        people: '2,675'
      },
      {
        id:'1',
        area: '中區',
        name: '彰化',
        people: '1,907'
      },
      {
        id:'1',
        area: '中區',
        name: '南投',
        people: '1,677'
      },
      {
        id:'1',
        area: '中區',
        name: '雲林',
        people: '1,300'
      },
      {
        id:'1',
        area: '中區',
        name: '嘉義',
        people: '2,437'
      },
      {
        id:'2',
        area: '南區',
        name: '台南',
        people: '1,543'
      },
      {
        id:'2',
        area: '南區',
        name: '高雄',
        people: '1,377'
      },
      {
        id:'2',
        area: '南區',
        name: '屏東',
        people: '1,722'
      },
      {
        id:'3',
        area: '東區',
        name: '宜蘭',
        people: '1,244'
      },
      {
        id:'3',
        area: '東區',
        name: '花蓮',
        people: '1,763'
      },
      {
        id:'3',
        area: '東區',
        name: '台東',
        people: '1,893'
      },
    ])
    let locationDisplay = reactive(locations)

    const updateDisplay = () => {
      if (selectedBranch.value === null) {
        locationDisplay = locations;
      }else{
        locationDisplay = locations.filter(item => item.id == selectedValue.value)
      }
    }
    const branches = reactive([
      {
        id:'taipei',
        name : '台北星火中心',
        address:'100台北市中正區忠孝西路一段 100 號',
        phoneNumber: '02-12345678',
        email:'tp@spark.org.tw',
        imgUrl:'pictures/images/sponsor/sponsor-location/tp_spark.png'
      },
      {
        id:'taichung',
        name : '台中星火中心',
        address:'403台中市西區中港路 100 號',
        phoneNumber: '04-12345678',
        email:'tc@spark.org.tw',
        imgUrl:'pictures/images/sponsor/sponsor-location/tc_spark.jpg'
      },
      {
        id:'tainan',
        name : '台南星火中心',
        address:'700台南市中西區民權路 100 號',
        phoneNumber: '06-12345678',
        email:'tn@spark.org.tw',
        imgUrl:'pictures/images/sponsor/sponsor-location/tn_spark.jpg'
      },
      {
        id:'taitung',
        name : '台東星火中心',
        address:'950台東市中正路 100 號',
        phoneNumber: '089-12345678',
        email:'td@spark.org.tw',
        imgUrl:'pictures/images/sponsor/sponsor-location/tt_spark.png'
      }
    ])
    const selectedBranch = ref(null);
    const container = ref(null);
    const card = ref(null);

    const selectBranch = (index) => {
        selectedBranch.value = index;
      }

    const getButtonStyle = (index) => {
        const positions = [
          { top: '10%', right: '18%' },
          { top: '28%', left: '52%' },
          { bottom: '26%', left: '38%' },
          { bottom: '30%', right: '30%' }
        ];
        return positions[index];
      }
      

    const handleClickOutside = (event) => { // event 為 Pointer events ， target 為點擊的位置(HTML節點)
     const classList=['card', 'tag', 'name', 'people'];
      if ([...event.target.classList].some(v=>classList.includes(v))) return;
    if (!container.value.contains(event.target)) { 
      selectedBranch.value = null;
      selectedValue.value = null;
      //如果 event.target 不是 container.value(就是 class branchs)的子節點(顯示據點資訊的框框內) => selectedBranch.value = null; => 不顯示資訊  tips:驚嘆號反轉布林值，因此 container.value.contains(event.target) 為 false 時執行函式(點 container 內部不會關閉彈窗)
    }
    };
    watch(() => selectedBranch.value, () => { 
      //() => selectedBranch.value 會回傳當前的值
      //監看 selectedBranch.value => 有改變就執行下方函式
        if (selectedBranch.value !== null) {
          // 如果有選擇，增加 addEventListener => 點擊 container 外 -> selectedBranch.value = null; (據點彈窗關閉)
          document.addEventListener('click', handleClickOutside);
        } else {
          //如果沒有選擇，移除 addEventListener
          document.removeEventListener('click', handleClickOutside);
        }
      });

    const  selectedValue = ref("null")
    watch(() => selectedValue.value, () => {
        //如果 selectedValue.value 的值有改變，就把它傳進 selectBranch 裡 => 顯示該 index 的資料。
        selectBranch(selectedValue.value);
        updateDisplay()
        if( window.innerWidth >= 1200){
          window.scrollTo({ top: 1000, behavior: 'smooth' });
        }
    })

    const branchDisplay = (key) => {
      selectBranch(key);
      if( window.innerWidth >= 1200){
        window.scrollTo({ top: 600, behavior: 'smooth' });
      }
      
    }
</script>
<template>
  <div class="banner">
    <img :src="'pictures/images/sponsor/sponsor-location/banner.png'" alt="bannerImage" class="PC-banner">
    <img :src="'pictures/images/sponsor/sponsor-location/banner-MB.png'" alt="bannerImage" class="MB-banner">
  </div>
  <div class="container">
    <div class="main_body">
      <h1>{{ h1 }}</h1>
      <div class="map">
        <img :src="'pictures/images/sponsor/sponsor-location/taiwan.png'" alt="taiwanMap">
        <div class="branchs" ref="container" @click="handleClickOutside">
          <select class="filterDistrict" v-model="selectedValue">
            <option value="null">全部</option>
            <option value="0">北部</option>
            <option value="1">中部</option>
            <option value="2">南部</option>
            <option value="3">東部</option>
          </select>
          <!-- 點擊時，將index傳入selectBranch => selectedBranch.value = index;
          {{ }} branches[index].property-->
          <button v-for="(branch, index) in branches" :key="branch.id" @click="selectBranch(index)" :style=getButtonStyle(index)> 
          </button>
          <transition>
            <div class="branch-details" v-if="selectedBranch !== null">
              <div class="text">
                <h2>{{ branches[selectedBranch].name }}</h2>
                <p><i class="fa-solid fa-location-dot"></i>：{{ branches[selectedBranch].address }}</p>
                <p><i class="fa-solid fa-phone"></i>：{{ branches[selectedBranch].phoneNumber }}</p>
                <p><i class="fa-solid fa-envelope"></i>：{{ branches[selectedBranch].email }}</p>
              </div>
              <div class="pic"><img :src="branches[selectedBranch].imgUrl" alt="據點示意圖片"></div>
            </div>
          </transition>

        </div>
      </div>
      <section class="location">
        <div class="card" v-for="(item, index) in locationDisplay" :key="index" @click="branchDisplay(item.id)" ref="card">
          <div class="tag">{{ item.area }}</div>
          <div class="name">
            {{ item.name }}
            <div class="people">扶養&nbsp;<span>{{ item.people }}</span>&nbsp;人</div>
          </div>
        </div>
      </section>
      <div class="deco-stars">
          <img :src="'pictures/decorations/illustration/golden_stars.svg'" alt="星星裝飾">
        </div>
        <div class="deco-bigstar">
          <img :src="'pictures/characters/star/star_superman.svg'" alt="星星裝飾">
        </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/sass/pages/sponsor/sponsor-location';
</style>
