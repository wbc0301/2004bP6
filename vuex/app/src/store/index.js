import Vue from 'vue'
import Vuex from 'vuex'

import persist from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(persist)

export default new Vuex.Store({
  state: { // 公共数据
      num: 0,
  },
  mutations: {
      changeNum(state, val) {
        // state
        state.num += val;
        console.log(val)
      }
  },
  actions: {
  },
  modules: {
  },
  plugins:[persist()]
})
