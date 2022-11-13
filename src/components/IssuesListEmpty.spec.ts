import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import IssuesListEmpty from './IssuesListEmpty.vue'

describe('IssuesListEmpty', () => {
  it('should render the component', () => {
    const { html } = render(IssuesListEmpty)

    expect(html()).toMatchSnapshot()
  })
})
