<template>
    <a @click="GA4_Event_Ticket()" href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040" target="_blank" class="cancelCTA">
       Aflyst, ka' du fat det?
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
.cancelCTA {
    @apply fixed bottom-[4.5rem] left-0 right-0 p-4 text-4xl text-center font-header uppercase text-zinc-100 bg-red-800 font-bold z-[100];
}

</style>
