import { createRouter,createWebHistory } from "vue-router";

const route = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: ()=>import("../views/HomeView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: ()=>import("../views/AboutView.vue"),
        },
    ],
});

export default route;