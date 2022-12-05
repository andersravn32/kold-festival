import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../pages/index.vue")
        },
        {
            path: "/about",
            component: () => import("../pages/about.vue")
        },
        {
            path: "/program",
            component: () => import("../pages/program.vue")
        },
        {
            path: "/faq",
            component: () => import("../pages/faq.vue")
        },
        {
            path: "/contact",
            component: () => import("../pages/contact.vue")
        },
        {
            path: "/artist/:identifier",
            component: () => import("../pages/artist.vue")
        }
    ]
})

export default router;