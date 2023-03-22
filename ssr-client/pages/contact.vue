<script setup>
/* Imports */
import {
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/solid";
/* Meta */
definePageMeta({
//Disable duplicate
  hid: 'Kontakt',
//Page Title
  name: "Kontakt",
//Page description
  content: 'Default description for the page'
});

</script>

<template>
    <div id="page-contact">
    <BasePageHeader bg="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bgContact">
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">Kontakt</h1>
      <h2 class="lg:text-xl text-center font-body">
        Udfyld den nedenstående formular for at sende os en direkte besked
      </h2></BasePageHeader
    >
    <!-- temporary text -->
    <p class="font-body text-zinc-50 text-center">Kontaktformularen er ude af drift pt. Se derfor kontaktoplysninger nedenfor</p>
    <FormContact class="max-w-2xl mx-auto p-4"/>

    <div class="contactContainer">

      <div class="contactCard">
          <h2>Kontakt oplysninger</h2>
          <p class="font-bold">Eventkoordinator</p>
          <p>Sabien Uhrenholt</p>
          <a
            class="contactLinks"
            href="tel:+4520228630"
          >
            <PhoneIcon class="contactIcons" />
            <span>20 22 86 30</span>
          </a>
          <a
            class="contactLinks"
            href="mailto:sabuh@kolding.dk"
          >
            <EnvelopeIcon class="contactIcons" />
            <span>musikkolding@kolding.dk</span>
          </a>
      </div>
    </div>
  </div>
</template>


<style>

.contactContainer {
  @apply max-w-2xl mx-auto w-full grid md:grid-cols-2 gap-8 p-4 text-zinc-100 font-body;
}

.contactCard {
  @apply flex flex-col space-y-2;
}

.contactLinks {
  @apply flex items-center w-fit space-x-4 text-zinc-100/90 hover:text-zinc-100 hover:drop-shadow-md shadow-white;
}

.contactIcons {
  @apply h-8 w-8;
}

</style>