import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//pinia
import { createPinia } from 'pinia'

//animate.css
import 'animate.css'

//Vue3Marquee
import Vue3Marquee from 'vue3-marquee'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

//datepicker
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

//viewFire
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

//VueReCaptcha
import VueReCaptcha from 'vue3-recaptcha2'
import Images from '@/components/func-items/images/Images.vue'

import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives
})



app.use(router)
app.use(pinia)
app.use(Vue3Marquee)
app.use(vuetify)
app.component('VueDatePicker', VueDatePicker)
app.component('Images', Images)

app.use(VueFire, { 
  firebaseApp, 
  modules: [
    VueFireAuth()
  ] })
app.use(VueReCaptcha, { siteKey: '6LdCGEwnAAAAAD5ILm-sPl_6mswpIfvMKY89E-hr' })

app.mount('#app')
