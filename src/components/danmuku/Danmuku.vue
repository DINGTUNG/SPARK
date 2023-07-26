<script setup>
import { onMounted } from 'vue'
import Message from '@/components/danmuku/Message.vue';
import { useMessageBoardStore } from '@/stores/message-board.js';

const messageBoardStore = useMessageBoardStore();

const duration = 2000

onMounted(() => {
  setInterval(createDisplayMessages, duration);
})


const createDisplayMessages = () => {
  const message = messageBoardStore.removeOldestMessage()
  messageBoardStore.createDisplayMessage(message)
  messageBoardStore.addNewMessage(message)
}


</script>


<template>
  <div v-for="[id, message] in messageBoardStore.currentDisplayMessages" :key="id">
    <Message :content="message.content" :color="message.color" @atTheEnd="messageBoardStore.removeDisplayMessage(id)" />
  </div>
</template>

<style scoped lang="scss">
@import'@/assets/sass/components/danmuku/danmuku.scss';
</style>
