<script setup lang="ts" name="OpenIssuesIndex">
import { ref } from 'vue'
import { useModal } from '@/composables/useModal'
import { useStore } from 'vuex'

import BasePage from '@/components/BasePage.vue'
import CreateIssue from '@/components/CreateIssue.vue'
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

const onMarkAsCompleted = (issue: IIssue) => {
  store.commit('issues/markIssueAsCompleted', issue.id)
}
</script>

<template>
  <BasePage title="Open Issues">
    <b-container fluid class="m-0 p-0">
      <b-row>
        <b-col cols="12" md="8">
          <IssuesLayout
            class="h-100"
            :issues="store.getters['issues/openIssues']"
          >
            <IssuesListRow
              v-for="issue in store.getters['issues/openIssues']"
              :key="issue.id"
              :title="issue.title"
              :description="issue.description"
            >
              <IssueListsRowActions
                @edit="onEdit(issue)"
                @mark-as-trashed="onMarkAsTrashed(issue)"
                @mark-as-completed="onMarkAsCompleted(issue)"
              />
            </IssuesListRow>
          </IssuesLayout>
        </b-col>

        <b-col cols="12" md="4">
          <CreateIssue />
        </b-col>
      </b-row>
    </b-container>

    <ModalDialog v-slot="slotProps">
      <EditIssue :issue="editableIssue!" @close="slotProps.close" />
    </ModalDialog>
  </BasePage>
</template>
