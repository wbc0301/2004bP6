import Vue from 'vue'
import Vuex from 'vuex'

// 需要安装持久化插件 vuex-persistedstate    cnpm i vuex-persistedstate -S
import persist from 'vuex-persistedstate' // 作用： 用户刷新页面的时候，数据会保持

Vue.use(persist) // 使用
Vue.use(Vuex)

export default new Vuex.Store({
    state: { // vuex 存数据的地方   可以类比成组件里边的data
        name: '',
        detailData: {}, // 详情页商品
        cartList: []    // 购物车商品
    },
    mutations: { // 改变数据的地方
        changeName(state, value) { // 函数内部是对数据修改的逻辑
            console.log(value)
            state.name = value
        },

        changeDetailData(state, data) {
            state.detailData = data;
        },

/* 
        [{
            "_id": "59f087ef11945e2760c852dd",
            "title": "笔记本电脑",
            "cid": "59f1e1ada1da8b15d42234e9",
            "num": 1,
            "price": 2346,
            "old_price": "4000",
            "pic": "http://jd.itying.com/upload/Hfe1i8QDOkfVt-PuGcxCA0fs.jpg",
        },
        {
            "_id": "59f6a2d27ac40b223cfdcf81",
            "title": "乐扣乐扣(lock&lock)菲特旋转盖轻量杯",
            "cid": "59f1e1ada1da8b15d42234e9",
            "num": 1,
            "price": "2001",
            "old_price": "2001",
            "pic": "http://jd.itying.com/upload/iPrQ_-r43nGjFyxYXiMZWTM6.jpg",
        }],
        */
        addCartList(state, obj) {
            if (!state.cartList.length) { // 第一次添加时 数组时空的
                state.cartList.push(obj);
            } else {
                let added = false; // 变量为true时代表已经被添加过
                state.cartList.forEach(item => {
                    if (item._id === obj._id) { // 这个商品被添加过
                        item.num++
                        added = true;
                    } 
                })
                if(!added) {// 这个商品没有添加过
                    state.cartList.push(obj);
                }
            }
        }
    },
    getters:{ // 可以类比计算属性
        allNum(state) {
            let result= 0;
            state.cartList.forEach(item => {
                result += item.num;
            })
            return result;
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
