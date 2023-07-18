import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { register } from 'swiper/element/bundle';

// import '@/assets/sass/style.scss';

const pinia = createPinia()
const app = createApp(App)

app.use(register);

app.use(router)

app.use(pinia)
app.mount('#app')

