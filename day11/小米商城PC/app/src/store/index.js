import Vue from 'vue'
import Vuex from 'vuex'
import persisted from 'vuex-persistedstate'


Vue.use(Vuex)
Vue.use(persisted)

export default new Vuex.Store({
    state: {
        showLogin: false, // 控制登录框的展示隐藏
        userName: '',
        detailData: {}, // 详情页数据
        cartList: [], // 购物车的数据
    },
    mutations: {
        changeShowLogin(state, val) {
            state.showLogin = val;
        },
        changeUserName(state, val) {
            state.userName = val;
        },
        changeDetailData(state, val) {
            state.detailData = val;
        },

        // 1: cartList是不是空的  如果空 push
        // 2：查看我当前添加的产品是否已经添加过
        changeCartList(state, val) {
            // state.cartList.push(val);
            if(state.cartList.length === 0) { // 空
                state.cartList.push(val);
            }else { // 非空
                let flag = false;
                state.cartList.forEach(item => {
                    if(item.product_id === val.product_id) { // 已经添加过了
                        item.num ++;
                        flag = true;
                    }
                })
                if(!flag) { // 没有经添加过了
                    state.cartList.push(val);
                }
            }
        },
        delCartList(state, index) {
            state.cartList.splice(index, 1);
        },
    },
    plugins: [persisted()]
})
