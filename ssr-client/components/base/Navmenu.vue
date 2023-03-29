<script setup>
// Manual import statements
import { XMarkIcon } from "@heroicons/vue/24/outline";

// Define component emits
defineEmits(["close"]);
</script>

<template>
  <div id="navmenu">
    <ul>
      <li>
        <NuxtLink to="/" @click="$emit('close')"> Hjem </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" @click="$emit('close')"> Om os </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/faq" @click="$emit('close')"> F.A.Q </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/program" @click="$emit('close')"> Program </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/partners" @click="$emit('close')"> Partnere </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" @click="$emit('close')"> Kontakt os </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
#navmenu {
  @apply bg-midnight fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center;
}

#navmenu ul {
  @apply flex flex-col text-[3rem] md:text-6xl font-header font-bold uppercase text-white/75 text-center space-y-4 md:space-y-8;
}

#navmenu ul li {
  @apply flex justify-center items-center;
}
</style>
