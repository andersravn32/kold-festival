<script setup>
import FormContact from "../components/Forms/Contact.vue";
import ContactPerson from "../components/ContactPerson.vue";
import bg from "../assets/img/hero-bg.jpg";
import PageHeader from "../components/PageHeader.vue";
import { onMounted } from "vue";

onMounted(() => {

//Create dataLayer if its doesn't exist
dataLayer = window.dataLayer || [];

//Pushing CTA event to dataLayer
dataLayer.push({'event' : 'Contact_Page'});

});
</script>

<template>
  <div id="page-contact">
    <PageHeader :bg="bg">
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">Kontakt</h1>
      <h2 class="lg:text-xl text-center font-body">
        Udfyld den nedenstående formular for at sende os en direkte besked
      </h2></PageHeader
    >
    <FormContact class="max-w-2xl mx-auto p-4"/>

    <div class="max-w-2xl mx-auto w-full grid md:grid-cols-2 gap-8 p-4">
      <ContactPerson />
      <ContactPerson />
    </div>
  </div>
</template>
<style>
#page-contact {
  @apply min-h-screen flex flex-col space-y-8;
}
</style>
