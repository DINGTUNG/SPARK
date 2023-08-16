<script setup>
import { ref } from 'vue'
import { useMessageBoardStore } from '@/stores/message-board.js';

import Danmuku from '@/components/danmuku/Danmuku.vue';

const messageBoardStore = useMessageBoardStore();

const userMessage = ref("")

const submitMessage = () => {
  if (userMessage.value == '')
    return
  createMessage(userMessage.value)
  console.log(messageBoardStore.messages);
  messageBoardStore.addNewMessageAndDisplayInstantly(userMessage.value)
  userMessage.value = ''
}

async function createMessage(userMessage) {
  try {
    await messageBoardStore.createMessageBackend(userMessage)

  } catch (error) {
    console.error(error);
  }
}


</script>

<template>
  <p class="text">謝謝您給予孩子們的祝福，祝福語都將在圓夢計畫期間實際實現，並送到孩子們的手中！</p>

  <div class="danmaku">
    <Danmuku />
  </div>

  <div class="input_text">
    <form action="https://tibamef2e.com/chd102/g3/back-end/php/activity/message-board/update_message.php" method="post"
      @submit.prevent="submitMessage">
      <input class="input" id="input" type="text" name="message_content" placeholder="歡迎留下鼓勵孩子們勇敢追夢的話吧！"
        v-model="userMessage" autocomplete="on" @keyup.enter="submitMessage">
      <button type="submit" class="send">Go!</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/sass/sections/spark-activity/message-board.scss';
</style>
