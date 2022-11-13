import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import IssuesList from './IssuesList.vue'

describe('IssuesList', () => {
  it('should render the component', () => {
    const { html } = render(IssuesList, {
      props: {
        issues: [
          {
            id: '1',
            title: 'My first issue',
            description: 'My first issue description',
            status: 'open',
          },
        ],
      },
      global: {
        stubs: ['IssuesListRow'],
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render empty component state', () => {
    const { html } = render(IssuesList, {
      props: {
        issues: [],
      },
      global: {
        stubs: ['IssuesListEmpty'],
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
