import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '@/views/pages/home/Home.vue';


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/single-news',
    name: 'single-news',
    component: () => import('@/views/pages/home/news/SingleNews.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('@/views/pages/service/Service.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/pages/about/About.vue')
  },
  {
    path: '/sponsor-location',
    name: 'sponsor-location',
    component: () => import('@/views/pages/sponsor/SponsorLocation.vue')
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: () => import('@/views/pages/sponsor/Sponsor.vue')
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('@/views/pages/donate/Donate.vue')
  },
  {
    path: '/work-result',
    name: 'work-result',
    component: () => import('../views/pages/work-result/WorkResult.vue')
  },
  {
    path: '/story-gallery',
    name: 'story-gallery',
    component: () => import('../views/pages/work-result/StoryGallery.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/pages/contact/Contact.vue')
  },

  {
    path: '/spark-project',
    name: 'spark-project',
    component: () => import('@/views/pages/spark-project/SparkProject.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/login/Login.vue')
  },
  {
    path: '/sponsor-checkout-step-1',
    name: 'sponsor-checkout-step-1',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutStep1.vue')
  },
  {
    path: '/sponsor-checkout-step-2',
    name: 'sponsor-checkout-step-2',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutStep2.vue')
  },
  {
    path: '/sponsor-checkout-step-3',
    name: 'sponsor-checkout-step-3',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutStep3.vue')
  },
  {
    path: '/sponsor-checkout-overview',
    name: 'sponsor-checkout-overview',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutOverview.vue')
  },
  {
    path: '/donate-checkout-step-1',
    name: 'donate-checkout-step-1',
    component: () => import('@/views/pages/donate/checkout/DonateCheckoutStep1.vue')
  },
  {
    path: '/donate-checkout-step-2',
    name: 'donate-checkout-step-2',
    component: () => import('@/views/pages/donate/checkout/DonateCheckoutStep2.vue')
  },
  {
    path: '/donate-checkout-overview',
    name: 'donate-checkout-overview',
    component: () => import('@/views/pages/donate/checkout/DonateCheckoutOverview.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/templates/Test.vue')
  },
  {
    path: '/result-report',
    name: 'rest',
    component: () => import('@/views/pages/work-result/ResultReport.vue')
  },
  {
    path: '/letter-record',
    name: 'letter-record',
    component: () => import('@/views/pages/member-center/LetterRecord.vue')
  },
  {
    path: '/donate-list',
    name: 'donate-list',
    component: () => import('@/views/pages/donate/DonateList.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/login/register/Register.vue')
  },

  ]
})

export default router