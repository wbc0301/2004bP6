import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import hasBottomNav from '../views/hasBottomNav.vue'
import hot from '../views/hot.vue'
import my from '../views/my.vue'
import login from '../views/login.vue'
import detail from '../views/detail.vue'
import cart from '../views/cart.vue'

import cookie from '@/utils/cookie'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'hasBottomNav',
        component: hasBottomNav,
        redirect: '/home', // 路由重定向
        children: [
            {
                path: '/home',
                name: 'home',
                component: home,
                meta: {
                    needLogin: false,
                }
            },
            {
                path: '/hot',
                name: 'hot',
                component: hot,
                meta: {
                    needLogin: false,
                }
            },
            {
                path: '/my',
                name: 'my',
                component: my,
                meta: {
                    needLogin: true,
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            needLogin: false,
        }
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail,
        meta: {
            needLogin: true,
        }
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart,
        meta: {
            needLogin: true,
        }
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    // console.log(to)
    if (to.meta.needLogin) { // 去需要登录的页面
        if (cookie.getCookie('isLogin') === '1') { // 已登录
            next()
        } else { // 没有登录
            next('/login')
        }
    } else {// 去不需要登录的页面
        next()
    }



    
})

export default router
