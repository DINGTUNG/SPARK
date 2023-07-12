import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/home/Home.vue'
import Donate from '../views/pages/donate/Donate.vue'
import Login from '../views/pages/login/Login.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
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
  }
  ]
})

export default router