<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Donate from '../views/pages/Donate.vue'
import Login from '../views/pages/Login.vue'
import News from '../views/pages/News.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

=======
import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/pages/home/Home.vue'
import Login from '../views/pages/login/Login.vue'
import Donate from '../views/pages/donate/Donate.vue'


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
>>>>>>> bb1e086b6fa7bb50880d1b18ef84718e4c07d4ac
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
<<<<<<< HEAD
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
=======
    }
>>>>>>> bb1e086b6fa7bb50880d1b18ef84718e4c07d4ac
  ]
})

export default router