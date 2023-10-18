<script setup>
import {
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex flex-col space-y-4">
<!--     <div
      class="relative bg-cover bg-top h-72 w-full"
      :style="{
        'background-image':
          'url(https://thispersondoesnotexist.com/image)',
      }"
    >
      <div class="absolute left-0 right-0 bottom-0 bg-indigo-500/75 p-4">
        <h3 class="font-body">Klaus Nielsen</h3>
        <h4 class="text-zinc-100/75 font-body text-sm">PR Medarbejder</h4>
      </div>
    </div> -->
    <h2>Kontakt oplysninger</h2>
    <div class="flex flex-col space-y-4">
      <p class=" font-body font-bold text-zinc-100">Eventkoordinator</p>
      <p class=" font-body text-zinc-100">Sabien Uhrenholt</p>
      <a
        class="flex items-center space-x-4 text-zinc-100 font-body hover:font-bold"
        href="tel:+4520228630"
      >
        <PhoneIcon class="h-8 w-8" />
        <span>20 22 86 30</span>
      </a>
      <a
        class="flex items-center space-x-4 text-zinc-100 font-body hover:font-bold"
        href="mailto:sabuh@kolding.dk"
      >
        <EnvelopeIcon class="h-8 w-8" />
        <span>musikkolding@kolding.dk</span>
      </a>
    </div>
  </div>
</template>
