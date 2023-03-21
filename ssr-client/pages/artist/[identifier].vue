<script setup>
import {
  GlobeAltIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/vue/24/solid";

const supabase = useSupabaseClient();
const router = useRouter();

definePageMeta({
  name: "Kunstner",
  hidden: true,
  editable: false,
});

const { data } = await supabase.from("artists").select("*");

// Set all artists
const artists = data;

// Set selected artist
const artist = artists.filter((artist) => {
  return artist.identifier == router.currentRoute.value.params.identifier;
})[0];

// Shuffle method
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

// Suggested array, contains artist info
const suggested = shuffle(
  artists.filter((artist) => {
    return !(artist.identifier == router.currentRoute.value.params.identifier);
  })
);
suggested.length = 3;
</script>

<template>
  <div id="page-artist">
    <PageHeader id="artist-header" :bg="artist.header">
      <h1 class="text-center text-6xl">{{ artist.name }}</h1>
      <h2 class="text-center text-4xl">{{ artist.subtitle }}</h2>
    </PageHeader>

    <section id="artist">
      <div class="artist-info">
        <div v-if="artist.socials" class="artist-socials">
          <h2>Socials</h2>
          <ul>
            <li v-if="artist.socials.website">
              <GlobeAltIcon class="h-6 w-6" /><a
                :href="artist.socials.website"
                target="_blank"
                >Hjemmeside</a
              >
            </li>
            <li v-if="artist.socials.facebook">
              <img
                class="h-6 w-6"
                src="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/facebook.svg"
                alt="Facebook Icon"
              /><a :href="artist.socials.facebook" target="_blank">Facebook</a>
            </li>
            <li v-if="artist.socials.instagram">
              <img
                class="h-6 w-6"
                src="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/instafram.svg"
                alt="Instagram Icon"
              /><a :href="artist.socials.website" target="_blank">Instagram</a>
            </li>
          </ul>
        </div>

        <div class="artist-date">
          <h2>Dato</h2>
          <p>
            <CalendarIcon class="h6 w-6" /><span>{{ artist.date }}</span>
          </p>
        </div>
        <div class="artist-location">
          <h2>Venue</h2>
          <p class="flex space-x-2">
            <MapPinIcon class="h-6 w-6" />
            <span>{{ artist.location }}</span>
          </p>
        </div>
      </div>
      <article class="artist-body">
        <div class="artist-body-inner" v-html="artist.body"></div>
        <iframe
          v-if="artist.socials && artist.socials.spotify"
          style="border-radius: 12px"
          :src="artist.socials.spotify"
          width="100%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </article>
    </section>
    <section id="suggested">
      <h3 class="text-4xl text-center">Se flere kunstnere</h3>
      <div class="suggested">
        <Artist
          v-if="artists.length"
          v-for="(artist, index) in suggested"
          :key="index"
          :name="artist.name"
          :subartist="artist.subtitle"
          :artist-cover="artist.header"
          @click="router.push(`/artist/${artist.identifier}`)"
        />
      </div>
    </section>
  </div>
</template>

<style>
#page-artist {
  @apply text-white;
}

#artist {
  @apply max-w-6xl mx-auto grid lg:grid-cols-4 gap-4 p-4;
}

.artist-info {
  @apply flex flex-col space-y-4 font-body col-span-1;
}

.artist-socials {
  @apply flex flex-col space-y-2;
}

.artist-socials h2 {
  @apply text-2xl;
}

.artist-socials ul {
  @apply flex flex-col space-y-2;
}

.artist-socials li {
  @apply flex items-center space-x-2;
}

.artist-date {
  @apply flex flex-col space-y-2;
}

.artist-date h2 {
  @apply text-2xl;
}

.artist-date p {
  @apply flex items-center space-x-2;
}

.artist-location h2 {
  @apply text-2xl;
}

.artist-location p {
  @apply flex items-center space-x-2;
}

.artist-body {
  @apply flex flex-col space-y-4 col-span-3;
}

.artist-body-inner h2 {
  @apply text-2xl;
}

.artist-body-inner p {
  @apply font-body;
}

#suggested {
  @apply max-w-6xl mx-auto p-4 flex flex-col space-y-8;
}

.suggested {
  @apply grid lg:grid-cols-3 gap-16 col-span-4;
}
</style>
