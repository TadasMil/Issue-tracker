<script setup lang="ts" name="CreateIssue">
import { ref } from 'vue'
import { useFormValidation } from '@/composables/useValidation'
import { useStore } from 'vuex'

import FormIssue from './FormIssue.vue'

import type { IFormField } from '@/types'

const store = useStore()

const form = ref<{
  title: string
  description: string
}>({
  title: '',
  description: '',
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

const onSubmit = (event: HTMLFormElement) => {
  event.preventDefault()
  const valid = validateForm()

  if (valid) {
    store.commit('issues/createIssue', form.value)
    form.value.title = ''
    form.value.description = ''
  }
}
</script>

<template>
  <b-card
    title="Submit an issue"
    text-variant="muted"
    title-tag="h2"
    class="shadow-sm border-0"
  >
    <FormIssue v-model="form" :fields="fields" @submit="onSubmit" />
  </b-card>
</template>
