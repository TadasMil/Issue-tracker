<script setup lang="ts" name="BasePage">
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="m-4">
    <h2 class="mb-3">{{ title }}</h2>

    <main>
      <slot />
    </main>
  </div>
</template>
