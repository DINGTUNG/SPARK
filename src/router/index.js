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


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
<<<<<<< HEAD
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
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }
=======
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
    }
>>>>>>> 09591cf6a2ecab8b3467303a0c3a3f22fd5dd82f
  ]
})

export default router