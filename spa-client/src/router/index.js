import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Hjem",
            component: () => import("../pages/index.vue")
        },
        {
            path: "/about",
            name: 'Om os',
            component: () => import("../pages/about.vue")
        },
        {
            path: "/program",
            name: 'Program',
            component: () => import("../pages/program.vue")
        },
        {
            path: "/faq",
            name: 'F.A.Q',
            component: () => import("../pages/faq.vue")
        },
        {
            path: "/contact",
            name: 'Kontakt',
            component: () => import("../pages/contact.vue")
        },
        {
            path: "/partners",
            name: 'Partnere',
            component: () => import("../pages/partnere.vue")
        },
        {
            path: "/artist/:identifier",
            component: () => import("../pages/artist.vue")
        }
    ]
})

router.beforeEach(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    return true;
})

export default router;