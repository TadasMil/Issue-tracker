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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/OpenIssuesIndex.vue'),
    },
    {
      path: '/issues/completed',
      name: 'CompletedIssuesIndex',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CompletedIssuesIndex.vue'),
    },
    {
      path: '/issues/trashed',
      name: 'TrashedIssuesIndex',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/TrashedIssuesIndex.vue'),
    },
  ],
})

export default router
