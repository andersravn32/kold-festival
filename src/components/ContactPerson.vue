<script setup>
import {
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div
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
    </div>
    <div class="flex flex-col space-y-4">
      <a
        class="flex items-center space-x-4 text-zinc-100 font-body"
        href="tel:+4520228630"
      >
        <PhoneIcon class="h-8 w-8" />
        <span>20 22 86 30</span>
      </a>
      <a
        class="flex items-center space-x-4 text-zinc-100 font-body"
        href="mailto:sabuh@kolding.dk"
      >
        <EnvelopeIcon class="h-8 w-8" />
        <span>sabuh@kolding.dk</span>
      </a>
    </div>
  </div>
</template>
