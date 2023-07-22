import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { register } from 'swiper/element/bundle';
import Vue3Marquee from 'vue3-marquee'



const pinia = createPinia()
const app = createApp(App)


app.use(Vue3Marquee)
app.use(register);
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')

