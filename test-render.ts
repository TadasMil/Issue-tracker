import type { RenderOptions } from '@testing-library/vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { render } from '@testing-library/vue'

const customRender = (ui: any, options?: RenderOptions) =>
  render(ui, {
    ...options,
    global: {
      ...options?.global,
      plugins: [BootstrapVue3, ...(options?.global?.plugins || [])],
    },
  })

export * from '@testing-library/vue'
export { customRender as render }
