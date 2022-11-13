<script setup lang="ts" name="IssueListsRowActions">
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <b-dropdown
    id="dropdown"
    size="lg"
    variant="link"
    aria-labelledby="dropdown"
    toggle-class="text-decoration-none"
    dropleft
    no-caret
  >
    <template #button-content>
      <div class="text-dark">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16 24a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
          />
        </svg>
      </div>
    </template>

    <slot />

    <b-dropdown-item v-if="attrs.onEdit" @click="attrs.onEdit">
      Edit
      <i class="bi bi-pencil fa-1x text-success"></i>
    </b-dropdown-item>

    <b-dropdown-item
      v-if="attrs.onMarkAsTrashed"
      @click="attrs.onMarkAsTrashed"
    >
      Mark as trashed
      <i class="bi bi-trash fa-1x text-danger"></i>
    </b-dropdown-item>

    <b-dropdown-item v-if="attrs.onMarkAsOpen" @click="attrs.onMarkAsOpen">
      Mark as open
      <i class="bi bi-repeat fa-1x text-success"></i>
    </b-dropdown-item>

    <b-dropdown-item
      v-if="attrs.onMarkAsCompleted"
      @click="attrs.onMarkAsCompleted"
    >
      Mark as completed
      <i class="bi bi-check-circle fa-1x text-success"></i>
    </b-dropdown-item>

    <b-dropdown-item
      v-if="attrs.onRestoreTrashed"
      @click="attrs.onRestoreTrashed"
    >
      Restore trashed issue
      <i class="bi bi-trash fa-1x text-danger"></i>
    </b-dropdown-item>
  </b-dropdown>
</template>
