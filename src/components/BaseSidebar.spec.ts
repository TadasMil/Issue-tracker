import { describe, it, expect, vi } from 'vitest'
import { render } from '../../test-render'

import BaseSidebar from './BaseSidebar.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ path: '/' })),
}))

describe('BaseSidebar', () => {
  it('should render the component given home page is active', () => {
    const { html } = render(BaseSidebar)

    expect(html()).toMatchSnapshot()
  })
})
