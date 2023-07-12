import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SponsorLocation from '../views/pages/sponsor/SponsorLocation.vue'
import Home from '../views/pages/home/Home.vue'
import Donate from '../views/pages/donate/Donate.vue'
import SponsorLocation from '../views/pages/sponsor/SponsorLocation.vue'
import Login from '../views/pages/login/Login.vue'


const router = createRouter({
<<<<<<< Updated upstream
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sponsor-location',
    name: 'sponsor-location',
    component: SponsorLocation
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
=======
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
>>>>>>> Stashed changes
  ]
})

export default router