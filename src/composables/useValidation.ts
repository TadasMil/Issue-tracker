import { ref, type Ref } from 'vue'

import type { IValidationField, IField, IRule } from '@/types'

const errorsMessages = {
  required: 'This field is required',
  min: (min: number) => `This field must be at least ${min} characters`,
  max: (max: number) => `This field must be at most ${max} characters`,
}

const getInitialFieldState = (form: Ref<IField>) => {
  const initialValidationState: IValidationField = {}

  Object.keys(form.value).forEach((field) => {
    initialValidationState[field] = {
      error: '',
      valid: null,
    }
  })

  return initialValidationState
}

export function useFormValidation<T>(form: Ref<IField>, rules: IRule) {
  const fields = ref<T>(getInitialFieldState(form) as T)

  const validateForm = () => {
    const validatedFields: IValidationField = {}

    for (const field in rules) {
      const { required, min, max } = rules[field]
      const value = form.value[field]

      if (required && !value) {
        validatedFields[field] = {
          error: errorsMessages.required,
          valid: false,
        }
      } else if (min && value.length < min) {
        validatedFields[field] = {
          error: errorsMessages.min(min),
          valid: false,
        }
      } else if (max && value.length > max) {
        validatedFields[field] = {
          error: errorsMessages.max(max),
          valid: false,
        }
      } else {
        validatedFields[field] = {
          error: '',
          valid: null,
        }
      }
    }

    fields.value = validatedFields

    return !!Object.values(validatedFields).every(
      (field) => field.valid === null
    )
  }

  return {
    fields,
    validateForm,
  }
}
