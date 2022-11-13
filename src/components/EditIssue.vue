<script setup lang="ts" name="EditIssue">
import { ref } from 'vue'
import { useFormValidation } from '@/composables/useValidation'
import { useStore } from 'vuex'

import FormIssue from './FormIssue.vue'

import type { IFormField, IIssue } from '@/types'

const store = useStore()

const { issue } = defineProps<{
  issue: IIssue
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const form = ref<{
  title: string
  description: string
}>({
  title: issue.title,
  description: issue.description,
})

const { fields, validateForm } = useFormValidation<{
  title: IFormField
  description: IFormField
}>(form, {
  title: {
    required: true,
    min: 3,
    max: 20,
  },
  description: {
    required: true,
    min: 3,
    max: 255,
  },
})

const onSubmit = () => {
  const valid = validateForm()

  if (valid) {
    store.commit('issues/updateIssue', {
      ...issue,
      ...form.value,
    })

    emit('close')
  }
}
</script>

<template>
  <FormIssue v-model="form" :fields="fields" @submit="onSubmit" />
</template>
