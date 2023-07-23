import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'animate.css'
import Vue3Marquee from 'vue3-marquee'
import { VueFire, VueFireAuth } from 'vuefire' //引入viewFire
import { firebaseApp } from './firebase' //引入viewFire




const pinia = createPinia()
const app = createApp(App)


app.use(Vue3Marquee)
app.use(router)
app.use(pinia)

//使用viewfire
app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })

  app.mount('#app')
  