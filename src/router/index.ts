import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
