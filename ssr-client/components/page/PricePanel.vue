<script setup>
const { title, subtitle, price, studentPrice } = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    studentPrice: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <a href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040/" target="_blank"
        class="price-panel hover:bg-blue-600/50 hover:cursor-pointer transition-all duration-300">
        <div>
            <h3 class="text-6xl">{{ title }}</h3>
            <h5 v-if="subtitle" class="font-body text-xs mt-4 text-center">{{ subtitle }}</h5>
        </div>
        <div class="flex flex-col text-center">
            <h4 class="lg:text-lg">Student / Ung</h4>
            <p class="text-4xl lg:text-6xl font-bold">{{ studentPrice }} kr.</p>
        </div>
        <div class="flex flex-col text-center">
            <h4 class="lg:text-xl">Normal pris</h4>
            <p class="text-4xl lg:text-6xl font-bold">{{ price }} kr.</p>
        </div>
    </a>
</template>

<style>
.price-panel {
    @apply border-2 border-zinc-100 p-8 flex flex-col justify-center items-center text-zinc-100 space-y-4;
}
</style>
