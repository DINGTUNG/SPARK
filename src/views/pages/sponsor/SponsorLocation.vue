
<script setup>
import { onBeforeMount, onBeforeUpdate, reactive, ref } from 'vue';

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
          <img src="@/assets/images/sponsor/sponsor-location/stars.png" alt="星星裝飾">
        </div>
        <div class="deco-bigstar">
          <img src="@/assets/images/sponsor/sponsor-location/bigstar.png" alt="星星裝飾">
        </div>
      </section>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import '@/assets/sass/base/color';
@import '@/assets/sass/base/fonts/fonts-mixin';
@import '@/assets/sass/base/box-shadow';

* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.wrap {
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.banner {
  img {
    width: 100%;
  }
}

h1 {
  @include h1_PC;
  color: $primaryBrandBlue;
  margin-left: 100px;
}

.search-bar {
  width: 300px;
  height: 50px;
  display: flex;
  margin: 20px auto;
}

.map {
  margin: 50px auto;
  width: 420px;

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

.deco-stars {
  position: absolute;
  top: -100px;
  left: -230px;
}

.deco-bigstar {
  position: absolute;
  bottom: 400px;
  right: -350px;
}
</style>
