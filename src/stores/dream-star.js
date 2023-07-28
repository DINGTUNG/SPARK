import {
  defineStore
} from 'pinia'
// import { reactive } from 'vue'

export class DreamStarPlanList {
  constructor(id, imgSrc, routingLink, vote, title, subTitle) {
    this.id = id
    this.imgSrc = imgSrc
    this.routingLink = routingLink
    this.vote = vote
    this.title = title
    this.subTitle = subTitle
  }

  static TOPIC = {
    DS001: new DreamStarPlanList(
      'DS001',
      'pictures/images/spark-activity/dream_star_plan_1.png',
      '/dreamStar',
      197,
      '美食大師',
      '烹飪歷險記'
    ),
    DS002: new DreamStarPlanList(
      'DS002',
      'pictures/images/spark-activity/dream_star_plan_2.png',
      '/dreamStar',
      255,
      '繪畫奇想',
      '彩筆揮灑繽紛世界'
    ),
    DS003: new DreamStarPlanList(
      'DS003',
      'pictures/images/spark-activity/dream_star_plan_3.png',
      '/dreamStar',
      255,
      '音樂星光',
      '樂韻奏鳴的天空旅程'
    ),
    DS004: new DreamStarPlanList(
      'DS004',
      'pictures/images/spark-activity/dream_star_plan_4.png',
      '/dreamStar',
      328,
      '體育勇者',
      '挑戰極限勇者之旅'
    ),
    DS005: new DreamStarPlanList(
      'DS005',
      'pictures/images/spark-activity/dream_star_plan_5.png',
      '/dreamStar',
      332,
      '環保探險家',
      '地球奇幻護衛隊'
    ),
    DS006: new DreamStarPlanList(
      'DS006',
      'pictures/images/spark-activity/dream_star_plan_6.png',
      '/dreamStar',
      255,
      '小科學家',
      '探索神秘世界'
    ),
    DS007: new DreamStarPlanList(
      'DS007',
      'pictures/images/spark-activity/dream_star_plan_7.png',
      '/dreamStar',
      146,
      '動物園園長',
      '照顧和保護動物'
    ),
    DS008: new DreamStarPlanList(
      'DS008',
      'pictures/images/spark-activity/dream_star_plan_8.png',
      '/dreamStar',
      146,
      '創意手作',
      '動手創造分享喜悅'
    ),
    UNKNOWN: new DreamStarPlanList(
      'unknown-topic',
      '',
      '/dreamStar',
      0,
      '未知'
    )
  }

  static TOPICS = [
    DreamStarPlanList.TOPIC.DS001,
    DreamStarPlanList.TOPIC.DS002,
    DreamStarPlanList.TOPIC.DS003,
    DreamStarPlanList.TOPIC.DS004,
    DreamStarPlanList.TOPIC.DS005,
    DreamStarPlanList.TOPIC.DS006,
    DreamStarPlanList.TOPIC.DS007,
    DreamStarPlanList.TOPIC.DS008
  ]


  static getDreamStarPlanFrom = (dreamStarPlan) => {
    for (let i = 0; i < DreamStarPlanList.TOPICS.length; i++) {
      if (DreamStarPlanList.TOPICS[i].id == dreamStarPlan) {
        return DreamStarPlanList.TOPICS[i]
      }
    }
    return DreamStarPlanList.TOPIC.UNKNOWN;
  }
}


export const useDreamStarStore = defineStore('dream-star', () => {

  // const voteRecord = reactive(new Map())

  // const vote = (DreamStarPlanList) => {
  //   let curCount = DreamStarPlanList.vote
  //   voteRecord.set(dreamStarPlan, curCount + 1)
  // }

  // const getCurrentCountInVoteRecord = (dreamStarPlan) => {
  //   return voteRecord.has(dreamStarPlan) ? voteRecord.get(dreamStarPlan) : 0
  // }

  return {
    // voteRecord,
    // vote,
    // getCurrentCountInVoteRecord
  }
})