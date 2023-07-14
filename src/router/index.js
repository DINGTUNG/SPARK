import {
  createRouter,
  createWebHistory
} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/pages/home/Home.vue'



const router = createRouter({
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
      // component: SponsorLocation
      component: () => import('../views/pages/sponsor/SponsorLocation.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      // component: Donate
      component: () => import('../views/pages/donate/Donate.vue')
    },
    {
      path: '/login',
      name: 'login',
      // component: Login
      component: () => import('../views/pages/login/Login.vue')
    },
    {
      path: '/single-news',
      name: 'single-news',
      // component: SingleNews
      component: () => import('../views/pages/home/news/SingleNews.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // component: Contact
      component: () => import('../views/pages/contact/Contact.vue')
    },
    {
      path: '/service',
      name: 'service',
      // component: Service
      component: () => import('../views/pages/service/Service.vue')
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      // component: Sponsor
      component: () => import('../views/pages/sponsor/Sponsor.vue')
    },
  ]
})

export default router