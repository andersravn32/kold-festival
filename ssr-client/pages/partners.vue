<script setup>
definePageMeta({
  hidden: false,
  name: "Partnere",
  editable: false
});
const bg =
  "https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bgPartnere";
</script>

<template>
  <div id="samarbejdspartnere">
    <BasePageHeader :bg="bg">
      <h1 class="text-4xl lg:text-6xl uppercase leading-[0.9]">Partnere</h1>
      <h2 class="text-lg lg:text-xl text-center font-body">
        Nedenfor kan se vores fantastiske samarbejdspartnere
      </h2>
    </BasePageHeader>
    <section id="partnere" class="partnerSection">
      <BasePartner
        v-if="partnere"
        v-for="(data, index) in partnere"
        :key="index"
        :name="data.name"
        :logo="data.logo"
        :link="data.link"
      >
      </BasePartner>
    </section>
  </div>
</template>

<style>
.partnerSection {
  @apply p-8 container mx-auto grid gap-16 sm:grid-cols-2 lg:grid-cols-3;
}
</style>
