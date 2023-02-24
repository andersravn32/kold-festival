<script setup>
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";

defineProps({
    data: {
        type: Object,
        required: true
    }
});
</script>

<template>
  <div class="block-accordion">
    <div
      class="block-accordion-title"
      @click="data.opened = !data.opened"
    >
      <p>{{ data.title }}</p>
      <PlusIcon v-if="!data.opened" class="h-6 w-6 cursor-pointer" />
      <MinusIcon v-if="data.opened" class="h-6 w-6 cursor-pointer" />
    </div>
    <div v-if="data.opened" class="block-accordion-content" v-html="data.content">
    </div>
  </div>
</template>

<style>
.block-accordion {
    @apply bg-blue-900/75 p-4 flex flex-col;
}

.block-accordion-title {
  @apply font-bold font-header flex items-center justify-between text-white text-2xl cursor-pointer;
}

.block-accordion-content{
  @apply text-lg text-white border-t-2 border-zinc-100/50 mt-2 pt-2;
}
</style>