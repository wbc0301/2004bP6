import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import hasBottomNav from '../views/hasBottomNav.vue'
import hot from '../views/hot.vue'
import my from '../views/my.vue'
import login from '../views/login.vue'
import detail from '../views/detail.vue'
import cart from '../views/cart.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'hasBottomNav',
        component: hasBottomNav,
        children:[
            {
                path: '/home',
                name: 'home',
                component: home
            },
            {
                path: '/hot',
                name: 'hot',
                component: hot
            },
            {
                path: '/my',
                name: 'my',
                component: my
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
