import Vue from 'vue'
import Router, { RouteConfig, Route } from 'vue-router'

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

router.beforeEach(async (to: Route, from: Route, next: any) => {
    console.log('ApiTest');
    await fetch((process.env.VUE_APP_API_BASE_URL || "") + "/api/Home/Test")
        .then((response) => response.json() as Promise<number>)
        .then((data) => {
            console.log(data);
        });
})

export default router
