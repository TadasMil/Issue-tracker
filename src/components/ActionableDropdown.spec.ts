import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '../../test-render'

import ActionableDropdown from './ActionableDropdown.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ path: '/' })),
}))

describe('ActionableDropdown', () => {
  it('should render the component', () => {
    const { html } = render(ActionableDropdown)

    expect(html()).toMatchSnapshot()
  })

  it('should emit mark as trashed event', async () => {
    const { getByText, emitted } = render(ActionableDropdown)

    const button = getByText('Mark as trashed')

    await fireEvent.click(button)

    expect(emitted()).toHaveProperty('mark-as-trashed')
  })

  it('should emit mark as completed event', async () => {
    const { getByText, emitted } = render(ActionableDropdown)

    const button = getByText('Mark as completed')

    await fireEvent.click(button)

    expect(emitted()).toHaveProperty('mark-as-completed')
  })

  it('should emit edit event', async () => {
    const { getByText, emitted } = render(ActionableDropdown)

    const button = getByText('Edit')

    await fireEvent.click(button)

    expect(emitted()).toHaveProperty('edit')
  })
})
