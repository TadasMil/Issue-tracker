<script setup lang="ts" name="HomeIndex">
import BasePage from '@/components/BasePage.vue'
import HomeDashboard from '@/components/HomeDashboard.vue'
import HomeCallToAction from '@/components/HomeCallToAction.vue'
</script>

<template>
  <BasePage title="Hello, Thom Edison">
    <div class="d-flex flex-column gap-3">
      <HomeDashboard />
      <HomeCallToAction />
    </div>
  </BasePage>
</template>
