<script setup>
import { ref } from 'vue'

const 認養紀錄 = ref(false) //預設一進到會員中心的畫面
const 捐款紀錄 = ref(false)
const 會員資料 = ref(false)
const 感謝函專區 = ref(false)

const 要呈現的畫面 = () => {
  if (點擊捐款紀錄按鈕) {
    認養紀錄.value = false
    捐款紀錄.value = true
  } else if (點擊會員資料按鈕) {
    捐款紀錄.value = false
    會員資料.value = true
  } else if (點擊感謝函專區按鈕) {
    會員資料.value = false
    感謝函專區.value = true
  } else if (點擊認養紀錄按鈕) {
    感謝函專區.value = false
    認養紀錄.value = true
  }

}

</script>

<template>
  <div class="container">

    <div class="main_body">

      <div class="按鈕">
        <button>認養紀錄</button>
        <button>捐款紀錄</button>
        <button>會員資料</button>
        <button>感謝函專區</button>
      </div>


      <div v-if="認養紀錄" class="認養紀錄">
        <認養紀錄 />
      </div>

      <div v-else-if="捐款紀錄" class="捐款紀錄">
        <捐款紀錄 />
      </div>

      
      <div v-else-if="會員資料" class="會員資料">
        <會員資料 />
      </div>


      <div v-else-if="感謝函專區" class="感謝函專區">
        <感謝函專區 />
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss"></style>
