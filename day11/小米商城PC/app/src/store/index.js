import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showLogin: false, // 控制登录框的展示隐藏
        userName: '',
    },
    mutations: {
        changeShowLogin(state, val) {
            state.showLogin = val;
        },
        changeUserName(state, val) {
            state.userName = val;
        },
    },
})
