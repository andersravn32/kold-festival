<script setup>
// Define component emits
defineEmits(["close"]);
</script>

<template>
  <div id="navmenu">
    <ul>
      <li>
        <NuxtLink class="link" to="/" @click="$emit('close')">Hjem</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/about" @click="$emit('close')">Om os</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/faq" @click="$emit('close')">F.A.Q</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/program" @click="$emit('close')">Program</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/partners" @click="$emit('close')">Partnere</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/contact" @click="$emit('close')">Kontakt os</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
#navmenu {
  @apply bg-midnight fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center;
}

#navmenu ul {
  @apply flex flex-col items-center font-header font-bold uppercase text-white/50 space-y-4 md:space-y-8;
}

#navmenu ul li {
  @apply flex justify-center items-center text-4xl xl:text-6xl m-0;
}

</style>
