import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css';

Vue.config.productionTip = false

// 引入elelment-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 拦截器
import server from '@/utils/server'
Vue.prototype.$axios = server;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
