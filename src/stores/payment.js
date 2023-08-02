import { reactive } from 'vue'
import { defineStore } from 'pinia'


export class PaymentMethod {
  constructor(id, display) {
    this.id = id
    this.display = display
  }

  static METHOD = {
    CREDIT_CARD: new PaymentMethod('credit-card', '信用卡'),
    CONVENIENCE_STORE: new PaymentMethod('convenience-store', '超商繳費')
  }

  static METHODS = [PaymentMethod.METHOD.CREDIT_CARD, PaymentMethod.METHOD.CONVENIENCE_STORE]
}

export const usePaymentStore = defineStore('payment', () => {
  
  const chosenMethodType = reactive(PaymentMethod.METHOD.CREDIT_CARD)

  return {
    chosenMethodType
  }
})
