import { createRouter, createWebHistory } from 'vue-router'
import { defaultRoutes } from './default'
import { facebookRoutes } from './facebook_pay'

const routes = [
  ...defaultRoutes,
  ...facebookRoutes,
  // 如有其他路由数组也在此合并
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router