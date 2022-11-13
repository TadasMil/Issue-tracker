import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '../../test-render'
import '@testing-library/jest-dom'

import IssueListsRowActions from './IssueListsRowActions.vue'

const cases = [
  {
    name: 'Edit',
    event: 'onEdit',
  },
  {
    name: 'Mark as trashed',
    event: 'onMarkAsTrashed',
  },
  {
    name: 'Mark as open',
    event: 'onMarkAsOpen',
  },
  {
    name: 'Mark as completed',
    event: 'onMarkAsCompleted',
  },
  {
    name: 'Restore trashed issue',
    event: 'onRestoreTrashed',
  },
]

describe('IssueListsRowActions', () => {
  it('should render the component default component', () => {
    const { html } = render(IssueListsRowActions)

    expect(html()).toMatchSnapshot()
  })

  cases.forEach((label) => {
    it(`should not render ${label} button`, () => {
      const { queryByText } = render(IssueListsRowActions)

      expect(queryByText(label.name)).not.toBeInTheDocument()
    })
  })

  cases.forEach((c) => {
    it(`should call ${c.event} when ${c.name} is clicked`, () => {
      const eventFn = vi.fn()

      const { getByText, html } = render(IssueListsRowActions, {
        attrs: {
          [c.event]: eventFn,
        },
      })

      fireEvent.click(getByText(c.name))

      expect(eventFn).toHaveBeenCalled()
      expect(html()).toMatchSnapshot()
    })
  })
})
