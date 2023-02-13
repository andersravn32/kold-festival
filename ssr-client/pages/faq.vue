<script setup>
/* Meta */
definePageMeta({
//Disable duplicate
  hid: 'FAQ',
//Page Title 
  name: "FAQ",
//Page description
  content: 'Default description for the page'
});
/* Imports */
import { faq } from "../assets/data.json";

</script>
<template>
    <div id="page-faq">
    <PageHeader bg="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bgFaq">
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">F.A.Q</h1>
      <h2 class="lg:text-xl text-center font-body">
        Her vil du finde svarene på de fleste af dine spørgsmål
      </h2></PageHeader
    >
    <section id="faq">
      <Accordion
        v-for="(data, index) in faq"
        :key="index"
        :opened="data.opened || false"
        :title="data.title"
      >
        <p v-html="data.content" />
      </Accordion>
    </section>
  </div>
</template>


<style>
#page-faq {
  @apply min-h-screen w-full bg-cover;
}

#faq {
  @apply container max-w-4xl mx-auto flex flex-col space-y-4 p-4;
}

#faq .accordion {
  @apply bg-blue-900/75 p-4 flex flex-col;
}

#faq .accordion-title {
  @apply flex items-center justify-between text-zinc-100 text-2xl font-bold font-header;
}

#faq .accordion-content {
  @apply text-zinc-100 border-t-2 border-zinc-100/50 mt-2 pt-2;
}

.faq-enter-active,
.faq-leave-active {
  @apply transition-all duration-150 ease-in-out;
}
</style>