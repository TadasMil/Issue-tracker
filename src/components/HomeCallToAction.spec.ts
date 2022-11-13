import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import HomeCallToAction from './HomeCallToAction.vue'

describe('HomeCallToAction', () => {
  it('should render the component', () => {
    const { html } = render(HomeCallToAction)

    expect(html()).toMatchSnapshot()
  })
})
