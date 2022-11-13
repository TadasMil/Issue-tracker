<script setup lang="ts" name="TrashedIssuesIndex">
import { ref } from 'vue'
import { useModal } from '@/composables/useModal'
import { useStore } from 'vuex'

import BasePage from '@/components/BasePage.vue'
import EditIssue from '@/components/EditIssue.vue'
import IssuesLayout from '@/components/IssuesLayout.vue'
import IssuesListRow from '@/components/IssuesListRow.vue'
import IssueListsRowActions from '@/components/IssueListsRowActions.vue'
import ModalDialog from '@/components/ModalDialog.vue'

import type { IIssue } from '@/types'
import { ISSUE_STATUS } from '@/constnats'

const store = useStore()

const { open } = useModal({
  title: 'Edit Issue',
})

const editableIssue = ref<IIssue | null>(null)

const onEdit = (issue: IIssue) => {
  editableIssue.value = issue
  open()
}

const onMarkAsOpen = (issue: IIssue) => {
  store.commit('issues/markIssueAsOpen', issue.id)
}

const onMarkAsCompleted = (issue: IIssue) => {
  store.commit('issues/markIssueAsCompleted', issue.id)
}

const onRestoreTrashed = (issue: IIssue) => {
  store.commit('issues/restoreTrashedIssue', issue.id)
}
</script>

<template>
  <BasePage title="Trashed Issues">
    <IssuesLayout class="h-100" :issues="store.getters['issues/trashedIssues']">
      <IssuesListRow
        v-for="issue in store.getters['issues/trashedIssues']"
        :key="issue.id"
        :title="issue.title"
        :description="issue.description"
        :trashed="issue.trashed"
        :status="issue.status"
      >
        <template v-if="issue.status === ISSUE_STATUS.OPEN">
          <IssueListsRowActions
            @edit="onEdit(issue)"
            @markAsCompleted="onMarkAsCompleted(issue)"
            @restore-trashed="onRestoreTrashed(issue)"
          />
        </template>
        <template v-else>
          <IssueListsRowActions
            @edit="onEdit(issue)"
            @markAsOpen="onMarkAsOpen(issue)"
            @restore-trashed="onRestoreTrashed(issue)"
          />
        </template>
      </IssuesListRow>
    </IssuesLayout>

    <ModalDialog v-slot="slotProps">
      <EditIssue :issue="editableIssue!" @close="slotProps.close" />
    </ModalDialog>
  </BasePage>
</template>
