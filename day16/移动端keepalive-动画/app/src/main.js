import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import axios from 'axios';
axios.defaults.headers.token = '12389uj23rnfcd89h4nrf89'
Vue.prototype.$axios = axios; // 在所有的组件中都可以使用 this.$axios 访问到 axios

import cookie from '@/utils/cookie'
Vue.prototype.$cookie = cookie; // 在所有的组件中都可以使用 this.$cookie 访问到 cookie


// 图片懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    lazyComponent: true,
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
