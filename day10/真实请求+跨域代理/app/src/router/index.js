import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import hasBottomNav from '../views/hasBottomNav.vue'
// import hot from '../views/hot.vue'
// import my from '../views/my.vue'
// import login from '../views/login.vue'
// import detail from '../views/detail.vue'
// import cart from '../views/cart.vue'

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
                // component: hot, 
                component: () => import('../views/hot.vue'), // 路由加载
                meta: {
                    needLogin: false,
                }
            },
            {
                path: '/my',
                name: 'my',
                // component: my,
                component: () => import('../views/my.vue'), // 路由加载
                meta: {
                    needLogin: true,
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        // component: login,
        component: () => import('../views/login.vue'), // 路由加载
        meta: {
            needLogin: false,
        }
    },
    {
        path: '/detail',
        name: 'detail',
        // component: detail,
        component: () => import('../views/detail.vue'), // 路由加载
        meta: {
            needLogin: true,
        }
    },
    {
        path: '/cart',
        name: 'cart',
        // component: cart,
        component: () => import('../views/cart.vue'), // 路由加载
        meta: {
            needLogin: true,
        }
    },

]

const router = new VueRouter({
    mode: 'history', // h5的 history路由   兼容性不太好，
    // mode: 'hash', // hash路由 浏览器兼容性好
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
