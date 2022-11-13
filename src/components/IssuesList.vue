<script setup lang="ts" name="IssuesList">
import type { IIssue } from '@/types'

import IssuesListRow from './IssuesListRow.vue'
import IssuesListEmpty from './IssuesListEmpty.vue'

const { issues } = defineProps<{
  issues: IIssue[]
}>()

const emit = defineEmits<{
  (event: 'edit', issue: IIssue): void
  (event: 'mark-as-trashed', issue: IIssue): void
  (event: 'mark-as-completed', issue: IIssue): void
}>()
</script>

<template>
  <div v-if="issues.length">
    <IssuesListRow
      v-for="issue in issues"
      :key="issue.id"
      :title="issue.title"
      :description="issue.description"
      @edit="emit('edit', issue)"
      @mark-as-trashed="emit('mark-as-trashed', issue)"
      @mark-as-completed="emit('mark-as-completed', issue)"
    />
  </div>

  <template v-else>
    <IssuesListEmpty />
  </template>
</template>
