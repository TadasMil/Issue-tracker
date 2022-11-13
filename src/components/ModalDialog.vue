<script setup lang="ts" name="ModalDialog">
import { injectModal } from '@/composables/useModal'
import { computed } from 'vue'

import BaseModal from './BaseModal.vue'

const modal = injectModal()

const title = computed(() => modal.value?.title)
const visible = computed(() => modal.value?.visible)
</script>

<template>
  <teleport to="body">
    <BaseModal
      v-if="modal?.visible"
      v-slot="slotProps"
      :title="title!"
      :visible="visible!"
      :close="modal.close!"
    >
      <slot :close="slotProps.close" />
    </BaseModal>
  </teleport>
</template>
