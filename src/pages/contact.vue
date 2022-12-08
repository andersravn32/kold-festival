<script setup>
import FormContact from "../components/Forms/Contact.vue";
import ContactPerson from "../components/ContactPerson.vue";
import bg from "../assets/img/hero-bg.jpg";
import PageHeader from "../components/PageHeader.vue";
</script>

<template>
  <div id="page-contact">
    <PageHeader :bg="bg">
      <h1 class="text-8xl uppercase leading-[0.9]">Kontakt</h1>
      <h2 class="text-xl text-center font-body">
        Udfyld den nedenstående formular for at sende os en direkte besked
      </h2></PageHeader
    >
    <FormContact class="max-w-2xl mx-auto"/>

    <div class="max-w-2xl mx-auto w-full grid grid-cols-2 gap-8">
      <ContactPerson />
      <ContactPerson />
    </div>

    <!--     <section class="test">
      <div class="flex-center">
        <i class="icon-3d"
          ><ArrowDownCircleIcon class="w-32 h-32"></ArrowDownCircleIcon
        ></i>
        <i class="icon-3d"
          ><ArrowDownCircleIcon class="w-32 h-32"></ArrowDownCircleIcon
        ></i>
      </div>
    </section> -->
  </div>
</template>
<style>
#page-contact {
  @apply min-h-screen flex flex-col space-y-8;
}

/* Test */

.flex-center {
  @apply w-full h-[20em] flex;
}

.icon-3d {
  @apply p-[10px] text-white;
}
</style>
