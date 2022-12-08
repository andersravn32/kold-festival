<script setup>
defineProps({
    bg: {
        type: String,
        required: true
    }
})
</script>

<template>
  <div class="bg-cover bg-center" :style="{ 'background-image': `url(${bg})` }">
    <div class="gradient-backdrop flex flex-col justify-center items-center py-32 gradient-divider">
        <slot />
    </div>
  </div>
</template>