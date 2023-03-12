<script setup>
// Manual import statements
import { XMarkIcon } from '@heroicons/vue/24/outline';

// Define router instance
const router = useRouter();

//Defined nav order
const navOrder = ['Hjem', 'Program', 'Om os', 'FAQ', 'Partnere', 'Kontakt']

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

// Define component emits
defineEmits(["close"]);
</script>

<template>
    <div id="navmenu">
        <button @click="$emit('close')" class="absolute top-8 right-4">
            <XMarkIcon class="h-16 w-16 text-white" />
        </button>
        <ul>
            <li>
                <NuxtLink to="/">
                    Hjem
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">
                    Om os
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/faq">
                    F.A.Q
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/program">
                    Program
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/partners">
                    Partnere
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">
                    Kontakt os
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style>
#navmenu {
    @apply bg-midnight fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center;
}

#navmenu ul {
    @apply flex flex-col text-[3rem] md:text-6xl font-header font-bold uppercase text-white/75 text-center space-y-4 md:space-y-8;
}
</style>