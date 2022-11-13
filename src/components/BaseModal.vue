<script setup lang="ts" name="BaseModal">
const { title, close } = defineProps<{
  title: string
  close: () => void
}>()
</script>

<template>
  <div
    ref="modal-backdrop"
    class="fixed-top z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 h-100"
  >
    <div class="d-flex justify-content-center align-items-center h-100">
      <b-card text-variant="muted" class="shadow-sm border-0 w-50">
        <template #header>
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="mb-0">{{ title }}</h2>

            <button
              data-testid="modal-close"
              type="button"
              class="bg-transparent border-0 text-muted"
              @click="close"
            >
              <i class="bi bi-x fa-2x"></i>
            </button>
          </div>
        </template>

        <slot :close="close" />
      </b-card>
    </div>
  </div>
</template>
