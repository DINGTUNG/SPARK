import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

export class DonateProject {
  constructor(id, ref, imgSrc, title, content, fundSum) {
    this.id = id
    this.ref = ref
    this.imgSrc = imgSrc
    this.title = title
    this.content = content
    this.fundSum = fundSum
  }

  static TYPE = {
    KIDS_SUPPORT: new DonateProject(
      'D001',
      'D001',
      'pictures/images/donate/donate-content/D001_kids_support.jpg',
      '扶幼捐款',
      '支持需要幫助的幼兒。通過捐贈金錢，我們能夠提供營養、醫療、教育和其他基本需求，讓這些幼兒擁有更好的生活和未來。',
      114900
    ),
    KIDS_PROTECTION: new DonateProject(
      'D002',
      'D002',
      'pictures/images/donate/donate-content/D002_kids_protection.jpg',
      '兒童保護',
      '支持兒童保護組織和計劃，確保兒童的安全、健康和福祉。透過捐贈金錢，您可以幫助提供緊急援助、醫療保健、教育、心理支持和法律援助。',
      18800
    ),
    KIDS_SPONSOR: new DonateProject(
      'D003',
      'D003',
      'pictures/images/donate/donate-content/D003_kids_sponsor.jpg',
      '助養召集令',
      '提供受助者孩童所需的經濟援助，為受助者提供穩定的支持，幫助他們改善生活狀況，獲得更好的教育和醫療資源，並提供更積極的未來展望。',
      21500
    ),
    SCHOLARSHIP: new DonateProject(
      'D004',
      'D004',
      'pictures/images/donate/donate-content/D004_scholarship.jpg',
      '獎助學金',
      '支持有潛力但經濟困難的學生，幫助他們實現教育目標並追求更好的未來。您可以資助學生的學費、教材、住宿費用或其他與教育相關的費用。',
      247380
    ),
    EMERGENCY_RELIEF_FUND: new DonateProject(
      'D005',
      'D005',
      'pictures/images/donate/donate-content/D005_emergency_ relief_fund.jpg',
      '急難救助金',
      '支援在緊急情況下遭遇困境的孩童，提供迅速而有效的援助。這些情況可能包括自然災害、人道危機、健康危機、家庭悲劇或其他緊急狀況。',
      107660
    ),
    NUTRITIONAL_SUPPLEMENTS: new DonateProject(
      'D006',
      'D006',
      'pictures/images/donate/donate-content/D006_nutritional_supplements.jpg',
      '營養補助',
      '支持有營養需求但無法獲得足夠營養的人們，提供營養補助食品、營養品、營養教育和餐飲計畫等。有助於改善孩童的營養狀況，促進身體發育和健康。',
      115300
    ),
    SPARK_ACTIVITY: new DonateProject(
      'D007',
      'D007',
      'pictures/images/donate/donate-content/D007_spark_project.jpg',
      '夢想之星',
      '讓孩子們探索自我，提出他們的夢想計畫，並邀請您投給您最愛的組別，為該組爭取「夢想成真」獎金！讓我們一同以熱情激勵，為孩子們的夢想點燃璀璨星火。',
      87900
    ),
    SIAWASE_TANUKI: new DonateProject(
      'D520',
      'D520',
      'pictures/test/tanuki-rectangle.png',
      '幸福狸貓',
      '散播幸福散播愛，請支持並贊助二狸貓熱呼呼的番薯!',
      520
    ),
    DEFAULT: new DonateProject('', '', '', '請選擇捐款方案', '', 0)
  }

  static TYPES = [
    DonateProject.TYPE.KIDS_SUPPORT,
    DonateProject.TYPE.KIDS_PROTECTION,
    DonateProject.TYPE.KIDS_SPONSOR,
    DonateProject.TYPE.SCHOLARSHIP,
    DonateProject.TYPE.EMERGENCY_RELIEF_FUND,
    DonateProject.TYPE.NUTRITIONAL_SUPPLEMENTS,
    DonateProject.TYPE.SPARK_ACTIVITY
  ]
}

export class PriceOption {
  constructor(display, price) {
    this.display = display
    this.price = price
  }

  static TYPE = {
    P100: new PriceOption('100', 100),
    P500: new PriceOption('500', 500),
    P1000: new PriceOption('1000', 1000),
    P2000: new PriceOption('2000', 2000),
    RICH_TANUKI: new PriceOption('好野狸貓', 9999999999)
  }

  static TYPES = [
    PriceOption.TYPE.P100,
    PriceOption.TYPE.P500,
    PriceOption.TYPE.P1000,
    PriceOption.TYPE.P2000,
    PriceOption.TYPE.RICH_TANUKI
  ]
}

export const useDonateCartStore = defineStore('donate-cart', () => {
  const currentRoute = useRoute()
  const isBlurred = ref(false)

  // const currentRoutePath = computed(() => router.currentRoute.value.name)
  // const router = useRouter()

  const onAddToCartClick = () => {
    if (currentRoute.name === 'donate') {
      isBlurred.value = false
    } else {
      isBlurred.value = true
    }
  }

  // 在 SponsorCheckoutSideList 關閉時，移除模糊效果
  const removeToCartClick = () => {
    isBlurred.value = false
  }

  const isSideListShow = ref(false)

  const showSideList = () => {
    isSideListShow.value = true
    onAddToCartClick()
  }

  const showSideListForActivityDonate = () => {
    isSideListShow.value = true
    isBlurred.value = false
  }
  const hideSideList = () => {
    isSideListShow.value = false
    removeToCartClick()
  }

  const chosenDonateProject = reactive(DonateProject.TYPE.DEFAULT)

  const chosenPrice = ref(100)



  return {
    isSideListShow,
    showSideList,
    hideSideList,
    chosenPrice,
    chosenDonateProject,
    isBlurred,
    onAddToCartClick,
    removeToCartClick,
    showSideListForActivityDonate
  }
})
