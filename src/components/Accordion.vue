<script setup>
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";

defineProps({
  opened: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: null,
    required: true,
  },
});
</script>

<template>
  <div class="accordion">
    <div
      class="accordion-title"
      @click="opened = !opened"
    >
      <p>{{ title }}</p>
      <PlusIcon v-if="!opened" class="h-6 w-6 cursor-pointer" />
      <MinusIcon v-if="opened" class="h-6 w-6 cursor-pointer" />
    </div>
    <div v-if="opened" class="accordion-content">
      <slot />
    </div>
  </div>
</template>
