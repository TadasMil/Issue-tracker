<script setup lang="ts" name="IssuesListRow">
import ActionableDropdown from './ActionableDropdown.vue'

const { title, description } = defineProps<{
  title: string
  description: string
}>()

const emit = defineEmits<{
  (event: 'edit'): void
  (event: 'mark-as-trashed'): void
  (event: 'mark-as-completed'): void
}>()
</script>

<template>
  <b-card class="shadow-sm border-0 mb-3">
    <b-container fluid>
      <b-row align-content="stretch">
        <b-col cols="4" xl="2">
          <b-card-text>
            <p class="mb-1">Title:</p>
            <h5 class="text-truncate mr-2">{{ title }}</h5>
          </b-card-text>
        </b-col>
        <b-col cols="4" xl="2">
          <b-card-text>
            <p class="mb-1">Description:</p>
            <h5 class="text-truncate mr-2">{{ description }}</h5>
          </b-card-text>
        </b-col>
        <b-col cols="4" xl="8" align-self="center" class="text-end">
          <ActionableDropdown
            :title="title"
            :description="description"
            @edit="emit('edit')"
            @mark-as-trashed="emit('mark-as-trashed')"
            @mark-as-completed="emit('mark-as-completed')"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>
