import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../views/pages/home/Home.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/single-news',
      name: 'single-news',
      // component: SingleNews
      component: () => import('../views/pages/home/news/SingleNews.vue')
    },
    {
      path: '/service',
      name: 'service',
      // component: Service
      component: () => import('../views/pages/service/Service.vue')
    },
    {
      path: '/about',
      name: 'about',
      // component: Service
      component: () => import('../views/pages/about/About.vue')
    },
    {
      path: '/sponsor-location',
      name: 'sponsor-location',
      // component: SponsorLocation
      component: () => import('../views/pages/sponsor/SponsorLocation.vue')
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      // component: Sponsor
      component: () => import('../views/pages/sponsor/Sponsor.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      // component: Donate
      component: () => import('../views/pages/donate/Donate.vue')
    },
    {
      path: '/work-result',
      name: 'work-result',
      // component: Donate
      component: () => import('../views/pages/work-result/WorkResult.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      // component: Contact
      component: () => import('../views/pages/contact/Contact.vue')
    },

    {
      path: '/login',
      name: 'login',
      // component: Login
      component: () => import('../views/pages/login/Login.vue')
    },
    {
      path: '/test',
      name: 'test',
      // component: Test
      component: () => import('../templates/Test.vue')
    },
  ]
})

export default router