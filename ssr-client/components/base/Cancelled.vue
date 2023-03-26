<template>
    <!-- <a @click="GA4_Event_Ticket()" href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040" target="_blank" class="cancelCTA">
       Aflyst, ka' du fat det?
    </a> -->
    <div id="cancelled">
        <p class="text-2xl">Aflyst</p>
        <div class="grid grid-cols-3"
        v-for="artist, key in artists"
        >
        <p :key="key">{{ artist.name }}</p>
        </div>
    </div>
</template>

<script setup>

// Filter artist by cancelled concert

const { data, error } = await supabase
  .from("artists")
  .select("*")
const artists = ref(data);

</script>

<style>

#cancelled {
    @apply container font-header flex flex-col justify-center items-center bg-zinc-50 text-center
}

</style>
