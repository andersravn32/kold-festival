<script setup>
import ImageSelector from '~~/components/modal/ImageSelector.vue';

const modal = useModal();
modal.setComponent(h("div", "Hello world"));
modal.toggle();
</script>

<template>
  <section id="demo">
    <BlockContent />
  </section>
</template>

<style>
#demo .blocks{
  @apply flex flex-col space-y-16;
}

#demo .block-artist-grid {
  @apply grid grid-cols-3 gap-16 container mx-auto;
}

#demo #block-39 .block-container{
  @apply gap-4 container mx-auto;
}
</style>