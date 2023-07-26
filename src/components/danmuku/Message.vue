<script setup>
import { ref, onMounted } from 'vue';

const testOffset = ref("0")

function test() {
  testOffset.value = '200px'
}

const root = ref(null)

onMounted(() => {
  console.log(root);
})


</script>

<template>
  <div ref="root" class="message_wrap test_right">

    <!-- <span @click="test" class="message">
      狸貓仔!!!大肥豬!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    </span> -->

  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/danmuku/message.scss';

div.message_wrap {
  position: absolute;
  animation: marquee 10s linear;

  span.message {
    cursor: pointer;
    padding: 1vw 2vw;
    display: inline-block;
    text-align: center;
    border-radius: 100px;
    background-color: $messageColor;
    font-size: $h4Fs_PC;
    color: $primaryBrandBlue;
    font-weight: bold;

  }

}

.test {
  right: v-bind(testOffset);
}

.test_left {
  left: v-bind(testOffset);
  transform: translateX(-100%);
}

.test_right {
  right: v-bind(testOffset);
  transform: translateX(100%);
}


@keyframes marquee {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(-100vw);
  }
}
</style>
