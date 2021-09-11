import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: require("../components/app/index.vue").default
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
