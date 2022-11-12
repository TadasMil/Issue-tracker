import { describe, it, expect, vi } from 'vitest'
import { render } from '../../test-render'

import BaseLayout from './BaseLayout.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ path: '/' })),
}))

describe('BaseLayout', () => {
  it('should render the component', () => {
    const { html } = render(BaseLayout, {
      global: {
        stubs: ['BaseSidebar'],
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the default slot', () => {
    const { html } = render(BaseLayout, {
      slots: {
        default: '<div>Default slot</div>',
      },
      global: {
        stubs: ['BaseSidebar'],
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
