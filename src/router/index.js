import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
// import HomeView from '../views/HomeView.vue'
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
        component: Donate
      },
      {
        path:'/SponsorLocation',
        name:'SponsorLocation',
        component:SponsorLocation
      }
=======
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
>>>>>>> 4be7bd86c4044356ec965f8db7e805b37ce3c150
  ]
})

export default router