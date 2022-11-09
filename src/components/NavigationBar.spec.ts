import { describe, it, expect, vi } from 'vitest'
import { render } from '../../test-render'

import NavigationBar from './NavigationBar.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ path: '/' })),
}))

describe('NavigationBar', () => {
  it('should render the component given home page is active', () => {
    const { html } = render(NavigationBar)

    expect(html()).toMatchSnapshot()
  })
})
