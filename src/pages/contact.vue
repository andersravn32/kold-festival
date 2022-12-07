<script setup>
import FormContact from "../components/Forms/Contact.vue";
import ContactPerson from "../components/ContactPerson.vue";
</script>

<template>
  <div id="page-contact">
    <div class="flex flex-col space-y-2">
      <h1
        class="uppercase font-header font-bold text-8xl text-center text-zinc-100 leading-[0.7]"
      >
        Kontakt
      </h1>
      <p class="text-zinc-100 font-body text-center">
        Udfyld den nedenstående formular for at sende os en direkte besked:
      </p>
    </div>
    <FormContact />

    <div class="grid grid-cols-2 gap-8">

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
  @apply min-h-screen flex flex-col py-32 max-w-2xl mx-auto space-y-8;
}

/* Test */

.flex-center {
  @apply w-full h-[20em] flex;
}

.icon-3d {
  @apply p-[10px] text-white;
}
</style>