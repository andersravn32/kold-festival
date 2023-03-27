<template>
    <div id="cancelled">
        <p class="text-2xl font-bold border-solid border-b-4 mb-4">Aflyst</p>
        <ul class="flex"
        v-for="artist, key in cancelled_artist"
        >
        <li class=" text-xl text-zinc-50 text-center font-body " :key="key">{{ artist.name }}</li>
        </ul>
    </div>
</template>

<script setup>

defineProps(['cancelled_artist'])

</script>

<style>

#cancelled {
    @apply container mx-auto font-header flex flex-col justify-center items-center text-zinc-50 text-center p-4 min-w-[24rem] bg-indigo-500/75 mb-8
}

</style>
