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
    component: () => import(/* webpackChunkName: "cart" */ '../views/cart.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/collect.vue')
  },
  {
    path: '/order',
    name: 'order',
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
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
