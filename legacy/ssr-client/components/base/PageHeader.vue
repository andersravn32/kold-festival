<script setup>
defineProps({
    bg: {
        type: String
    }
})
</script>

<template>
  <div class="bg-cover bg-center mb-4" :style="{ 'background-image': `url(${bg})` }">
    <div class="gradient-backdrop flex flex-col justify-center items-center py-32 gradient-divider p-4 text-center">
        <slot />
    </div>
  </div>
</template>