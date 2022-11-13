<script setup lang="ts" name="FormIssue">
import type { IValidationField } from '@/types'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: {
    title: string
    description: string
  }
  fields: IValidationField
}>()

const emit = defineEmits<{
  (e: 'submit', event: HTMLFormElement): void
}>()

const inputValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <b-form ref="form" @submit="(event) => emit('submit', event)">
    <b-form-input
      v-model="inputValue.title"
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
        v-model="inputValue.description"
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
</template>
