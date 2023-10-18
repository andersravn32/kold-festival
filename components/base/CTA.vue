<template>
    <a @click="GA4_Event_Ticket()" href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040" target="_blank" class="mainCTA">
        Køb billet
    </a>
</template>

<script setup>

const GA4_Event_Ticket = ()=> {
    //Create dataLayer if its doesn't exist
    dataLayer = window.dataLayer || [];

    //Pushing CTA event to dataLayer
    dataLayer.push({'event' : 'View_tickets'});
}
</script>

<style>
.mainCTA {
    @apply fixed bottom-0 left-0 right-0 p-2 md:p-4 text-3xl md:text-4xl text-center font-header uppercase text-zinc-100 bg-accent font-bold z-[100] transition-all duration-150;
}

.mainCTA:hover {
    @apply scale-105 text-zinc-50 shadow-2xl shadow-zinc-50;
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.4);
}

</style>
