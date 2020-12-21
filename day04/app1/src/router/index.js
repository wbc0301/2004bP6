import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import list from '../views/list.vue'
import my from '../views/my.vue'

Vue.use(VueRouter) // 注册（使用）

const routes = [
    {
        path: '/',  // URL路径
        name: 'Home', // 路由的名字，（可以有可无）
        component: Home // 对应的组件
    },
    {
        path: '/list',
        name: 'list',
        component: list
    },
    {
        path: '/my',
        name: 'my',
        component: my
    },
]

const router = new VueRouter({
    routes: routes
})

export default router
