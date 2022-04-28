import { createRouter, createWebHashHistory } from "vue-router";

import Login from '/src/View/Login.vue'
import Home from '/src/View/Home.vue'
import NotFound from '/src/View/NotFound.vue'
import Customers from '/src/View/Customers.vue'


const routes= [
    {
        name: 'Login',
        path: '/Login',
        component: Login,
        meta: {
            title: 'Login',
        }
    },
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Acceuil',
            header: 1,
        }
    },
    {
        name: 'Customers',
        path: '/Customers',
        component: Customers,
        meta: {
            title: 'Customers',
            header: 1,
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found',
        }
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to, from) =>{
    document.title = to.meta.title;
})

export default router;