import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'animate.css'
import Vue3Marquee from 'vue3-marquee'



const pinia = createPinia()
const app = createApp(App)


app.use(Vue3Marquee)
app.use(router)
app.use(pinia)
app.mount('#app')

