<script setup>
definePageMeta({
  name: "F.A.Q",
  hidden: false,
  editable: true,
});
</script>

<template>
  <section id="page-faq">
    <BlockContent />
  </section>
</template>

<style>
#page-faq .block-content {
  @apply flex justify-center;
}

#page-faq #block-40 .block-header{
  @apply w-full;
}

#page-faq .block-accordion {
  @apply w-full max-w-4xl mx-8 my-4;
}

#page-faq .block-header {
  @apply text-white flex flex-col space-y-4;
}

#page-faq .block-header h2 {
  @apply text-6xl font-header;
}

#page-faq .block-header p {
  @apply font-body font-bold uppercase;
}

</style>
