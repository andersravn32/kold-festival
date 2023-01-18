<script setup>
import { useRouter } from "vue-router";
import IgIcon from "../assets/img/ig.svg";
import FbIcon from "../assets/img/fb.svg";

const router = useRouter();
const routes = router.getRoutes().filter((route) => {
    if (route.name) {
        return route;
    }
});
</script>

<template>
    <footer>
        <ul
            class="container grid justify-center place-items-center mx-auto gap-4 grid-cols-3 lg:grid-cols-5 border-b-2 border-zinc-100/75 pb-12 mb-12 font-bold text-zinc-100">
            <li v-for="(route, index) in routes" :key="index">
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

<style>
footer {
    @apply p-4 py-24 font-header
}

footer ul a {
  @apply text-zinc-100/75 transition-colors duration-150 hover:text-zinc-100;
}

footer .router-link-active,
footer .router-link-exact-active {
  @apply text-zinc-100;
}
</style>