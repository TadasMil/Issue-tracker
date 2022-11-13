<script setup lang="ts" name="ActionableDropdown">
const emit = defineEmits<{
  (event: 'edit'): void
  (event: 'mark-as-trashed'): void
  (event: 'mark-as-completed'): void
}>()
</script>

<template>
  <b-dropdown
    id="dropdown"
    aria-labelledby="dropdown"
    size="lg"
    variant="link"
    dropleft
    toggle-class="text-decoration-none"
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

    <b-dropdown-item @click="emit('edit')">
      Edit
      <i class="bi bi-pencil fa-1x text-success"></i>
    </b-dropdown-item>

    <b-dropdown-item @click="emit('mark-as-trashed')">
      Mark as trashed
      <i class="bi bi-trash fa-1x text-danger"></i>
    </b-dropdown-item>

    <b-dropdown-item @click="emit('mark-as-completed')">
      Mark as completed
      <i class="bi bi-check-circle fa-1x text-success"></i>
    </b-dropdown-item>
  </b-dropdown>
</template>
