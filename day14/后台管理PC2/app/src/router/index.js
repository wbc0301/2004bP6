import Vue from 'vue'
import VueRouter from 'vue-router'
import teacher from '../views/teacher'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/teacher',
    },
    {// 一级路由
        path: '/teacher',
        name: 'teacher',
        component: teacher,
        redirect: '/teacher/teacher1',
        children: [ // 二级路由
            {
                path: 'teacher1',
                name: 'teacher1',
                component: () => import(/* webpackChunkName: "teacher1" */ '../views/teacher/teacher1')
            },
            {
                path: 'teacher2',
                name: 'teacher2',
                component: () => import(/* webpackChunkName: "teacher2" */ '../views/teacher/teacher2')
            },
            {
                path: 'teacher3',
                name: 'teacher3',
                component: () => import(/* webpackChunkName: "teacher3" */ '../views/teacher/teacher3')
            },
            {
                path: 'detail',
                name: 'detail',
                component: () => import(/* webpackChunkName: "detail" */ '../views/teacher/detail')
            },
        ]
    },
    {//  一级路由
        path: '/student',
        name: 'student',
        component: () => import(/* webpackChunkName: "student" */ '../views/student'),
        redirect: '/student/student1',
        children: [ // 二级路由
            {
                path: 'student1',
                name: 'student1',
                component: () => import(/* webpackChunkName: "student1" */ '../views/student/student1')
            },
            {
                path: 'student2',
                name: 'student2',
                component: () => import(/* webpackChunkName: "student2" */ '../views/student/student2')
            },
            {
                path: 'student3',
                name: 'student3',
                component: () => import(/* webpackChunkName: "student3" */ '../views/student/student3')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/login')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
