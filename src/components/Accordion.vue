<script setup>
import { PlusIcon } from "@heroicons/vue/24/outline";

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
    <div class="accordion-title" @click="(opened = !opened)">
      <p>{{ title }}</p>
      <PlusIcon class="h-6 w-6" />
    </div>

    <div v-if="opened" class="accordion-content">
        <slot/>
    </div>
  </div>
</template>
