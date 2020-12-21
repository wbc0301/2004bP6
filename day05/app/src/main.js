import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/reset.css'

Vue.config.productionTip = false

// 全局引入vant，这样在使用 组件 时就不需要再引入了。
// 但是如果在JS中使用的还是需要引，  如： import { Toast } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import cookie from '@/utils/cookie';

Vue.prototype.$cookie = cookie;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
