import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import IssuesListRow from './IssuesListRow.vue'

describe('IssuesListRow', () => {
  it('should render the component', () => {
    const { html } = render(IssuesListRow, {
      props: {
        title: 'Test title',
        description: 'Test description',
      },
      global: {
        stubs: ['ActionableDropdown'],
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
