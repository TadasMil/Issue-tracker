<script setup lang="ts" name="NavigationBar">
import type { IPage } from '@/types'
import { useRoute } from 'vue-router'

const pages: IPage[] = [
  { name: 'Home', path: '/' },
  { name: 'Open Issues', path: '/issues/open' },
  { name: 'Completed Issues', path: '/issues/completed' },
  { name: 'Trashed Issues', path: '/issues/trashed' },
]

const route = useRoute()

const isActive = (page: IPage) => route.path === page.path
</script>

<template>
  <b-nav class="bg-dark">
    <b-nav-item v-for="page in pages" :key="page.path" :to="page.path" :active="isActive(page)">
      <b-nav-text class="text-light">{{ page.name }}</b-nav-text>
    </b-nav-item>
  </b-nav>
</template>

<style #scoped>
.active {
  background-color: var(--bs-secondary);
}
</style>
