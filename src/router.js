import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Base from './pages/Base.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Base,
            children: [
                {
                    name: 'home',
                    path: '/',
                    component: Home
                }
            ]
        },
        {
            name: 'auth',
            path: '/auth',
            component: Login
        },
    ],
})

router.path = routeName => {
    return router.matcher.match({name: routeName}).path
}

export default router

