import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'animate.css'
import Vue3Marquee from 'vue3-marquee'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

const vuetify = createVuetify({
  directives,
  components: {
    ...components,
    ...labsComponents,
  },
})


const pinia = createPinia()
const app = createApp(App)
  


app.use(Vue3Marquee)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app') 



