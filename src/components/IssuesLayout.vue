<script setup lang="ts" name="IssuesLayout">
import type { IIssue } from '@/types'

import IssuesListEmpty from './IssuesListEmpty.vue'

const { issues } = defineProps<{
  issues: IIssue[]
}>()
</script>

<template>
  <div v-if="issues.length">
    <slot />
  </div>

  <template v-else>
    <IssuesListEmpty />
  </template>
</template>
