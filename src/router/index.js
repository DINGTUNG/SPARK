import {
  createRouter,
  createWebHistory
} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SponsorLocation from '../views/pages/sponsor/SponsorLocation.vue'
import Home from '../views/pages/home/Home.vue'
import SingleNews from '../views/pages/home/news/SingleNews.vue'
import Donate from '../views/pages/donate/Donate.vue'
import Login from '../views/pages/login/Login.vue'
import Contact from '../views/pages/contact/Contact.vue'
import Service from  '../views/pages/service/Service.vue'


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
    },
    {
      path: '/single-news',
      name: 'single-news',
      component: SingleNews
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
  ]
})

export default router