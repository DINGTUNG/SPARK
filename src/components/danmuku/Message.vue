<script setup>
import { ref, onMounted, computed, defineEmits } from 'vue';
import { defineProps } from 'vue'

const props = defineProps({
  content: String,
  color: String
})

const emit = defineEmits(['atTheEnd'])

const speed = getRandom(6, 12) * 1000
const location = ref("right_start")
const delay = 500
const offset = `${getRandom(0, 50)}%`

const duration = computed(() => {
  return (speed / 1000) + "s"
})


onMounted(() => {
  setTimeout(() => {
    location.value = "right_end"
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

    <span class="message" :class="props.color">
      {{ props.content }}
    </span>

  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/danmuku/message.scss';

div.message_wrap {
  position: absolute;

  span.message {
    cursor: pointer;
    padding: 1vw 2vw;
    display: inline-block;
    text-align: center;
    border-radius: 100px;
    font-size: $h4Fs_PC;
    font-weight: bold;
  }

}

.left_start {
  left: 0;

  // transform: translateX(-100%);
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

.red {
  background-color: red;
  color: white;
}
</style>
