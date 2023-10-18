<script setup>

const GA4_Event_Ticket = ()=> {
    //Create dataLayer if its doesn't exist
    dataLayer = window.dataLayer || [];

    //Pushing CTA event to dataLayer
    dataLayer.push({'event' : 'View_tickets'});
}
</script>
<template>
    <a @click="GA4_Event_Ticket()" href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040" target="_blank" class="fixed bottom-0 left-0 right-0 p-4 text-4xl text-center font-header uppercase text-zinc-100 bg-accent font-bold z-[100]">
        Køb billet
    </a>
</template>