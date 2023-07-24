import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'animate.css'
import Vue3Marquee from 'vue3-marquee'
import { VueFire, VueFireAuth } from 'vuefire' //引入viewFire
import { firebaseApp } from './firebase' //引入viewFire
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const pinia = createPinia()
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})


app.use(Vue3Marquee)
app.use(router)
app.use(pinia)
app.use(vuetify)

//使用viewfire
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
})


app.mount('#app') 
