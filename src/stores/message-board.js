import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
export const useMessageBoardStore = defineStore('message-board', () => {
  const messageStore = reactive([
    {
      text: '狸貓小呆瓜'
    },
    {
      text: '狸貓小胖瓜'
    },
    {
      text: '狸貓小豬瓜'
    },
    {
      text: '狸貓小地瓜'
    },
    {
      text: '狸貓小西瓜'
    }
  ])

  const messageInput = ref('')

  const addMessageIntoMessageStore = (messageInput) => {
    messageStore.push({
      text: messageInput
    })
    document.getElementById('input').value = ''
    console.log(messageStore)
  }

  return {
    messageStore,
    messageInput,
    addMessageIntoMessageStore
  }
})
