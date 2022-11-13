<script setup lang="ts" name="CompletedIssuesIndex">
import { ref } from 'vue'
import { useModal } from '@/composables/useModal'
import { useStore } from 'vuex'

import BasePage from '@/components/BasePage.vue'
import EditIssue from '@/components/EditIssue.vue'
import IssuesLayout from '@/components/IssuesLayout.vue'
import IssuesListRow from '@/components/IssuesListRow.vue'
import ModalDialog from '@/components/ModalDialog.vue'
import IssueListsRowActions from '@/components/IssueListsRowActions.vue'

import type { IIssue } from '@/types'

const store = useStore()

const { open } = useModal({
  title: 'Edit Issue',
})

const editableIssue = ref<IIssue | null>(null)

const onEdit = (issue: IIssue) => {
  editableIssue.value = issue
  open()
}

const onMarkAsTrashed = (issue: IIssue) => {
  store.commit('issues/markIssueAsTrashed', issue.id)
}

const onMarkAsOpen = (issue: IIssue) => {
  store.commit('issues/markIssueAsOpen', issue.id)
}
</script>

<template>
  <BasePage title="Completed Issues">
    <IssuesLayout
      class="h-100"
      :issues="store.getters['issues/completedIssues']"
    >
      <IssuesListRow
        v-for="issue in store.getters['issues/completedIssues']"
        :key="issue.id"
        :title="issue.title"
        :description="issue.description"
      >
        <IssueListsRowActions
          @edit="onEdit(issue)"
          @mark-as-trashed="onMarkAsTrashed(issue)"
          @mark-as-open="onMarkAsOpen(issue)"
        />
      </IssuesListRow>
    </IssuesLayout>

    <ModalDialog v-slot="slotProps">
      <EditIssue :issue="editableIssue!" @close="slotProps.close" />
    </ModalDialog>
  </BasePage>
</template>
