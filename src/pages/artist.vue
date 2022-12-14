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
import GridArtist from "../components/GridArtist.vue";

// Import router through useRouter composable
const router = useRouter();

// Define loading state
const loading = ref(false);

// Define artists array
const artists = ref([]);

// Define individual artist
const currentArtist = ref(null);

// Define suggested array
const suggested = ref([]);

// Shuffle method for randomiszing arrays
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const refresh = async () => {
  // Assign values to suggested array
  suggested.value = shuffle(
    artists.value.filter((artist) => {
      return !(artist.identifier == currentArtist.value.identifier);
    })
  ).filter((artist) => {
    return artist.type == "concert";
  });

  // Set static array length
  suggested.value.length = 3;
};

onMounted(async () => {
  //Create dataLayer if its doesn't exist
  dataLayer = window.dataLayer || [];

  //Pushing CTA event to dataLayer
  dataLayer.push({'event' : 'Contact_Page'});

  // Update loading state
  loading.value = true;

  // Fetch artist data
  const response = await fetch("/src/assets/data.json").then((res) =>
    res.json()
  );

  // Reset loading stae
  loading.value = false;

  /// Update artists array
  artists.value = response.artists;

  // Set individual artist based on route param
  currentArtist.value = artists.value.filter((artist) => {
    return artist.identifier == router.currentRoute.value.params.identifier;
  })[0];

  // When fetching has completed, update values
  refresh();
});
</script>

<template>
  <div v-if="currentArtist" id="page-artist">
    <PageHeader :bg="currentArtist.header">
      <h1 class="text-6xl lg:text-8xl">{{ currentArtist.name }}</h1>
    </PageHeader>
    <section id="artist-inner">
      <div id="artist-info">
        <div
          v-if="
            !(
              !currentArtist.socials.facebook &&
              !currentArtist.socials.instagram &&
              !currentArtist.socials.website
            )
          "
          class="flex flex-col space-y-2"
        >
          <h2>Socials</h2>
          <ul class="flex flex-col space-y-2">
            <li v-if="currentArtist.socials.instagram">
              <img :src="IgIcon" alt="Instagram Icon" />
              <a :href="currentArtist.socials.instagram" target="_blank"
                >Instagram</a
              >
            </li>
            <li v-if="currentArtist.socials.facebook">
              <img :src="FbIcon" alt="Facebook Icon" />
              <a :href="currentArtist.socials.facebook" target="_blank"
                >Facebook</a
              >
            </li>
            <li v-if="currentArtist.socials.website">
              <GlobeAltIcon class="h-6 w-6" />
              <a :href="currentArtist.socials.website" target="_blank"
                >Hjemmeside</a
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col space-y-2">
          <h2>Tidspunkt</h2>
          <p class="flex space-x-2">
            <CalendarIcon class="h-6 w-6" />
            <span>{{
              new Intl.DateTimeFormat("da-DK", {
                weekday: "long",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }).format(currentArtist.date * 1000)
            }}</span>
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <h2>Venue</h2>
          <p class="flex space-x-2">
            <MapPinIcon class="h-6 w-6" />
            <span>{{ currentArtist.location }}</span>
          </p>
        </div>
      </div>

      <div id="artist-body">
        <article v-html="currentArtist.body"></article>
        <iframe
          v-if="currentArtist.socials.spotify"
          style="border-radius: 12px"
          :src="`https://open.spotify.com/embed/artist/${currentArtist.socials.spotify}?utm_source=generator&theme=0`"
          width="100%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
    <section v-if="suggested.length" id="artist-suggested">
      <h3 class="font-header font-bold text-white text-6xl text-center">
        Se flere kunstnere
      </h3>
      <div class="grid lg:grid-cols-3 gap-16">
        <GridArtist
          v-for="(artist, index) in suggested"
          :key="index"
          :name="artist.name"
          :artist-cover="artist.header"
          @click="
            router.push(`/artist/${artist.identifier}`);
            currentArtist = artist;
            refresh();
          "
        >
        </GridArtist>
      </div>
    </section>
  </div>
</template>

<style>
#artist-inner {
  @apply max-w-6xl mx-auto grid lg:grid-cols-4 gap-4;
}

#artist-info {
  @apply col-span-1 flex flex-col space-y-4 text-zinc-100 p-4;
}

#artist-info h2 {
  @apply text-2xl font-header;
}

#artist-info p,
#artist-info li {
  @apply font-body flex items-center space-x-2;
}

#artist-info li img {
  @apply h-6 w-6;
}

#artist-body {
  @apply col-span-3 text-zinc-100 flex flex-col space-y-8 p-4;
}

#artist-body article {
  @apply flex flex-col space-y-2;
}

#artist-body article p {
  @apply font-body;
}

#artist-body article h2 {
  @apply text-2xl;
}

#artist-suggested {
  @apply w-full max-w-6xl mx-auto flex flex-col gap-12 mt-8 p-4;
}
</style>
