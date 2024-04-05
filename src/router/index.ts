import { App } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
      },
    ],
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
