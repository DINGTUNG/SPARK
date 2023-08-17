import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios';
export const useMessageBoardStore = defineStore('message-board', () => {
  const messages = reactive([])

  const autoId = ref(0)

  const currentDisplayMessages = reactive(new Map())

  const addNewMessage = (messageObject) => {
    messages.push(messageObject)
  }

  const addNewMessageAndDisplayInstantly = (message) => {
    const messageObject = {
      color: 'user',
      message_content: message,
      imgSrc: 'pictures/decorations/illustration/little_star_yellow.svg'
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


  function createMessageBackend(messageContent) {
    // prepare data 
    const payLoad = new FormData();
    payLoad.append("message_content", messageContent);

    // make a request
    const request = {
      method: "POST",
      url: `https://tibamef2e.com/chd102/g3/back-end/php/activity/message-board/create_message.php`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: payLoad,
    };

    // send request to backend server
    return new Promise((resolve, reject) => {
      axios(request)
        .then((response) => {
          const createResult = response.data;
          resolve(createResult);
        })
        .catch((error) => {
          console.log("From createMessageBackend:", error);
          reject(error);
        });
    });
  }


const dummyMessages = reactive([
      {
        color: 'default',
        content: '狸貓小呆瓜',
        imgSrc: 'pictures/test/禿頭海豹吸血鬼.png'
      },
      {
        color: 'default',
        content: '狸貓小胖瓜',
        imgSrc: 'pictures/test/狸貓側寫2.png'
      },
      {
        color: 'default',
        content: '狸貓小豬瓜',
        imgSrc: 'pictures/test/禿頭海豹呆滯.png'
      },
      {
        color: 'default',
        content: '狸貓小地瓜',
        imgSrc: 'pictures/test/狸貓眼裡無人.png'
      },
      {
        color: 'default',
        content: '狸貓小西瓜',
        imgSrc: 'pictures/test/狸貓兔子.png'
      },
      {
        color: 'default',
        content: '狸貓大地鼠',
        imgSrc: 'pictures/test/狸貓謎樣.png'
      },
      {
        color: 'default',
        content: '狸貓大黃蜂',
        imgSrc: 'pictures/test/狸貓肚子外露倒下.png'
      },
      {
        color: 'default',
        content: '狸貓炸彈',
        imgSrc: 'pictures/test/狸貓側臉.png'
      },
  
      {
        color: 'default',
        content: '狸貓使魔',
        imgSrc: 'pictures/test/狸貓寶寶.png'
      },
      {
        color: 'star_turtle',
        content: '星龜',
        imgSrc: 'pictures/test/狸貓在星龜身上黏嘴巴.png'
      },
      {
        color: 'tiny_tanuki',
        content: '小狸貓',
        imgSrc: 'pictures/test/小狸貓可愛愛.png'
      },
      {
        color: 'charlie_brown',
        content: '查理布朗',
        imgSrc: 'pictures/test/查理.png'
      },
      {
        color: 'phone_phone',
        content: '狸貓封封',
        imgSrc: 'pictures/test/狸猫封封.png'
      },
      {
        color: 'wasp',
        content: '黃蜂',
        imgSrc: 'pictures/test/黃蜂.gif'
      },
      {
        color: 'mole',
        content: '大地鼠',
        imgSrc: 'pictures/test/大地鼠.gif'
      },
      {
        color: 'float_bomb',
        content: '漂浮炸彈',
        imgSrc: 'pictures/test/漂浮炸彈.gif'
      }
    ])

  return {
    messages,
    autoId,
    currentDisplayMessages,
    addNewMessage,
    removeOldestMessage,
    createDisplayMessage,
    removeDisplayMessage,
    addNewMessageAndDisplayInstantly,
    createMessageBackend,
    dummyMessages
  }
})
