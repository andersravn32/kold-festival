<script setup>
defineProps({
    bg: {
        type: String
    }
})
</script>

<template>
  <div class="mb-4 relative overflow-hidden">
    <div class="gradient-backdrop flex flex-col justify-center items-center py-32 gradient-divider p-4 text-center">
        <slot />
    </div>
    <img :src="bg" class="absolute -z-10 w-full h-auto bottom-0 translate-y-2/4" />
  </div>
</template>