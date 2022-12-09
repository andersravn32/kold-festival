<script setup>
import { onMounted, ref, computed } from "vue";
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
const artist = ref(null);

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
  // Set individual artist based on route param
  artist.value = artists.value.filter((artist) => {
    return artist.identifier == router.currentRoute.value.params.identifier;
  })[0];

  // Assign values to suggested array
  suggested.value = shuffle(
    artists.value.filter((artist) => {
      return !(
        artist.identifier == router.currentRoute.value.params.identifier
      );
    })
  );

  // Set static array length
  suggested.value.length = 3;

  console.log(suggested.value);
};

onMounted(async () => {
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

  // When fetching has completed, update values
  refresh();
});
</script>

<template>
  <div v-if="artist" id="page-artist">
    <PageHeader :bg="artist.header">
      <h1 class="text-8xl">{{ artist.name }}</h1>
    </PageHeader>
    <section id="artist-inner">
      <div id="artist-info">
        <div v-if="artist.socials" class="flex flex-col space-y-2">
          <h2>Socials</h2>
          <ul class="flex flex-col space-y-2">
            <li v-if="artist.socials.instagram">
              <img :src="IgIcon" alt="Instagram Icon" />
              <a :href="artist.socials.instagram" target="_blank">Instagram</a>
            </li>
            <li v-if="artist.socials.facebook">
              <img :src="FbIcon" alt="Facebook Icon" />
              <a :href="artist.socials.facebook" target="_blank">Facebook</a>
            </li>
            <li v-if="artist.socials.website">
              <GlobeAltIcon class="h-6 w-6" />
              <a :href="artist.socials.website" target="_blank">Hjemmeside</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col space-y-2">
          <p><CalendarIcon class="h-6 w-6" /></p>
          <span class="flex gap-2">
            <h2>
              {{
                new Intl.DateTimeFormat("da-DK", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }).format(artist.date * 1000)
              }}
            </h2>
          </span>
        </div>
        <div class="flex flex-col space-y-2">
          <p>Venue</p>
          <span>
            <MapPinIcon class="h-6 w-6" />
            <h2>{{ artist.location }}</h2>
          </span>
        </div>
      </div>

      <div id="artist-body" v-html="artist.body"></div>
    </section>
    <section v-if="suggested.length" id="artist-suggested">
      <h3 class="font-header font-bold text-white text-6xl">
        Se flere kunstnere
      </h3>
      <div class="grid grid-cols-3 gap-16">
        <GridArtist
          v-for="(artist, index) in suggested"
          :key="index"
          :name="artist.name"
          :artist-cover="artist.header"
          @click="
            router.push(`/artist/${artist.identifier}`);
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
  @apply container mx-auto grid grid-cols-4 gap-4;
}

#artist-info {
  @apply col-span-1 flex flex-col space-y-4 text-zinc-100;
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
  @apply col-span-3 text-zinc-100 flex flex-col space-y-2;
}

#artist-body p {
  @apply font-body;
}

#artist-suggested {
  @apply container mx-auto flex flex-col justify-center items-center gap-12 mt-8;
}
</style>
