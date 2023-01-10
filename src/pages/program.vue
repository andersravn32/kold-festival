<script setup>
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import PageHeader from "../components/PageHeader.vue";
import bg from "../assets/img/bg.jpg";

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { artists } from "../assets/data.json";

// Define router from composable
const router = useRouter();

// Define array for storing number and titles of columns
const artistCols = ref([]);
const talkCols = ref([]);

// Define arrays for holding concerts and talks filtered
const concerts = ref([]);
const talks = ref([]);

const artistData = ref(artists.map((artist) => {
    return {
      ...artist,
      dateShort: new Intl.DateTimeFormat("da-DK", {
        weekday: "long",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(artist.date * 1000),
    };
  }))

onMounted(async () => {
  //Creating dataLayer if its doesn't exist
  dataLayer = window.dataLayer || [];

  //Pushing CTA event to dataLayer
  dataLayer.push({ event: "Program_Page" });


  // Map each artist as either a concert or a talk
  concerts.value = artistData.value.filter((artist) => {
    return artist.type == "concert";
  });

  talks.value = artistData.value.filter((artist) => {
    return artist.type == "talk";
  });

  // Get number of dates as array
  concerts.value.forEach((artist) => {
    if (
      !artistCols.value.includes(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      )
    ) {
      artistCols.value.push(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      );
    }
  });
  artistCols.value.reverse();

  // Sort concerts
  concerts.value.sort((x, y) => {
    return x.date - y.date
  })

  // Sort talks
  talks.value.sort((x, y) => {
    return x.date - y.date
  })

  // Get number of dates as array
  talks.value.forEach((artist) => {
    if (
      !talkCols.value.includes(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      )
    ) {
      talkCols.value.push(
        artist.dateShort.substring(0, artist.dateShort.length - 6)
      );
    }
  });
  talkCols.value.reverse();
});
</script>

<template>
  <div id="page-program">
    <PageHeader :bg="bg">
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">Program</h1>
      <h2 class="lg:text-xl text-center font-body">
        Nedenfor kan du læse hele festivalens program
      </h2>
    </PageHeader>
    <section id="program" class="container mx-auto flex flex-col">
      <Tabs v-if="artists.length">
        <Tab title="Musik" class="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div
            v-for="(column, index) in artistCols"
            :key="index"
            class="flex flex-col space-y-4 bg-blue-900/75 p-4"
          >
            <h2 class="text-xl">{{ column }}</h2>
            <ul
              class="flex flex-col space-y-2 divide-y-2 divide-blue-900 text-zinc-100"
            >
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li
                v-for="(artist, index) in concerts.filter((artist) => {
                  return (
                    artist.dateShort.substring(
                      0,
                      artist.dateShort.length - 6
                    ) == column
                  );
                })"
                :key="index"
                class="grid grid-cols-4 font-body pt-2"
              >
                <span
                  class="col-span-2 cursor-pointer underline"
                  @click="router.push(`/artist/${artist.identifier}`)"
                  >{{ artist.name }}</span
                >
                <span>{{ artist.location }}</span>
                <span
                  >kl
                  {{
                    artist.dateShort
                      .substring(
                        artist.dateShort.length - 6,
                        artist.dateShort.length
                      )
                      .replace(".", ":")
                  }}</span
                >
              </li>
            </ul>
          </div>
        </Tab>

        <Tab title="Talks" class="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div
            v-for="(column, index) in talkCols"
            :key="index"
            class="flex flex-col space-y-4 bg-blue-900/75 p-4"
          >
            <h2 class="text-xl">{{ column }}</h2>
            <ul
              class="flex flex-col text-zinc-100 space-y-2 divide-y-2 divide-blue-900"
            >
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li
                v-for="(artist, index) in talks.filter((artist) => {
                  return (
                    artist.dateShort.substring(
                      0,
                      artist.dateShort.length - 6
                    ) == column
                  );
                })"
                :key="index"
                class="grid grid-cols-4 font-body pt-2"
              >
                <span
                  class="col-span-2 underline cursor-pointer"
                  @click="router.push(`/artist/${artist.identifier}`)"
                  >{{ artist.name }}</span
                >
                <span>{{ artist.location }}</span>
                <span
                  >kl
                  {{
                    artist.dateShort
                      .substring(
                        artist.dateShort.length - 6,
                        artist.dateShort.length
                      )
                      .replace(".", ":")
                  }}</span
                >
              </li>
            </ul>
          </div>
        </Tab>
      </Tabs>
    </section>
  </div>
</template>

<style>
#page-program {
  @apply min-h-screen w-full bg-cover;
}

#program {
  @apply container mx-auto flex flex-col p-4;
}

#program .tabs-titles {
  @apply flex items-center space-x-4;
}

#program .tab-title {
  @apply p-2 px-6 text-zinc-100 font-bold font-header border-4 border-indigo-500 bg-blue-900/75 cursor-pointer transition-all duration-150 mb-4;
}

#program .tab-active {
  @apply bg-indigo-500;
}
</style>
