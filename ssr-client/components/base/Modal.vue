<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
const modal = useModal();
</script>

<template>
  <div class="modal">
    <button class="absolute top-4 right-4" @click="modal.toggle()">
      <XMarkIcon class="h-6 w-6" />
    </button>
    <component v-if="modal.getComponent()" :is="modal.getComponent()" @close="modal.toggle()" />
  </div>
</template>

<style>
.modal {
  @apply bg-midnight shadow-md p-4 text-white relative;
}
</style>