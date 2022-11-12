<script setup lang="ts" name="HomeCallToAction">
import { computed } from 'vue'

const toOpenIssuePage = computed(() => '/issues/open')
</script>

<template>
  <b-card class="shadow-sm border-0 text-center">
    <b-card-title>Having an issue?</b-card-title>

    <b-link
      :to="toOpenIssuePage"
      class="d-flex text-decoration-none text-muted fa-1x justify-content-center align-items-center"
    >
      Submit issue
      <i class="bi bi-arrow-right-short fa-2x"></i>
    </b-link>
  </b-card>
</template>
