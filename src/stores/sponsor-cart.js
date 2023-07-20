import {
  defineStore
} from 'pinia';

import {
  ref,
  reactive,
  computed
} from 'vue';


export const useSponsorCartStore = defineStore('sponsor-cart', () => {


  const isSideListShow = ref(false);

  const showSideList = () => {
    isSideListShow.value = true;
  }

  const hideSideList = () => {
    isSideListShow.value = false;
  }

  class Location {
    constructor(id, name, cost) {
      this.id = id;
      this.name = name;
      this.cost = cost;
    }
  }

  const locationList = [
    new Location("taipei", "台北星火", 2000),
    new Location("taichung", "台中星火", 2000),
    new Location("tainan", "台南星火", 2000),
    new Location("taitung", "台東星火", 2000)
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

  }
})