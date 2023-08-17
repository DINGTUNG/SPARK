import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios'

export class DreamStarList {
  constructor(id, imgSrc, routingLink, title, subTitle) {
    this.id = id
    this.imgSrc = imgSrc
    this.routingLink = routingLink
    this.title = title
    this.subTitle = subTitle
  }

  static TOPIC = {
    DS001: new DreamStarList(
      'DS001',
      'pictures/images/spark-activity/dream_star_plan_1.png',
      '/dreamStar',
      '美食大師',
      '烹飪歷險記'
    ),
    DS002: new DreamStarList(
      'DS002',
      'pictures/images/spark-activity/dream_star_plan_2.png',
      '/dreamStar',
      '繪畫奇想',
      '彩筆揮灑繽紛世界'
    ),
    DS003: new DreamStarList(
      'DS003',
      'pictures/images/spark-activity/dream_star_plan_3.png',
      '/dreamStar',
      '音樂星光',
      '樂韻奏鳴的天空旅程'
    ),
    DS004: new DreamStarList(
      'DS004',
      'pictures/images/spark-activity/dream_star_plan_4.png',
      '/dreamStar',
      '體育勇者',
      '挑戰極限勇者之旅'
    ),
    DS005: new DreamStarList(
      'DS005',
      'pictures/images/spark-activity/dream_star_plan_5.png',
      '/dreamStar',
      '環保探險家',
      '地球奇幻護衛隊'
    ),
    DS006: new DreamStarList(
      'DS006',
      'pictures/images/spark-activity/dream_star_plan_6.png',
      '/dreamStar',
      '小科學家',
      '探索神秘世界'
    ),
    DS007: new DreamStarList(
      'DS007',
      'pictures/images/spark-activity/dream_star_plan_7.png',
      '/dreamStar',
      '動物園園長',
      '照顧和保護動物'
    ),
    DS008: new DreamStarList(
      'DS008',
      'pictures/images/spark-activity/dream_star_plan_8.png',
      '/dreamStar',
      '創意手作',
      '動手創造分享喜悅'
    ),
    UNKNOWN: new DreamStarList('unknown-topic', '', '/dreamStar', 0, '未知')
  }

  static TOPICS = [
    DreamStarList.TOPIC.DS001,
    DreamStarList.TOPIC.DS002,
    DreamStarList.TOPIC.DS003,
    DreamStarList.TOPIC.DS004,
    DreamStarList.TOPIC.DS005,
    DreamStarList.TOPIC.DS006,
    DreamStarList.TOPIC.DS007,
    DreamStarList.TOPIC.DS008
  ]

  static getDreamStarFrom = (dreamStarId) => {
    for (let i = 0; i < DreamStarList.TOPICS.length; i++) {
      if (DreamStarList.TOPICS[i].id == dreamStarId) {
        return DreamStarList.TOPICS[i]
      }
    }
    return DreamStarList.TOPIC.UNKNOWN
  }
}

export const useDreamStarStore = defineStore('dream-star', () => {
  const voteRecord = reactive(new Map())

  // dummy data
  // const voteThisProject = (dreamStarId, addCount) => {
  //   let curCount = getCurrentCountInVoteRecord(dreamStarId)
  //   voteRecord.set(dreamStarId, curCount + addCount)

  //   console.log(voteRecord)
  // }

  // const getCurrentCountInVoteRecord = (dreamStarId) => {
  //   return voteRecord.has(dreamStarId) ? voteRecord.get(dreamStarId) : 0
  // }

  const selectedDreamStar = ref('DS003')

  const dreamStarPool = reactive([])

  // db
  function voteThisProjectBackend(dreamStarNo,dreamStarId) {
    // prepare data
    const payLoad = new FormData()
    payLoad.append('dream_star_no', dreamStarNo)
    payLoad.append('dream_star_id', dreamStarId)

    // make a request
    const request = {
      method: 'POST',
      url: `https://tibamef2e.com/chd102/g3/back-end/php/activity/dream-star/update_dream_star_vote_front.php`,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: payLoad
    }

    // send request to backend server
    return new Promise((resolve, reject) => {
      axios(request)
        .then((response) => {
          const createResult = response.data
          resolve(createResult)
        })
        .catch((error) => {
          console.log('From voteThisProjectBackend:', error)
          reject(error)
        })
    })
  }

  const voteThisProjectFromDreamStarPool = (dreamStarNo, dreamStarId) => {
    for (let i = 0; i < dreamStarPool.length; i++) {
      if (dreamStarPool[i].dream_star_no == dreamStarNo) {
        dreamStarPool[i].dream_star_id = dreamStarId
        dreamStarPool[i].dream_star_votes = parseInt(dreamStarPool[i].dream_star_votes) + 1
      }
    }
  }

  // insert vote record
  function insertVoteRecordBackend(dreamStarId) {
    // prepare data
    const payLoad = new FormData()
    payLoad.append('dream_star_id', dreamStarId)

    // make a request
    const request = {
      method: 'POST',
      url: `http://localhost/SPARK_BACK/php/activity/dream-star-vote/create_dream_star_vote_front.php`,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: payLoad
    }

    // send request to backend server
    return new Promise((resolve, reject) => {
      axios(request)
        .then((response) => {
          const createResult = response.data
          resolve(createResult)
        })
        .catch((error) => {
          console.log('From insertVoteRecordBackend:', error)
          reject(error)
        })
    })
  }

  return {
    voteRecord,
    // voteThisProject,
    // getCurrentCountInVoteRecord,
    dreamStarPool,
    voteThisProjectBackend,
    voteThisProjectFromDreamStarPool,
    selectedDreamStar,
    insertVoteRecordBackend
  }
})
