<script setup>
definePageMeta({
  name: "Hjem",
  hidden: false,
  editable: true
})

const artists = ref([{ name: 'tim'}, { name: 'teist'}, { name: 'test'}])

artists.value
</script>

<template>
  <section id="page-index">
    <BlockContent />
  </section>
</template>

<style>
#page-index .blocks{
  @apply flex flex-col space-y-8;
}

#page-index #block-39 .block-container{
  @apply gap-4 container mx-auto;
}
</style>