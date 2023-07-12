import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SponsorLocation from '../views/pages/SponsorLocation.vue'
import Home from '../views/pages/Home.vue'
import Donate from '../views/pages/Donate.vue'
import Login from '../views/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login},
      {
        path: '/donate',
        name: 'donate',
        component: Donate}
  ]
})

export default router
