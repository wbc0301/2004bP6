import Vue from 'vue'
import Vuex from 'vuex'

// 需要安装持久化插件 vuex-persistedstate    cnpm i vuex-persistedstate -S
import persist from 'vuex-persistedstate' // 作用： 用户刷新页面的时候，数据会保持

Vue.use(persist) // 使用
Vue.use(Vuex)

export default new Vuex.Store({
    state: { // vuex 存数据的地方 
        name: '',
        detailData: {},
    },
    mutations: { // 改变数据的地方
        changeName(state, value) { // 函数内部是对数据修改的逻辑
            console.log(value)
            state.name = value
        },

        changeDetailData(state, data) {
            state.detailData = data;
        }
    },
    actions: {
    },
    modules: {
    },
    plugins: [
        persist()
    ]
})
