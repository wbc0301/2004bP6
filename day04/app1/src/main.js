import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import promise from './assets/js/promise'
import './assets/js/promise'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
