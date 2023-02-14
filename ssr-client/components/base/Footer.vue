<template>
    <footer>
        <ul
            class="footerList">
            <li v-for="(route, index) in navList" :key="index">
                <router-link :to="route.path">
                    {{ route.name }}
                </router-link>
            </li>
        </ul>
        <ul class="text-zinc-100 grid place-content-center">
            <li class="text-center">MUSIKKOLDING</li>
            <li class="text-center">Jens Holms Vej 5, 6000 Kolding</li>
        </ul>
    </footer>
</template>

<script setup>
import { useRouter } from "vue-router";
/* import IgIcon from "../assets/img/ig.svg";
import FbIcon from "../assets/img/fb.svg"; */

const router = useRouter();

//Defined nav order
const navOrder = ['Hjem', 'Program', 'Om os', 'FAQ', 'Partnere', 'Kontakt']

//TO-DO: Define meta settings on pages


// Filter routes, based on page meta
const routes = router.getRoutes().filter((route) => {
    return !route.meta.hidden
})

// Sort routes by navOrder
const navList = navOrder.map(item => {
  return routes.find(route => {
    return route.name == item;
  })
})

</script>

<style>
footer {
    @apply p-4 py-24 font-header
}

.footerList {
    @apply container grid justify-center place-items-center mx-auto gap-4 grid-cols-3 lg:grid-cols-5 border-b-2 border-zinc-100/75 pb-12 mb-12 font-bold text-zinc-100
}

footer ul a {
  @apply text-zinc-100/75 transition-colors duration-150 hover:text-zinc-100;
}

footer .router-link-active,
footer .router-link-exact-active {
  @apply text-zinc-100;
}
</style>