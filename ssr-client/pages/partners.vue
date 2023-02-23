<template>
    <div id="samarbejdspartnere">
    <PageHeader :bg="bg">
      <h1 class="text-4xl lg:text-6xl uppercase leading-[0.9]">Partnere</h1>
      <h2 class="text-lg lg:text-xl text-center font-body">
        Nedenfor kan se vores fantastiske samarbejdspartnere
      </h2>
    </PageHeader>
    <section id="partnere" class="partnerSection">
        <PagePartner
        v-if="partnere"
        v-for="(data, index) in partnere"
        :key="index"
        :name="data.name"
        :logo="data.logo"
        :link="data.link"
        >
        </PagePartner>
    </section>
  </div>
</template>

<script setup>
/* Meta */
definePageMeta({
//Disable duplicate
  hid: 'Partnere',
//Page Title
  name: "Partnere",
//Page description
  content: 'Default description for the page'
});
const bg = 'https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bgPartnere'
</script>

<style>

.partnerSection {
  @apply p-8 container mx-auto grid gap-16 sm:grid-cols-2 lg:grid-cols-3;
}

</style>