
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
      name : '台北星火中心',
      address:'100台北市中正區忠孝西路一段 100 號',
      phoneNumber: '02-12345678',
      email:'tp@spark.org.tw'
    },
    {
      name : '台中星火中心',
      address:'403台中市西區中港路 100 號',
      phoneNumber: '04-12345678',
      email:'tc@spark.org.tw'
    },
    {
      name : '台南星火中心',
      address:'700台南市中西區民權路 100 號',
      phoneNumber: '06-12345678',
      email:'tn@spark.org.tw'
    },
    {
      name : '台東星火中心',
      address:'950台東市中正路 100 號',
      phoneNumber: '089-12345678',
      email:'td@spark.org.tw'
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
    <img src="@/assets/images/sponsor/sponsor-location/banner.png" alt="bannerImage">
  </div>
  <div class="wrap">
    <div class="container">
      <h1>{{ h1 }}</h1>
      <div class="map">
        <img src="@/assets/images/sponsor/sponsor-location/taiwan.png" alt="taiwanMap">
        <div class="branchs" ref="container" @click="handleClickOutside">

          <button v-for="(branch, index) in branches" :key="index" @click="selectBranch(index)" :style=getButtonStyle(index)>
          </button>
          <div class="introduce" v-if="selectedBranch !== null">
            <h2>{{ branches[selectedBranch].name }}</h2>
            <p><i class="fa-solid fa-location-dot"></i>：{{ branches[selectedBranch].address }}</p>
            <p><i class="fa-solid fa-phone"></i>：{{ branches[selectedBranch].phoneNumber }}</p>
            <p><i class="fa-solid fa-envelope"></i>：{{ branches[selectedBranch].email }}</p>
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
          <img src="@/assets/decorations/illustration/golden_stars.png" alt="星星裝飾">
        </div>
        <div class="deco-bigstar">
          <img src="@/assets/characters/star/star_superman.svg" alt="星星裝飾">
        </div>
      </section>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/sass/base/color';
@import '@/assets/sass/base/fonts/fonts-mixin';
@import '@/assets/sass/base/box-shadow';
@import '@/assets/sass/base/border-radius';

div.wrap {
  width: 100%;
  overflow-x: hidden;
}

div.container {
  max-width: 1200px;
  margin: auto;
}

div.banner {
  img {
    width: 100%;
  }
}

h1 {
  @include h1_PC;
  color: $primaryBrandBlue;
  margin-left: 100px;
}

input.search-bar {
  width: 300px;
  height: 50px;
  display: flex;
  margin: 20px auto;
}

div.map {
  margin: 50px auto;
  width: 420px;
  position: relative;
  box-sizing: border-box;
  div.branchs{
    button{
        position: absolute;
        background-color: $secondaryLightGold2;
        border: none;
        width: 15px;
        height: 15px;
        padding: 0;
        border-radius:50%;
        box-shadow: 0 0 8px 5px $secondaryLightGold1;  
        cursor: pointer;
        &:hover{
          background-color:$primaryAccentGold;
          scale: 1.05; 
        }
      }
    div.introduce{
          border-radius:$br_PC; 
          @include boxShadow_PC;
          padding: 40px;
          background-color: $primaryBgWhite;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          h2{
            @include h2_PC;
            color: $primaryBrandBlue;
          }
          i{
            color:$primaryBrandBlue;
          }
          p{
            @include h5_PC;
          }
      }
  }

  img {
    width: 100%;
  }
}

.location {
  position: relative;
  display: flex;
  width: 974px;
  flex-wrap: wrap;
  margin: auto;
  justify-content: start;
  gap: 50px;
  align-content: space-around;

  .card {
    box-sizing: border-box;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-flow: column;
    width: 290px;
    background-color: $primaryBrandBlue;
    color: #fff;
    @include h6_PC;
    transition: .3s;

    &:hover {
      background-color: $secondaryLightBlue1;
      color: $basicFontColor;
      @include boxShadow_PC;
      cursor: pointer;
    }

    .tag {
      @include h4_PC;
      margin-bottom: 20px;
    }

    .name {
      @include h2_PC;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;

      .people {
        @include h6_PC;

        span {
          @include h5_PC;
          padding: 0 5px;
        }
      }
    }
  }
}

div.deco-stars {
  position: absolute;
  top: -100px;
  left: -230px;
}

div.deco-bigstar {
  position: absolute;
  bottom: 400px;
  right: -350px;
}
</style>
