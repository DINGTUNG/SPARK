<script setup>
//data()
import { ref, reactive, computed } from 'vue'
<<<<<<< HEAD
const count = ref(0);

const tanuki = reactive([{
  skills: "cat-mouth",
  food: "sweet-potato"
}, {
  skills: "cat-mouth2",
  food: "sweet-potato2"
}]
);
=======
const count = ref(0)

const tanuki = reactive([
  {
    skills: 'cat-mouth',
    food: 'sweet-potato'
  },
  {
    skills: 'cat-mouth2',
    food: 'sweet-potato2'
  }
])
>>>>>>> 4d728090b7ebf33d6c7aad546ee1ebd347941d0b

// const catMouth = ref("evil");

// const isCute = computed(() =>{
// return catMouth.value == "innocent" ? true : false})

<<<<<<< HEAD

//method()
function plus2() {
  count.value += 2;
=======
//method()
function plus2() {
  count.value += 2
>>>>>>> 4d728090b7ebf33d6c7aad546ee1ebd347941d0b
}

//enum
const MOUTH_TYPE = {
<<<<<<< HEAD
  TRIANGLE: "triangle",
  CATMOUTH: "cat mouth",
  DOGMOUTH: "dog mouth",
  HOLLOW: "hollow"
}

const catMouthSituation = ref(MOUTH_TYPE.TRIANGLE);

const isCute = computed(() => {
  return catMouthSituation.value == MOUTH_TYPE.CATMOUTH || catMouthSituation.value == MOUTH_TYPE.HOLLOW
=======
  TRIANGLE: 'triangle',
  CATMOUTH: 'cat mouth',
  DOGMOUTH: 'dog mouth',
  HOLLOW: 'hollow'
}

const catMouthSituation = ref(MOUTH_TYPE.TRIANGLE)

const isCute = computed(() => {
  return (
    catMouthSituation.value == MOUTH_TYPE.CATMOUTH || catMouthSituation.value == MOUTH_TYPE.HOLLOW
  )
>>>>>>> 4d728090b7ebf33d6c7aad546ee1ebd347941d0b
})

function squeezeTanukiChin() {
  catMouthSituation.value = MOUTH_TYPE.CATMOUTH
}

function releaseTanukiChin() {
  catMouthSituation.value = MOUTH_TYPE.TRIANGLE
}
<<<<<<< HEAD

=======
>>>>>>> 4d728090b7ebf33d6c7aad546ee1ebd347941d0b
</script>

<template>
  <div>
    <button @click="plus2">按下我+2</button>
    {{ count }}

    {{ tanuki[1].skills }}

    is tanuki cute?{{ isCute }}

<<<<<<< HEAD

    <button @mousedown="squeezeTanukiChin" @mouseup="releaseTanukiChin">擠貓嘴</button>

    <img v-if="isCute" src="../images/tanuki/狸貓幹嘛.png" alt="">

    <img v-else src="../images/tanuki/狸貓長方形.png" alt="">

    <!-- <img :src="isCute == true ? '../images/tanuki/狸貓幹嘛.png' : '../images/tanuki/狸貓長方形.png'" alt=""> -->

  </div>
</template>



<style scoped lang="scss">
@import "../sass/base/color";

=======
    <button @mousedown="squeezeTanukiChin" @mouseup="releaseTanukiChin">擠貓嘴</button>

    <img v-if="isCute" src="../images/tanuki/狸貓幹嘛.png" alt="" />

    <img v-else src="../images/tanuki/狸貓長方形.png" alt="" />

    <!-- <img :src="isCute == true ? '../images/tanuki/狸貓幹嘛.png' : '../images/tanuki/狸貓長方形.png'" alt=""> -->
  </div>
</template>

<style scoped lang="scss">
@import '../sass/base/color';
>>>>>>> 4d728090b7ebf33d6c7aad546ee1ebd347941d0b

.box {
  color: $primaryBrandBlue;
}
</style>
