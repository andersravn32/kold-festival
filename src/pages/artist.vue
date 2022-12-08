<script setup>
import { onMounted, ref } from "vue";
import PageHeader from "../components/PageHeader.vue";
import { useRouter } from "vue-router";
import {
  GlobeAltIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/vue/24/solid";
import IgIcon from "../assets/img/ig.svg";
import FbIcon from "../assets/img/fb.svg";

// Import router through useRouter composable
const router = useRouter();

// Define loading state
const loading = ref(false);

// Define artists array
const artist = ref(null);

onMounted(async () => {
  // Update loading state
  loading.value = true;

  // Fetch artist data
  const response = await fetch("/src/assets/data.json").then((res) =>
    res.json()
  );

  // Reset loading stae
  loading.value = false;

  // Filter artists data to locate artist by identifier
  artist.value = response.artists.filter((artist) => {
    return artist.identifier == router.currentRoute.value.params.identifier;
  })[0];

  // If no artist was found, return to index
  if (!artist.value) {
    return router.push("/");
  }

  console.log(artist.value);
});
</script>

<template>
  <div v-if="artist" id="page-artist">
    <PageHeader :bg="artist.header">
      <h1 class="text-8xl">{{ artist.name }}</h1>
    </PageHeader>
    <section id="artist-inner">
      <div id="artist-info">
        <div v-if="artist.some" class="flex flex-col space-y-2">
          <h2>Socials</h2>
          <ul class="flex flex-col space-y-2">
            <li v-if="artist.some.instagram">
              <img :src="IgIcon" alt="Instagram Icon">
              <a :href="artist.some.instagram" target="_blank">Instagram</a>
            </li>
            <li v-if="artist.some.facebook">
              <img :src="FbIcon" alt="Facebook Icon">
              <a :href="artist.some.facebook" target="_blank">Facebook</a>
            </li>
            <li v-if="artist.some.website">
              <GlobeAltIcon class="h-6 w-6" />
              <a :href="artist.some.website" target="_blank">Hjemmeside</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col space-y-2">
          <h2>Tidspunkt</h2>
          <p>
            <CalendarIcon class="h-6 w-6" />
            <span>
              {{
                new Intl.DateTimeFormat("da-DK", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(artist.date * 1000)
              }}</span
            >
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <h2>Lokation</h2>
          <p>
            <MapPinIcon class="h-6 w-6" /><span>{{ artist.location }}</span>
          </p>
        </div>
      </div>

      <div id="artist-body" v-html="artist.body"></div>
    </section>
  </div>
</template>

<style>
#artist-inner {
  @apply container mx-auto grid grid-cols-4 gap-4;
}

#artist-info {
  @apply col-span-1 flex flex-col space-y-4 text-zinc-100;
}

#artist-info h2 {
  @apply text-2xl;
}

#artist-info p,
#artist-info li {
  @apply font-body flex items-center space-x-2;
}

#artist-info li img{
  @apply h-6 w-6;
}

#artist-body {
  @apply col-span-3 text-zinc-100 flex flex-col space-y-2;
}

#artist-body p{
  @apply font-body;
}
</style>
