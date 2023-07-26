import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '@/views/pages/home/Home.vue';


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  // eslint-disable-next-lin2le no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0
    }
  },
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      hideLeftMenu: true,
    }
  },
  {
    path: '/single-news',
    name: 'single-news',
    component: () => import('@/views/pages/home/news/SingleNews.vue'),
    meta: {
      hideLeftMenu: true,
    }
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('@/views/pages/service/Service.vue'),
    meta: {
      hideLeftMenu: true,
    }
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
    component: () => import('../views/pages/work-result/WorkResult.vue'),
    meta: {
      hideLeftMenu: true,
    }
  },
  {
    path: '/story-gallery',
    name: 'story-gallery',
    component: () => import('../views/pages/work-result/StoryGallery.vue')
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/pages/contact/Contact.vue'),
    meta: {
      hideLeftMenu: true,
    }
  },

  {
    path: '/spark-activity',
    name: 'spark-activity',
    component: () => import('@/views/pages/spark-activity/SparkActivity.vue'),
    meta: {
      hideLeftMenu: true,
    }
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/login/Login.vue'),
    meta: {
      hideHeader: true,
      hideFooter: true,
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/sponsor-checkout-step-1',
    name: 'sponsor-checkout-step-1',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutStep1.vue'),
    meta: {
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/sponsor-checkout-step-2',
    name: 'sponsor-checkout-step-2',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutStep2.vue'),
    meta: {
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/sponsor-checkout-step-3',
    name: 'sponsor-checkout-step-3',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutStep3.vue'),
    meta: {
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/sponsor-checkout-overview',
    name: 'sponsor-checkout-overview',
    component: () => import('@/views/pages/sponsor/checkout/SponsorCheckoutOverview.vue'),
    meta: {
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/donate-checkout-step-1',
    name: 'donate-checkout-step-1',
    component: () => import('@/views/pages/donate/checkout/DonateCheckoutStep1.vue'),
    meta: {
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/donate-checkout-step-2',
    name: 'donate-checkout-step-2',
    component: () => import('@/views/pages/donate/checkout/DonateCheckoutStep2.vue'),
    meta: {
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/donate-checkout-overview',
    name: 'donate-checkout-overview',
    component: () => import('@/views/pages/donate/checkout/DonateCheckoutOverview.vue'),
    meta: {
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/templates/Test.vue')
  },
  {
    path: '/result-report',
    name: 'result-report',
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
    component: () => import('@/views/pages/login/register/Register.vue'),
    children: [
      {
        path: '',
        name: 'register-step-one',
        component: () => import('@/components/login/register/RegisterStepOne.vue')
      },
      {
        path: 'register-step-two',
        name: 'register-step-two',
        component: () => import('@/components/login/register/RegisterStepTwo.vue')
      },
    ],
    meta: {
      hideHeader: true,
      hideFooter: true,
      hideLeftMenu: true,
      hideRightMenu: true,
    }
  },
  {
    path: '/donation-project',
    name: 'donation-project',
    component: () => import('@/views/pages/spark-back/DonationProject.vue')
  },
  {
    path: '/service-milestone',
    name: 'service-milestone',
    component: () => import('@/views/pages/work-result/ServiceMilestone.vue')
  },
  ]
})

export default router