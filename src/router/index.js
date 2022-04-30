import { createRouter, createWebHashHistory } from "vue-router";

import Login from '/src/View/Login.vue'
import Home from '/src/View/Home.vue'
import NotFound from '/src/View/NotFound.vue'
import Customers from '/src/View/Customers.vue'
import Profile from '/src/View/Customers.vue'


const routes= [
    {
        name: 'Login',
        path: '/',
        component: Login,
        meta: {
            title: 'Login',
        }
    },
    {
        name: 'Home',
        path: '/home',
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
    },
    {
        name: 'Profile',
        path: '/Profile',
        component: Profile,
        meta: {
            title: 'Profile',
            header: 1,
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