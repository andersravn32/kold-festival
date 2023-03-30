<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="block-container">
    <div
      class="block-container-column"
      v-if="data.html"
      v-for="(col, index) in data.html"
      :key="index"
      v-html="col"
    ></div>
  </section>
</template>

<style>
.block-container {
  @apply flex flex-col gap-8 items-center justify-center container px-8 lg:flex-row;
}

.block-container-column {
  @apply py-8;
  width: max(50%, 100%);
}

</style>
