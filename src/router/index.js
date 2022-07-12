import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shopcard',
    name: 'shopcard',
    component: () => import('../views/CardShopView.vue')
  },
  {
    path: '/fornewcard',
    name: 'fornewcard',
    component: () => import('../views/ForNewCard.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
