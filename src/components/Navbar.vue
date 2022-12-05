<script setup>
import MobileMenu from '../components/MobileMenu.vue';
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from 'vue'



let navToggle = ref(false)

</script>

<template>
  <header id="navbar">
    <nav class="flex items-center justify-between p-4 bg-gradient-to-b from-blue-900/50 to-transparent">
      <router-link to="/" class="flex flex-col items-center">
        <img class="h-24 w-24 hover:rotate-90 transition-transform duration-300" src="../assets/img/logo.svg"
          alt="KOLD Icon" />
      </router-link>
      <ul class="hidden lg:flex items-center space-x-6 text-lg font-bold font-header text-zinc-100 uppercase">
        <li>
          <router-link to="/program">Program</router-link>
        </li>
        <li>/</li>
        <li>
          <router-link to="/faq">F.A.Q</router-link>
        </li>
        <li>/</li>
        <li>
          <router-link to="/contact">Kontakt</router-link>
        </li>
      </ul>
      <button @click="navToggle = !navToggle" class="lg:hidden burgerMenu z-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
          class="w-16 h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
    </nav>
    <transition name="fade">
      <MobileMenu  :activeClass='navToggle' class="mobileMenu shadow-md" :class="navToggle ? 'active' : ''" @close="navToggle = !navToggle" />
    </transition>
  </header>
</template>

<style>

.mobileMenu {
  transition: all 300ms ease-out;
  clip-path: circle(0.1% at 92% 10%);
}

.active {
  clip-path: circle(200% at 92% 10%);
}

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
