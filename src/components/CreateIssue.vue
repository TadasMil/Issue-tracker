<script setup lang="ts" name="CreateIssue">
import { ref } from 'vue'
import { useFormValidation } from '@/composables/useValidation'

import type { IFormField } from '@/types'

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
    form.value.title = ''
    form.value.description = ''
    console.log('Form is valid')
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
    <b-form @submit="onSubmit">
      <b-form-input
        v-model="form.title"
        id="title"
        type="text"
        :state="fields.title.valid"
        placeholder="Enter your name"
      />
      <b-form-invalid-feedback id="title-feedback">
        {{ fields.title.error }}
      </b-form-invalid-feedback>

      <div class="my-3">
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Describe the issue..."
          rows="3"
          type="textarea"
          max-rows="6"
          no-resize
          :state="fields.description.valid"
        />
        <b-form-invalid-feedback id="textarea-feedback">
          {{ fields.description.error }}
        </b-form-invalid-feedback>
      </div>

      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </b-card>
</template>
