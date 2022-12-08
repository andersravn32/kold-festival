<script setup>
defineProps({
    bg: {
        type: String,
        required: true
    }
})
</script>

<template>
  <div class="bg-cover bg-center hero-fade" :style="{ 'background-image': `url(${bg})` }">
    <div class="gradient-backdrop flex flex-col justify-center items-center py-32">
        <slot />
    </div>
  </div>
</template>