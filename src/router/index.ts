import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '@/views/HomeIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex,
    },
    {
      path: '/issues/open',
      name: 'OpenIssuesIndex',
      component: () => import('@/views/OpenIssuesIndex.vue'),
    },
    {
      path: '/issues/completed',
      name: 'CompletedIssuesIndex',
      component: () => import('@/views/CompletedIssuesIndex.vue'),
    },
    {
      path: '/issues/trashed',
      name: 'TrashedIssuesIndex',
      component: () => import('@/views/TrashedIssuesIndex.vue'),
    },
  ],
})

export default router
