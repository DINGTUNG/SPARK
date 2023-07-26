<script setup>
import { ref, onMounted, computed, defineEmits } from 'vue';
import { defineProps } from 'vue'

const props = defineProps({
  content: String,
  color: String,
  imgSrc: String
})

const emit = defineEmits(['atTheEnd'])

const direction = (getRandom(0, 10) < 5) ? "left" : "right"

const speed = getRandom(1, 12) * 1000
const location = ref(direction + "_start")
const delay = 500
const offset = `${getRandom(0, 50)}%`

const duration = computed(() => {
  return (speed / 1000) + "s"
})


onMounted(() => {
  setTimeout(() => {
    location.value = direction + "_end"
  }, delay)
  setTimeout(() => {
    emit('atTheEnd')
  }, speed + delay)
})

function getRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
};

</script>

<template>
  <div class="message_wrap marquee_animate" :class="[location, (getRandom(0, 10) < 5) ? 'top_offset' : 'bottom_offset']">

    <div class="img_wrap">
      <img :src="props.imgSrc" alt="">
    </div>

    <span class="message" :class="props.color">
      {{ props.content }}
    </span>

  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/danmuku/message.scss';

div.message_wrap {
  position: absolute;
  @include flex_vm;


  span.message {
    cursor: pointer;
    padding: 1vw 2vw;
    display: inline-block;
    text-align: center;
    border-radius: 100px;
    font-size: $h4Fs_PC;
    font-weight: bold;
    z-index: 10;
  }

  div.img_wrap {
    // border: 1px solid black;
    width: 8vw;
    height: 8vw;
    z-index: -10;
    position: absolute;
    top: -22vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    cursor: pointer;

    img {
      transform: translateY(50%);
      width: 8vw;

      &:hover {
        transform: scale(5);
      }

    }

  }

}

.left_start {
  left: 0;

  transform: translateX(-100%);
}

.left_end {
  left: 0;

  transform: translateX(100vw);
}


.right_start {
  right: 0;

  transform: translateX(100%);
}

.right_end {
  // right: 100vw;
  right: 0;

  transform: translateX(-100vw);
}

.marquee_animate {
  transition-property: all;
  // transition-duration: 4s;

  transition-duration: v-bind(duration);
  transition-timing-function: linear;
}

.top_offset {
  top: v-bind(offset);
}

.bottom_offset {
  bottom: v-bind(offset);
}


.default {
  background-color: $messageColor;
  color: $primaryBrandBlue;
}

.user {
  background-color: $primaryBgBlue;
  color: $primaryBrandWhite;
}

.tiny_tanuki {
  background-color: purple;
  color: gold;
}
</style>
