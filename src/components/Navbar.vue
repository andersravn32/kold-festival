<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
</script>

<template>
  <header id="navbar">
    <nav class="flex items-center justify-between p-4">
      <router-link to="/" class="flex flex-col items-center">
        <img
          class="h-24 w-24 hover:rotate-90 transition-transform duration-300"
          src="../assets/img/logo.svg"
          alt="KOLD Icon"
        />
      </router-link>
      <ul
        class="flex items-center space-x-8 text-lg font-bold font-header text-zinc-100 uppercase"
      >
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
      <button class="hidden">
        <Bars3Icon class="h-12 w-12 text-zinc-100" />
      </button>
    </nav>
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
