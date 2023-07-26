<script setup>
import vueDanmaku from 'vue3-danmaku'
import { watch, reactive } from 'vue'
import { useMessageBoardStore } from '@/stores/message-board.js';

import Message from '@/components/danmuku/Message.vue';

const MessageBoardStore = useMessageBoardStore();

watch(MessageBoardStore.messageInput, (newMes, oldMes) => {
  console.log('watch search', newMes, oldMes)
})

const danmus = MessageBoardStore.messageStore

</script>

<template>
      <p class="text">謝謝您給予孩子們的祝福，祝福語都將在圓夢計畫期間實際實現，並送到孩子們的手中！</p>
  <div class="danmaku">

    <Message />
    <!-- 
    <vue-danmaku class="vue_danmaku" ref="danmaku" v-model:danmus="danmus" useSlot loop :channels="3" :speed=100
      :randomChannel=true>

      <template v-slot:dm="{ index, danmu }">
        <span class="message">{{ danmu.text }}</span>
      </template>

    </vue-danmaku> -->
  </div>

  <div class="input_text">
    <input class="input" id="input" type="text" placeholder="歡迎留下鼓勵孩子們勇敢追夢的話吧！" v-model="MessageBoardStore.messageInput">
    <button @click="MessageBoardStore.addMessageIntoMessageStore(MessageBoardStore.messageInput)"
      class="send">Go!</button>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/sections/spark-activity/message-board.scss';
</style>
