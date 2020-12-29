import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import server from '@/utils/api';

Vue.prototype.$axios = server;

// 注册全局组件 login
import login from '@/components/login'
Vue.component('login', login)
import register from '@/components/register'
Vue.component('register', register)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
