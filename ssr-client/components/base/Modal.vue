<script setup>
const modal = useModal();
</script>

<template>
  <div class="modal">
    <component v-if="modal.getComponent()" :is="modal.getComponent()" @close="modal.toggle()"/>
  </div>
</template>

<style>
.modal {
    @apply bg-midnight shadow-md p-4 text-white;
}
</style>