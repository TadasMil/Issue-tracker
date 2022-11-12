<script setup lang="ts" name="HomeDashboardWidget">
import { computed } from 'vue'

const { title, value, color } = defineProps<{
  title: string
  value: number
  color: string
}>()

const bgColor = computed(() => `bg-${color}`)
</script>

<template>
  <b-card
    class="d-flex flex-column justify-content-center text-white text-center shadow rounded-0 border-0"
    :class="[bgColor]"
  >
    <p class="text-capitalize h5 mb-4">{{ title }}</p>
    <p class="h1">{{ value }}</p>
  </b-card>
</template>
