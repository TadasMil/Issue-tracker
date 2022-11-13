import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import IssuesLayout from './IssuesLayout.vue'

describe('IssuesLayout', () => {
  it('should render issue slot given', () => {
    const { html } = render(IssuesLayout, {
      props: {
        issues: [
          {
            id: '1',
            title: 'Issue 1',
            description: 'Issue 1 description',
            status: 'OPEN',
          },
        ],
      },
      slots: {
        default: '<div>Issue</div>',
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the default empty component', () => {
    const { html } = render(IssuesLayout, {
      props: {
        issues: [],
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
