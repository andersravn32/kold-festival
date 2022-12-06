<script setup>
import NavMenu from "./NavMenu.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const showMenu = ref(false);
</script>

<template>
  <header id="navbar">
    <nav
      class="flex items-center justify-between p-4 bg-gradient-to-b from-blue-900/50 to-transparent"
    >
      <router-link to="/" class="flex flex-col items-center">
        <img
          class="h-24 w-24 hover:rotate-90 transition-transform duration-300"
          src="../assets/img/logo.svg"
          alt="KOLD Icon"
        />
      </router-link>
      <ul
        class="flex items-center space-x-6 text-lg font-bold font-header text-zinc-100 uppercase"
      >
        <li>
          <router-link to="/program">Program</router-link>
        </li>
        <li>
          <button @click="showMenu = !showMenu">
            <Bars3Icon class="h-16 w-16 transition-all duration-150 text-zinc-100/75 hover:text-zinc-100" />
          </button>
        </li>
      </ul>
    </nav>
    <Transition name="bubble">
      <NavMenu v-if="showMenu" @close="showMenu = false" />
    </Transition>
  </header>
</template>

<style>
#navbar {
  @apply fixed z-50 top-0 left-0 right-0;
}

#navbar ul a {
  @apply text-zinc-100/75 transition-colors duration-150 hover:text-zinc-100;
}

#navbar .router-link-active,
#navbar .router-link-exact-active {
  @apply text-zinc-100;
}
</style>
