import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ai',
    name: 'ai',
    component: () => import('../views/VsAiView.vue')
  },
  {
    path: '/pl',
    name: 'pl',
    component: () => import('../views/VsPlayerView.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/ChatRoomView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
