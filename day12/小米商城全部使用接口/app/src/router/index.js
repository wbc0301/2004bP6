import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import $store from '../store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    name: 'home',
    component: home
}, {
    path: '/allGoods',
    name: 'allGoods',
    component: () => import(/* webpackChunkName: "allGoods" */ '../views/allGoods.vue')
}, {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import(/* webpackChunkName: "aboutUs" */ '../views/aboutUs.vue')
}, {
    path: '/order',
    name: 'order',
    meta: { needLgin: true },
    component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')
}, {
    path: '/collect',
    name: 'collect',
    meta: { needLgin: true },
    component: () => import(/* webpackChunkName: "collect" */ '../views/collect.vue')
}, {
    path: '/cart',
    name: 'cart',
    meta: { needLgin: true },
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart.vue')
}, {
    path: '/detail',
    name: 'detail',
    meta: { needLgin: true },
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.needLgin) { // 需要登录
        //判断是否登录
        if ($store.state.user.userName) { // 已登录
            next();
        } else { // 未登录
            if (from.path === '/') { // 用户直接输入URL地址进行访问，重定向到首页登录
                next('/')
            }
            $store.commit('changeShowLogin', true);
        }
    } else { // 无需登录
        next()
    }

})


export default router
