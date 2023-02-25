<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section
    class="block-header"
    :style="{ 'background-image': `url(${data.bg})` }"
  >
    <BaseGradient>
      <div
        class="flex flex-col items-center justify-center py-32"
        v-html="data.html"
      ></div>
    </BaseGradient>
  </section>
</template>

<style>
.block-header {
    @apply bg-cover bg-center
}
</style>
