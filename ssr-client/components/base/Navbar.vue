<script setup>
import MenuIcon from '../svg/MenuIcon.vue';

// Navmenu state
const showNavmenu = ref(false);

defineEmits(["toggleScroll"]);
</script>

<template>
    <header>
        <nav id="navbar">
            <NuxtLink to="/">
                <img class="logo"
                    src="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/logo.svg"
                    alt="KOLD Icon" />
            </NuxtLink>
            <ul>
                <li class="text-xl sm:text-2xl">
                    <NuxtLink to="/program">
                        Program
                    </NuxtLink>
                </li>
                <li>
                    <button @click="showNavmenu = !showNavmenu; $emit('toggleScroll');" class="text-white relative z-[100]">
                        <MenuIcon :showMenu="showNavmenu" />
                    </button>
                </li>
            </ul>
            <Transition name="bubble">
              <BaseNavmenu v-if="showNavmenu" @close="showNavmenu = !showNavmenu; $emit('toggleScroll');" />
            </Transition>
        </nav>
    </header>
</template>

<style>
#navbar {
    @apply fixed top-0 inset-x-0 p-4 z-50 flex items-center justify-between bg-gradient-to-b from-blue-900/50 to-transparent;
}

#navbar .logo {
  @apply h-24 w-24 hover:rotate-90 transition-transform duration-300;
}

#navbar ul {
  @apply font-header font-bold text-white/75 flex items-center uppercase;
}
</style>
