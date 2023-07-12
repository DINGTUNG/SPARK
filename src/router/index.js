import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Donate from '../views/pages/Donate.vue'
import Login from '../views/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about'
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
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
