import { reactive } from 'vue'
import { defineStore } from 'pinia'


export class PaymentMethod {
  constructor(id, display) {
    this.id = id
    this.display = display
  }

  static METHOD = {
    CREDIT_CARD: new PaymentMethod('credit-card', '信用卡'),
    LINE_PAY: new PaymentMethod('line-pay', 'LINE PAY')
  }

  static METHODS = [PaymentMethod.METHOD.CREDIT_CARD, PaymentMethod.METHOD.LINE_PAY]
}

export const usePaymentStore = defineStore('payment', () => {
  
  const chosenMethodType = reactive(PaymentMethod.METHOD.CREDIT_CARD)

  return {
    chosenMethodType
  }
})
