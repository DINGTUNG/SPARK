import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { register } from 'swiper/element/bundle';

// import '@/assets/sass/style.scss';

const app = createApp(App)

app.use(register);

app.use(router)

app.mount('#app')

