import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '../../test-render'

import BaseModal from './BaseModal.vue'

describe('BaseModal', () => {
  it('should render configured modal component', () => {
    const closeFn = vi.fn()

    const { html } = render(BaseModal, {
      props: {
        title: 'Modal Title',
        close: closeFn,
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should emit close modal event', async () => {
    const closeFn = vi.fn()

    const { getByTestId } = render(BaseModal, {
      props: {
        title: 'Modal Title',
        close: closeFn,
      },
    })

    const closeButton = getByTestId('modal-close')

    await fireEvent.click(closeButton)

    expect(closeFn).toHaveBeenCalled()
  })
})
