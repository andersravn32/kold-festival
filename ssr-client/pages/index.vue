<script setup>
definePageMeta({
  name: "Hjem",
  hidden: false,
  editable: true,
});
</script>

<template>
  <section id="page-index">
    <BlockContent />
  </section>
</template>

<style>
#page-index .blocks {
  @apply flex flex-col space-y-8;
}

#page-index .block-content {
  @apply py-4;
}

#page-index #block-35 {
  @apply p-0;
}

#page-index #block-39 .block-container {
  @apply gap-4 container mx-auto;
}
</style>
