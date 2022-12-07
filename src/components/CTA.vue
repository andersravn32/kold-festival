<script setup>
import { useRouter } from "vue-router";

// Import router from composable
const router = useRouter();
</script>

<template>
    <button class="fixed uppercase bottom-0 w-full h-20 bg-accent text-center z-50">
        <p class="font-bold font-header text-zinc-50 text-4xl pt-2 h-full grid place-content-center">Køb billet</p>
    </button>
</template>