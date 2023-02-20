<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const columns = props.data.html.length;
</script>

<template>
  <section class="block-container">
    <div
      v-if="data.html"
      v-for="(col, index) in data.html"
      :key="index"
      v-html="col"
    ></div>
  </section>
</template>

<style>
.block-container {
  @apply grid items-center;
  grid-template-columns: repeat(v-bind(columns), 1fr);
}
</style>
