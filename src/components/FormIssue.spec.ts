import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import FormIssue from './FormIssue.vue'

describe('FormIssue', () => {
  it('should render the default form', () => {
    const { html } = render(FormIssue, {
      props: {
        modelValue: {
          title: '',
          description: '',
        },
        fields: {
          title: {
            error: '',
            valid: null,
          },
          description: {
            error: '',
            valid: null,
          },
        },
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the form with errors', () => {
    const { html } = render(FormIssue, {
      props: {
        modelValue: {
          title: '',
          description: '',
        },
        fields: {
          title: {
            error: 'Title is required',
            valid: false,
          },
          description: {
            error: 'Description is required',
            valid: false,
          },
        },
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
