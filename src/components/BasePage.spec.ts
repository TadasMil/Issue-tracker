import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import BasePage from './BasePage.vue'

describe('BasePage', () => {
  it('should render the component given home page is active', () => {
    const { html } = render(BasePage, {
      props: {
        title: 'Home',
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render default slot', () => {
    const { html } = render(BasePage, {
      props: {
        title: 'Home',
      },
      slots: {
        default: 'Hello World',
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
