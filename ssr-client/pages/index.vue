<script setup>
definePageMeta({
  name: "Hjem",
  hidden: false,
  editable: true
})
</script>

<template>
  <section id="page-index">
    <BlockContent />
  </section>
</template>

<style>
#page-index .blocks{
  @apply flex flex-col space-y-16;
}

#page-index .block-artist-grid {
  @apply grid grid-cols-3 gap-16 container mx-auto;
}

#page-index #block-39 .block-container{
  @apply gap-4 container mx-auto;
}
</style>