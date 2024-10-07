<script setup>

const supabase = useSupabaseClient();

const { data } = await supabase
  .from("general")
  .select("data")
  .eq("element", "mainButton")
  .single();

const GA4_Event_Ticket = ()=> {
    //Create dataLayer if its doesn't exist
    /* dataLayer = window.dataLayer || []; */

    //Pushing CTA event to dataLayer
    /* dataLayer.push({'event' : 'View_tickets'}); */
}
</script>

<template>
    <a v-if="data.data.link && data.data.title" @click="GA4_Event_Ticket()" :href="data.data.link" target="_blank" class="mainCTA">
        {{ data.data.title }}
    </a>
    <p v-if="data.data.title" class="mainCTA pointer-events-none">
        {{ data.data.title }}
    </p>
</template>

<style>
.mainCTA {
    @apply fixed bottom-0 left-0 right-0 p-2 md:p-4 text-3xl md:text-4xl text-center font-header uppercase text-zinc-100 bg-accent font-bold z-30 transition-all duration-150;
}

.mainCTA:hover {
    @apply scale-105 text-zinc-50 shadow-2xl shadow-zinc-50;
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.4);
}

</style>
