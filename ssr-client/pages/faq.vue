<script setup>
definePageMeta({
  name: "Faq",
  hidden: false,
  editable: true
})
</script>

<template>
  <section id="page-faq">
    <BlockContent />
  </section>
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