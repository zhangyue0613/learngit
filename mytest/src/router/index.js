import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'



Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '*',
        redirect:'/login'
    }
]

const router = new VueRouter({
    //mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router