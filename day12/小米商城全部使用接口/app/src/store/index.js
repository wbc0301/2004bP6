import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(persist)

export default new Vuex.Store({
    state: {
        user: {}, // 用户信息
        showLogin: false, // 是否弹出登录框
        showRegister: false, // 是否弹出注册框
        detailData: {}, // 详情页展示的商品
        shoppingCartData: [], // 购物车的商品
    },
    getters: {
        shoppingCartNum(state) { // 购物车的商品数量
            let allNum = 0;
            state.shoppingCartData.forEach(item => {
                allNum += item.num;
            })
            return allNum;
        }
    },
    mutations: {
        changeUser(state, user) {
            state.user = user;
        },
        changeShowLogin(state, val) {
            state.showLogin = val;
        },
        changeShowRegister(state, val) {
            state.showRegister = val;
        },
        changeDetailData(state, obj) {
            state.detailData = obj;
        },
        changeShoppingCartData(state, val) {
            if(Array.isArray(val)) { // 请求购物车数据
                state.shoppingCartData = val;
            }else if(typeof val === 'number'){ // 删除购物车数据
                state.shoppingCartData.splice(val, 1);
            }
        },
    },
    plugins: [persist()]
})
