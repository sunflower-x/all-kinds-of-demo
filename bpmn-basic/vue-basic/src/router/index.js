import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


const routes = [
    {
    	path: '/basic',
    	component: () => import('../components/basic.vue')
    }
]

export default new Router({
    base:'/',
    mode:'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})
