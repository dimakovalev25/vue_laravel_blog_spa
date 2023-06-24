import {createRouter, createWebHistory } from "vue-router";
import Home from '../resources/js/components/Home.vue'
import About from '../resources/js/components/About.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    }
    ,
    {
        path: "/posts",
        name: "posts.index",
        component: function () {
           return  import('../resources/js/components/Posts/Index.vue')
        },
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
