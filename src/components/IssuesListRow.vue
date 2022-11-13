<script setup lang="ts" name="IssuesListRow">
import { ISSUE_STATUS } from '@/constnats'
import type { IIssueStatus } from '@/types'
import type { ColorVariant } from 'bootstrap-vue-3'

import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  status?: IIssueStatus
  trashed?: boolean
}>()

type colorVariantType = {
  [key in IIssueStatus]: ColorVariant
}

const statusLookup: colorVariantType = {
  [ISSUE_STATUS.COMPLETED]: 'success',
  [ISSUE_STATUS.OPEN]: 'warning',
}

const statusColor = computed(
  () => statusLookup[props.status || ISSUE_STATUS.OPEN]
)
</script>

<template>
  <b-card class="shadow-sm border-0 mb-3">
    <div class="d-flex justify-content-between">
      <b-container fluid>
        <b-row>
          <b-col v-if="trashed" cols="4" lg="2">
            <b-card-text>
              <p class="mb-1">Status</p>

              <div>
                <b-badge pill :variant="statusColor" class="text-uppercase">
                  {{ status }}
                </b-badge>
              </div>
            </b-card-text>
          </b-col>

          <b-col cols="4" lg="2">
            <b-card-text>
              <p class="mb-1">Title:</p>
              <h5 class="text-truncate mr-2">{{ title }}</h5>
            </b-card-text>
          </b-col>
          <b-col cols="4" lg="6">
            <b-card-text>
              <p class="mb-1">Description:</p>
              <h5 class="text-truncate mr-2">{{ description }}</h5>
            </b-card-text>
          </b-col>
        </b-row>
      </b-container>

      <slot />
    </div>
  </b-card>
</template>
