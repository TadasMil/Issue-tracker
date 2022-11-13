import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '../../test-render'

import ModalDialog from './ModalDialog.vue'

const closeFn = vi.fn()

vi.mock('@/composables/useModal', () => ({
  injectModal: () => ({
    title: 'Modal Title',
    visible: true,
    close: closeFn,
  }),
}))

describe('ModalDialog', () => {
  beforeEach(() => {
    const el = document.createElement('div')
    el.id = 'modal'
    document.body.appendChild(el)
  })

  afterEach(() => {
    document.body.outerHTML = ''
  })

  it('should render configured modal component', () => {
    const { html } = render(ModalDialog, {
      global: {
        stubs: ['BaseModal'],
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
