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
            name: 'About',
            component: () => import("../pages/about.vue")
        },
        {
            path: "/program",
            name: 'Program',
            component: () => import("../pages/program.vue")
        },
        {
            path: "/faq",
            name: 'FAQ',
            component: () => import("../pages/faq.vue")
        },
        {
            path: "/contact",
            name: 'Contact',
            component: () => import("../pages/contact.vue")
        },
        {
            path: "/artist/:identifier",
            component: () => import("../pages/artist.vue")
        }
    ]
})

export default router;