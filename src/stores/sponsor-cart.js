import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'
import axios from 'axios'

export class Location {
  constructor(id, name, cost, img) {
    this.id = id
    this.name = name
    this.cost = cost
    this.img = img
  }

  static TYPE = {
    TAIPEI: new Location(
      'taipei',
      '台北星火',
      2000,
      'pictures/decorations/illustration/location.svg'
    ),
    TAICHUNG: new Location(
      'taichung',
      '台中星火',
      2000,
      'pictures/decorations/illustration/location.svg'
    ),
    TAINAN: new Location(
      'tainan',
      '台南星火',
      2000,
      'pictures/decorations/illustration/location.svg'
    ),
    TAITUNG: new Location(
      'taitung',
      '台東星火',
      2000,
      'pictures/decorations/illustration/location.svg'
    ),
    TANUKILAND: new Location('tanukiland', '星之狸貓', 520, 'pictures/test/禿頭海豹貓嘴2.png'),
    UNKNOWN: new Location(
      'unknown-type',
      '未知',
      0,
      'pictures/decorations/illustration/location.svg'
    )
  }

  static TYPES = [
    Location.TYPE.TAIPEI,
    Location.TYPE.TAICHUNG,
    Location.TYPE.TAINAN,
    Location.TYPE.TAITUNG,
    Location.TYPE.TANUKILAND
  ]

  static getLocationFrom = (locationId) => {
    for (let i = 0; i < Location.TYPES.length; i++) {
      if (Location.TYPES[i].id == locationId) {
        return Location.TYPES[i]
      }
    }
    return Location.TYPE.UNKNOWN
  }
}

export class PaymentPlan {
  constructor(display, period) {
    this.display = display
    this.period = period
  }

  static TYPE = {
    MONTH: new PaymentPlan('月', 1),
    QUARTER: new PaymentPlan('季', 3),
    HALF_YEAR: new PaymentPlan('半年', 6),
    YEAR: new PaymentPlan('年', 12)
  }

  static TYPES = [
    PaymentPlan.TYPE.MONTH,
    PaymentPlan.TYPE.QUARTER,
    PaymentPlan.TYPE.HALF_YEAR,
    PaymentPlan.TYPE.YEAR
  ]
}

export const useSponsorCartStore = defineStore('sponsor-cart', () => {
  const isBlurred = ref(false)

  const onAddToCartClick = () => {
    isBlurred.value = !isBlurred.value
    // isSideListShow = isBlurred.value;
  }

  // 在 SponsorCheckoutSideList 關閉時，移除模糊效果
  const removeToCartClick = () => {
    isBlurred.value = false
  }

  //判斷購物車收合
  const isSideListShow = ref(false)
  watch(isSideListShow, (nVal) => {})

  const showSideList = () => {
    isSideListShow.value = true
    onAddToCartClick()
  }

  const hideSideList = () => {
    isSideListShow.value = false
    removeToCartClick()
  }

  // const cart = reactive(new Map())

  // const isCartEmpty = computed(() => {
  //   return cart.size === 0
  // })

  // const isCartNotEmpty = computed(() => {
  //   return cart.size !== 0
  // })

  // const addToCart = (locationId, addCount) => {
  //   let curCount = getCurrentCountInCart(locationId)
  //   cart.set(locationId, curCount + addCount)
  // }

  // const removeFromCart = (locationId, removeCount) => {
  //   let curCount = getCurrentCountInCart(locationId)
  //   let remainCount = curCount - removeCount

  //   if (remainCount > 0) {
  //     cart.set(locationId, remainCount)
  //   } else {
  //     cart.delete(locationId)
  //   }
  // }

  // const getCurrentCountInCart = (locationId) => {
  //   return cart.has(locationId) ? cart.get(locationId) : 0
  // }

  // const totalCost = computed(() => {
  //   let cost = 0

  //   cart.forEach((count, locationId) => {
  //     cost += getLocationTotalCost(locationId)
  //   })
  //   return cost
  // })

  // const getLocationTotalCost = (locationId) => {
  //   let count = getCurrentCountInCart(locationId)
  //   let locationCost = getLocationCost()
  //   return count * locationCost
  // }

  // const getLocationCost = (locationId) => {
  //   return Location.getLocationFrom(locationId).cost
  // }

  const chosenPlanType = reactive(PaymentPlan.TYPE.MONTH)

  //////////////// connect ////////////////////

  const sponsorLocationList = reactive([])
  // const getLocationFromSponsorCart =

  const cart = reactive(new Map())

  const isCartEmpty = computed(() => {
    return cart.size === 0
  })

  const isCartNotEmpty = computed(() => {
    return cart.size !== 0
  })

  const addToCart = (locationId, addCount) => {
    let curCount = getCurrentCountInCart(locationId)
    cart.set(locationId, curCount + addCount)
    console.log(cart)
  }

  const removeFromCart = (locationId, removeCount) => {
    let curCount = getCurrentCountInCart(locationId)
    let remainCount = curCount - removeCount

    if (remainCount > 0) {
      cart.set(locationId, remainCount)
    } else {
      cart.delete(locationId)
    }
  }

  const getCurrentCountInCart = (locationId) => {
    return cart.has(locationId) ? cart.get(locationId) : 0
  }

  const totalCost = computed(() => {
    let cost = 0

    cart.forEach((count, locationId) => {
      cost += getLocationTotalCost(locationId)
    })
    return cost
  })

  const getLocationTotalCost = (locationId) => {
    let count = getCurrentCountInCart(locationId)
    let locationCost = getLocationCost()
    return count * locationCost
  }

  const getLocationCost = () => {
    return 2000
  }

  const getLocationFromSponsorLocationList = (locationId) => {
    for (let i = 0; i < sponsorLocationList.length; i++) {
      if (sponsorLocationList[i].location_id == locationId) {
        return sponsorLocationList[i].location_name
      }
    }
  }

  return {
    isSideListShow,
    showSideList,
    hideSideList,
    cart,
    isCartEmpty,
    isCartNotEmpty,
    addToCart,
    removeFromCart,
    getCurrentCountInCart,
    totalCost,
    getLocationTotalCost,
    getLocationCost,
    chosenPlanType,
    isBlurred,
    onAddToCartClick,
    removeToCartClick,
    sponsorLocationList,
    getLocationFromSponsorLocationList
  }
})
