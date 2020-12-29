import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/all',
        name: 'all',
        component: () => import(/* webpackChunkName: "all" */ '../views/all.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        meta: { needLogin: true },
        component: () => import(/* webpackChunkName: "cart" */ '../views/cart.vue')
    },
    {
        path: '/collect',
        name: 'collect',
        meta: { needLogin: true },
        component: () => import(/* webpackChunkName: "collect" */ '../views/collect.vue')
    },
    {
        path: '/order',
        name: 'order',
        meta: { needLogin: true },
        component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: () => import(/* webpackChunkName: "aboutUs" */ '../views/aboutUs.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        meta: { needLogin: true },
        component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

import $stroe from '../store'
router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) { // 要跳转的路由是需要登录的
        // 判断用户时候登录
        if ($stroe.state.userName) { // 已登录
            next()
        }else{ // 未登录
            // next('/login')
            $stroe.commit('changeShowLogin', true);
        }
    } else { // 要跳转的路由是不需要登录的
        next()
    }
})



export default router
