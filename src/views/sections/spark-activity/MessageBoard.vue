<script setup>
import { ref } from 'vue'
import { useMessageBoardStore } from '@/stores/message-board.js';

import Danmuku from '@/components/danmuku/Danmuku.vue';

const messageBoardStore = useMessageBoardStore();

const userMessage = ref("")

const submitMessage = () => {
  if (userMessage.value == '')
    return

  messageBoardStore.addNewMessageAndDisplayInstantly(userMessage.value)
  userMessage.value = ''

}

</script>

<template>
  <p class="text">謝謝您給予孩子們的祝福，祝福語都將在圓夢計畫期間實際實現，並送到孩子們的手中！</p>

  <div class="danmaku">
    <Danmuku />
  </div>

  <div class="input_text">
    <input class="input" id="input" type="text" placeholder="歡迎留下鼓勵孩子們勇敢追夢的話吧！" v-model="userMessage" autocomplete="on">
    <button type="submit" @click="submitMessage" class="send">Go!</button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/sections/spark-activity/message-board.scss';
</style>
