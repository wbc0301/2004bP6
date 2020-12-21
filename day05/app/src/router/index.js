import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import movie from '../views/movie.vue'
import my from '../views/my.vue'
import detail from '../views/detail.vue'

import nav from '../views/nav.vue'
import login from '../views/login.vue'


import one from '../views/one.vue'
import two from '../views/two.vue'

import cookie from '../utils/cookie'

Vue.use(VueRouter)

const routes = [ // 路由的规则
    { // 一级路由
        path: '/',
        component: nav, // 只要有子路由就 一定得有一个<router-view> 用来承载子路由的组件
        redirect: '/home', // 重定向
        children: [ // 子路由
            {
                path: 'home',
                name: 'home',
                component: home,
                meta: {
                    needLogin: false,
                }
            },
            {
                path: 'movie',
                name: 'movie',
                component: movie,
                meta: {
                    needLogin: true,
                }
            },
            {
                path: 'my',
                name: 'my',
                component: my,
                meta: {
                    needLogin: true,
                },
                children: [
                    {
                        path: 'one', // 不能加 /
                        name: 'one',
                        component: one
                    },
                    {
                        path: 'two', // 不能加 /
                        name: 'two',
                        component: two
                    },
                ]
            },
        ]
    },

    { // 一级路由  凡是一级路由的组件，都展示在app.vue这个入口组件的 <router-view />
        path: '/detail', // url 
        name: 'detail',  // 路由的名字
        component: detail,  // 对应URL要展示的组件
        meta: {
            needLogin: true,
        }
    },

    { // 一级路由  凡是一级路由的组件，都展示在app.vue这个入口组件的 <router-view />
        path: '/login', // url 
        name: 'login',  // 路由的名字
        component: login  // 对应URL要展示的组件
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach里边的回调函数 这个函数会在所有路由切换之前调用
router.beforeEach((to, from, next) => {
    // to 有要跳转到的路由的相关信息
    // from 有从哪里来的路由的相关信息
    console.log(to)
    if(to.meta.needLogin) { // 去的路由是需要登录的
        if(cookie.getCookie('loginStatus') === '1') { // 已经登录
            next()
        }else{ // 没有登录
            next('/login')
            // router.push('/login') // router 就是组件内部的 this.$router
        }
    }else{ // 去不需要登录的页面
        next()
    }
})

export default router
