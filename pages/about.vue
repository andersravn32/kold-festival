<script setup>
definePageMeta({
  name: "Om os",
  hidden: false,
  editable: true
})
</script>

<template>
  <section id="page-about">
    <BlockContent />
  </section>
</template>

<style>
#page-about .block-header h2 {
  @apply text-white font-header text-6xl;
}

#page-about .block-container {
  @apply container mx-auto gap-8 my-8;
}

#page-about .block-container h3 {
  @apply text-white text-4xl mb-2;
}

#page-about .block-container p {
  @apply text-white font-body;
}

#page-about .block-content:nth-child(odd) .block-container {
  @apply flex-col-reverse lg:flex-row;
}
</style>