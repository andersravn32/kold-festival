<script setup>
/* Meta */
definePageMeta({
//Disable duplicate
  hid: 'Kontakt',
//Page Title
  name: "Kontakt",
//Page description
  content: 'Default description for the page'
});
/* Imports */
import {
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
    <div id="page-contact">
    <PageHeader bg="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bgContact">
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">Kontakt</h1>
      <h2 class="lg:text-xl text-center font-body">
        Udfyld den nedenstående formular for at sende os en direkte besked
      </h2></PageHeader
    >
    <p class="font-body text-zinc-50 text-center">Kontaktformularen er ude af drift pt. Se derfor kontaktoplysninger nedenfor</p>
    <FormContact class="max-w-2xl mx-auto p-4"/>

    <div class="max-w-2xl mx-auto w-full grid md:grid-cols-2 gap-8 p-4">
     <div class="flex flex-col space-y-4">

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
    </div>
  </div>
</template>


<style>

</style>