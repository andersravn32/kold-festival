<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
</script>

<template>
  <div class="price-panel">
    <h3 class="text-6xl">{{title}}</h3>
    <div class="flex flex-col text-center">
        <h4 class="lg:text-lg">Student / Ung</h4>
        <p class="text-4xl lg:text-6xl font-bold">{{Math.round(price / 2)}} kr.</p>
    </div>
    <div class="flex flex-col text-center">
        <h4 class="lg:text-xl">Normal pris</h4>
        <p class="text-4xl lg:text-6xl font-bold">{{price}} kr.</p>
    </div>
  </div>
</template>

<style>
.price-panel {
    @apply border-2 border-zinc-100 p-8 flex flex-col items-center text-zinc-100 space-y-4;
}
</style>
