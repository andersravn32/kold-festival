<script setup>
import Partner from "../components/Partner.vue"
import PageHeader from "../components/PageHeader.vue";
import bg from "../assets/img/bg.jpg";

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { partnere } from "../assets/data.json";

// Define router from composable
const router = useRouter();

</script>

<template>
  <div id="samarbejdspartnere">
    <PageHeader :bg="bg">
      <h1 class="text-4xl lg:text-6xl uppercase leading-[0.9]">Partnere</h1>
      <h2 class="text-lg lg:text-xl text-center font-body">
        Nedenfor kan se vores fantastiske samarbejdspartnere
      </h2>
    </PageHeader>
    <section id="partnere" class="p-8 container mx-auto grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        <Partner
        v-for="(data, index) in partnere"
        :key="index"
        :name="data.name"
        :logo="data.logo"
        :link="data.link"
        >
        </Partner>
    </section>
  </div>
</template>

<style>

</style>