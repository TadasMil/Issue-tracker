<script setup lang="ts" name="BaseSidebar">
import type { IPage } from '@/types'
import { useRoute } from 'vue-router'

const pages: IPage[] = [
  { name: 'Home', path: '/', icon: 'bi bi-house-door' },
  { name: 'Open Issues', path: '/issues/open', icon: 'bi bi-folder2-open' },
  {
    name: 'Completed Issues',
    path: '/issues/completed',
    icon: 'bi bi-folder-check',
  },
  { name: 'Trashed Issues', path: '/issues/trashed', icon: 'bi bi-folder-x' },
]

const route = useRoute()

const isActive = (page: IPage) => route.path === page.path
</script>
<template>
  <header class="h-100">
    <b-navbar :container="false" variant="dark" class="h-100 py-0">
      <b-navbar-nav align class="d-flex h-100 flex-column h-100">
        <b-nav-item
          v-for="page in pages"
          :key="page.path"
          :to="page.path"
          :active="isActive(page)"
        >
          <i :class="`${page.icon} text-light fa-2x p-2`"></i>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<style #scoped>
.active {
  background-color: var(--bs-secondary);
}
</style>
