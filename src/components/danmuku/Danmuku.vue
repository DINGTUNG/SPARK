<script setup>
import { onMounted } from 'vue'
import Message from '@/components/danmuku/Message.vue';
import axios from 'axios';
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

async function getData() {
  try {
    const response = await axios.post('http://localhost/SPARK_BACK/php/activity/message-board/get_message.php')

    if (response.data.length > 0) {
      response.data.forEach(element => {
        const message = {
          color: 'default',
          message_content: element.message_content,
          imgSrc: 'pictures/decorations/illustration/little_star_blue.svg'
        }
        messageBoardStore.messages.push(message)
      });
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getData()
})


</script>


<template>
  <div v-for="[id, message] in messageBoardStore.currentDisplayMessages" :key="id">
    <Message :message_content="message.message_content" :color="message.color" :imgSrc="message.imgSrc"
      @atTheEnd="messageBoardStore.removeDisplayMessage(id)" />
  </div>
</template>

<style scoped lang="scss">

</style>
