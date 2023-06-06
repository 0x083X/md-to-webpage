import { createRouter, createWebHistory } from 'vue-router'

const routes = [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Article.vue'),
            children : [
    {
        path: '/a',
        name: 'a',
        component: () => import('../views/a.vue'),
        meta: {
            name: 'a' ,
            value: 0
        }
    },
    
    {
        path: '/ABC',
        name: 'ABC',
        component: () => import('../views/ABC.vue'),
        meta: {
            name: 'ABC' ,
            value: 1
        }
    },
    
    {
        path: '/m',
        name: 'm',
        component: () => import('../views/m.vue'),
        meta: {
            name: 'm' ,
            value: 4
        }
    },
    
    {
        path: '/d',
        name: 'd',
        component: () => import('../views/d.vue'),
        meta: {
            name: 'd' ,
            value: 2
        }
    },
    
    {
        path: '/das dsa sa',
        name: 'das dsa sa',
        component: () => import('../views/das dsa sa.vue'),
        meta: {
            name: 'das dsa sa' ,
            value: 3
        }
    },
    
    {
        path: '/杀杀杀',
        name: '杀杀杀',
        component: () => import('../views/杀杀杀.vue'),
        meta: {
            name: '杀杀杀' ,
            value: 6
        }
    },
    
    {
        path: '/woshi',
        name: 'woshi',
        component: () => import('../views/woshi.vue'),
        meta: {
            name: 'woshi' ,
            value: 5
        }
    },
    ],
        },
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router