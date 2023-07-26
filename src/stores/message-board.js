import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
export const useMessageBoardStore = defineStore('message-board', () => {
  const messages = reactive([
    {
      color: 'default',
      content: '狸貓小呆瓜'
    },
    {
      color: 'default',
      content: '狸貓小胖瓜'
    },
    {
      color: 'default',
      content: '狸貓小豬瓜'
    },
    {
      color: 'default',
      content: '狸貓小地瓜'
    },
    {
      color: 'default',
      content: '狸貓小西瓜'
    }
  ])

  const autoId = ref(0)

  const currentDisplayMessages = reactive(new Map())

  const addNewMessage = (messageObject) => {
    messages.push(messageObject)
  }

  const addNewMessageAndDisplayInstantly = (message) => {
    const messageObject = {
      color: 'red',
      content: message
    }

    createDisplayMessage(messageObject)
    addNewMessage(messageObject)
  }

  const removeOldestMessage = () => {
    return messages.shift()
  }

  const createDisplayMessage = (messageObject) => {
    currentDisplayMessages.set(autoId.value, messageObject)
    autoId.value += 1
  }
  const removeDisplayMessage = (id) => {
    currentDisplayMessages.delete(id)
  }

  return {
    messages,
    autoId,
    currentDisplayMessages,
    addNewMessage,
    removeOldestMessage,
    createDisplayMessage,
    removeDisplayMessage,
    addNewMessageAndDisplayInstantly
  }
})
