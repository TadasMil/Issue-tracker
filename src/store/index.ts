import { createStore } from 'vuex'

import issues from '@/store/modules/issues'

export const mutations = {
  ...issues.mutations,
}

const store = createStore({
  modules: {
    issues,
  },
})

export default store
