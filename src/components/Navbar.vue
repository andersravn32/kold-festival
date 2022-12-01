<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
</script>

<template>
  <header id="navbar">
    <router-link to="/" class="flex flex-col items-center">
      <img
        class="sm:h-24 sm:w-24 h-16 w-16"
        src="../assets/img/logo.svg"
        alt="KOLD Icon"
      />
      <span
        class="font-header text-zinc-100 text-lg sm:flex items-center hidden"
      >
        <span class="uppercase font-bold">Kold</span><span>Festival</span>
      </span>
    </router-link>
    <button>
      <Bars3Icon class="h-12 w-12 text-zinc-100" />
    </button>
  </header>
</template>

<style>
#navbar {
  @apply fixed z-10 top-0 left-0 right-0 p-4 flex items-center justify-between;
}
</style>
