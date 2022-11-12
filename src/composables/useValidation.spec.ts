import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { useFormValidation } from './useValidation'

describe('useValidation', () => {
  it('should return field required error', () => {
    const form = ref({
      name: 'John',
      lastName: '',
    })

    const rules = {
      name: {
        required: true,
        min: 3,
        max: 10,
      },
      lastName: {
        required: true,
        min: 3,
        max: 10,
      },
    }

    const { fields, validateForm } = useFormValidation(form, rules)

    const valid = validateForm()

    expect(valid).toBe(false)

    expect(fields.value).toEqual({
      name: {
        error: '',
        valid: null,
      },
      lastName: {
        error: 'This field is required',
        valid: false,
      },
    })
  })

  it('should return field min error', () => {
    const form = ref({
      name: 'John',
      lastName: 'a',
    })

    const rules = {
      name: {
        required: true,
        min: 3,
        max: 10,
      },
      lastName: {
        required: true,
        min: 3,
        max: 10,
      },
    }

    const { fields, validateForm } = useFormValidation(form, rules)

    const valid = validateForm()

    expect(valid).toBe(false)

    expect(fields.value).toEqual({
      name: {
        error: '',
        valid: null,
      },
      lastName: {
        error: 'This field must be at least 3 characters',
        valid: false,
      },
    })
  })

  it('should return field max error', () => {
    const form = ref({
      name: 'John',
      lastName: 'aaaaaaaaaaaaaaaaaaaa',
    })

    const rules = {
      name: {
        required: true,
        min: 3,
        max: 10,
      },
      lastName: {
        required: true,
        min: 3,
        max: 10,
      },
    }

    const { fields, validateForm } = useFormValidation(form, rules)

    const valid = validateForm()

    expect(valid).toBe(false)

    expect(fields.value).toEqual({
      name: {
        error: '',
        valid: null,
      },
      lastName: {
        error: 'This field must be at most 10 characters',
        valid: false,
      },
    })
  })

  it('should return valid form', () => {
    const form = ref({
      name: 'John',
      lastName: 'Doe',
    })

    const rules = {
      name: {
        required: true,
        min: 3,
        max: 10,
      },
      lastName: {
        required: true,
        min: 3,
        max: 10,
      },
    }

    const { fields, validateForm } = useFormValidation(form, rules)

    const valid = validateForm()

    expect(valid).toBe(true)

    expect(fields.value).toEqual({
      name: {
        error: '',
        valid: null,
      },
      lastName: {
        error: '',
        valid: null,
      },
    })
  })
})
