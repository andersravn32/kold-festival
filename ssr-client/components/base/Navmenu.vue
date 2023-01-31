<script setup>
// Manual import statements
import { XMarkIcon } from '@heroicons/vue/24/outline';

// Define router instance
const router = useRouter();

// Filter routes, based on page meta
const routes = router.getRoutes().filter((route) => {
    return !route.meta.hidden
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
            <li v-for="route in routes">
                <NuxtLink @click="$emit('close')" :to="route.path">
                    {{ route.name }}
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
    @apply flex flex-col text-6xl font-header font-bold uppercase text-white/75 text-center space-y-8;
}
</style>