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
Vue.prototype.$axios = axios; // 在所有的组件中都可以使用 this.$axios 访问到 axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
