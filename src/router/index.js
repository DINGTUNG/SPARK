import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Donate from '../views/pages/Donate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate


      
    }
  ]
})

export default router
