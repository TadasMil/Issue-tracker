import { provide, ref, type InjectionKey, type Ref } from 'vue'
import { useStrictInject } from './useStrictInject'

const getIK = <T>(key: string): InjectionKey<T> => Symbol(key)

type Modal = {
  title: string
  visible?: boolean
  close?: () => void
}

type RefModal = Ref<{
  title?: string
  visible?: boolean
  close?: () => void
}> | null

const ModalKey = getIK<RefModal>('ModalKey')

const provideModal = (item: RefModal) => {
  provide(ModalKey, item)
}

export const injectModal = () => useStrictInject(ModalKey)

export const useModal = (modalConfig: Modal) => {
  const modal = ref<RefModal>(null)

  const close = () => {
    modal.value = null
  }

  const open = () => {
    modal.value = {
      title: modalConfig.title,
      visible: true,
      close,
    }
  }

  provideModal(modal as RefModal)

  return {
    open,
  }
}
