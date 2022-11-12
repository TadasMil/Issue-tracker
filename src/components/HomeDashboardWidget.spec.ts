import { describe, it, expect } from 'vitest'
import { render } from '../../test-render'

import HomeDashboardWidget from './HomeDashboardWidget.vue'

describe('HomeDashboardWidget', () => {
  it('should render the component', () => {
    const { html } = render(HomeDashboardWidget, {
      props: {
        title: 'My Title',
        value: 123,
        color: 'info',
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
