<script setup>
import Accordion from "../components/Accordion.vue";
import PageHeader from "../components/PageHeader.vue";
import bg from "../assets/img/hero-bg.jpg";
import { onMounted } from "vue";


onMounted(() => {

//Create dataLayer if its doesn't exist
dataLayer = window.dataLayer || [];

//Pushing CTA event to dataLayer
dataLayer.push({'event' : 'FAQ_Page'});
});


</script>

<template>
  <div id="page-faq">
    <PageHeader :bg="bg">
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">F.A.Q</h1>
      <h2 class="lg:text-xl text-center font-body">
        Her vil du finde svarene på de fleste af dine spørgsmål
      </h2></PageHeader
    >
      <section id="faq">
      <Accordion title="Hvor kan jeg købe billetter?" :opened="true">
        <p>
          Du kan købe billetter <a class="underline" target="_blank" href="https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040/">her.</a> 
          Der findes tre typer billetter. <br />Vær obs. på, at du skal købe en partoutbillet, 
          hvis du vil til koncerten med Ude Af Kontrol
        </p>
      </Accordion>
      <Accordion title="Hvor får jeg udleveret armbånd til festivalen?">
        <p>
          Armbåndet kan du få udleveret på alle venues eller midt på Banegårdspladsen.
        </p>
      </Accordion>
      <Accordion title="Hvordan kommer jeg rundt til de forskellige venues?">
        <p>
          Alle venues er inden for kort gå-afstand, så der er rig mulighed at få nå rundt til flere forskellige venues.
        </p>
      </Accordion>
      <Accordion title="Er der bar på de forskellige venues?">
        <p>
          Ja, der er bare på alle venues!
        </p>
      </Accordion>
      <Accordion title="Kan jeg købe billet selvom jeg er under 18 år?">
        <p>
          Ja! men du kan ikke købe alkohol i barene eller være med til den store efterfest på Pitstop lørdag nat.
        </p>
      </Accordion>
      <Accordion title="Kan man få studierabat?">
        <p>
          Ja! Der er studierabat og ungdomsrabat (under 25 år) på alle billettyper. <br /> Du kan f.eks. få armbånd til hele festivalen for kun 150 kr. i stedet for de 300 kr., som det normalt vil koste.
        </p>
      </Accordion>
      <Accordion title="Er der overnatningsmuligheder til KOLD?">
        <p>
          Nej, KOLD Festival har ikke overnatningsmuligheder, men der er gode muligheder for at finde værelser på både vandrehjem eller hotel tæt på festivalen.
        </p>
      </Accordion>
      <Accordion title="Må jeg medbringe mine egne drikkevarer på KOLD Festival?">
        <p>
          Nej, der må ikke medbringes egne drikkevarer på vores venues. 
        </p>
      </Accordion>
      <Accordion title="Kan jeg komme til Ude Af Kontrol koncerten med en lørdagsbillet?">
        <p>
          Nej, til denne koncert skal du have et partoutarmbånd.
        </p>
      </Accordion>
      </section>
  </div>
</template>
<style>
#page-faq {
  @apply min-h-screen w-full bg-cover;
}

#faq {
  @apply container max-w-4xl mx-auto flex flex-col space-y-4 p-4;
}

#faq .accordion {
  @apply bg-blue-900/75 p-4 flex flex-col;
}

#faq .accordion-title {
  @apply flex items-center justify-between text-zinc-100 text-2xl font-bold font-header;
}

#faq .accordion-content {
  @apply text-zinc-100 border-t-2 border-zinc-100/50 mt-2 pt-2;
}

.faq-enter-active,
.faq-leave-active {
  @apply transition-all duration-150 ease-in-out;
}
</style>
