<template>
<div v-if="(selectedTitle == title)" class="tab">
    <slot />
</div>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
    title: String,
    required: true,
    default:null
})

const selectedTitle = inject("selectedTitle")
</script>