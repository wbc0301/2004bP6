import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import movie from '../views/movie.vue'
import my from '../views/my.vue'
import detail from '../views/detail.vue'

import nav from '../views/nav.vue'

Vue.use(VueRouter)

const routes = [
    
    {
        path: '/',
        component: nav,
        redirect: '/home', // 重定向
        children: [ // 子路由
            {
                path: '/home',
                name: 'home',
                component: home
            },
            {
                path: '/movie',
                name: 'movie',
                component: movie
            },
            {
                path: '/my',
                name: 'my',
                component: my
            },
        ]
    },

    {
        path: '/detail',
        name: 'detail',
        component: detail
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
