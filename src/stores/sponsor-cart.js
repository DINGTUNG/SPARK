import {
  defineStore
} from 'pinia';

import {
  ref,
  reactive,
  computed
} from 'vue';

export class PaymentPlan {

  constructor(display, period) {
    this.display = display;
    this.period = period;
  }

  static TYPE = {
    MONTH: new PaymentPlan("月", 1),
    QUARTER: new PaymentPlan("季", 3),
    HALF_YEAR: new PaymentPlan("半年", 6),
    YEAR: new PaymentPlan("年", 12)
  };

  static TYPES = [
    PaymentPlan.TYPE.MONTH,
    PaymentPlan.TYPE.QUARTER,
    PaymentPlan.TYPE.HALF_YEAR,
    PaymentPlan.TYPE.YEAR,
  ]

}

export class Location {
  constructor(id, name, cost, img) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.img = img
  }
}

export const useSponsorCartStore = defineStore('sponsor-cart', () => {



  

  //判斷購物車收合
  const isSideListShow = ref(false);

  const showSideList = () => {
    isSideListShow.value = true;
  }

  const hideSideList = () => {
    isSideListShow.value = false;
  }



  const locationList = [
    new Location("taipei", "台北星火", 2000, "public/pictures/decorations/illustration/location.svg"),
    new Location("taichung", "台中星火", 2000, "public/pictures/decorations/illustration/location.svg"),
    new Location("tainan", "台南星火", 2000, "public/pictures/decorations/illustration/location.svg"),
    new Location("taitung", "台東星火", 2000, "public/pictures/decorations/illustration/location.svg")
  ];

  const cart = reactive(
    new Map()
  );

  const isCartEmpty = computed(() => {
    return cart.size === 0
  })

  const isCartNotEmpty = computed(() => {
    return cart.size !== 0
  })

  const addToCart = (locationId, addCount) => {
    let curCount = getCurrentCountInCart(locationId);
    cart.set(locationId, curCount + addCount);
  }

  const removeFromCart = (locationId, removeCount) => {
    let curCount = getCurrentCountInCart(locationId);
    let remainCount = curCount - removeCount;

    if (remainCount > 0) {
      cart.set(locationId, remainCount);
    } else {
      cart.delete(locationId)
    }
  }

  const getCurrentCountInCart = (locationId) => {
    return (cart.has(locationId)) ? cart.get(locationId) : 0;
  }

  const totalCost = computed(() => {
    let cost = 0;

    cart.forEach((count, locationId) => {
      // console.log(count, (locationId));

      cost += getLocationTotalCost(locationId)
    });

    return cost;
  });

  const getLocationTotalCost = (locationId) => {
    let count = getCurrentCountInCart(locationId);
    let locationCost = getLocationCost(locationId);
    return count * locationCost;
  }


  const getLocationCost = (locationId) => {
    for (let i = 0; i < locationList.length; i++) {
      if (locationList[i].id == locationId) {
        return locationList[i].cost;
      }
    }

    return 0;
    //例外處理
  }


  const chosenPlanType = reactive(PaymentPlan.TYPE.MONTH);


  const paymentMethodList = [{
      id: "credit-card",
      method: "信用卡",
      chosen: true
    }, {
      id: "line-pay",
      method: "LINE PAY",
      chosen: false
    }

  ]


  return {
    isSideListShow,
    showSideList,
    hideSideList,
    locationList,
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
    paymentMethodList


  }
})