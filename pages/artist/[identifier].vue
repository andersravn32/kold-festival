<script setup>
import {
  GlobeAltIcon,
  MapPinIcon,
  CalendarIcon,
  MusicalNoteIcon,
  ClockIcon,
  ChevronRightIcon
} from "@heroicons/vue/24/solid";
import { format } from 'date-fns'
import { da } from 'date-fns/locale'

const supabase = useSupabaseClient();
const router = useRouter();

definePageMeta({
  name: "Kunstner",
  hidden: true,
  editable: false
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
  artists.filter((otherArtist) => {
    return (otherArtist.identifier !== router.currentRoute.value.params.identifier && otherArtist.date.split("-")[0] === artist.date.split("-")[0] && otherArtist.public);
  })
);
suggested.length = (suggested.length > 4) ? 3 : suggested.length;

</script>

<template>
  <div id="page-artist">
    <BasePageHeader id="artist-header" :bg="artist.header">
      <h1 class="text-center text-4xl md:text-6xl">{{ artist.name }}</h1>
      <h2 class="text-center text-2xl md:text-3xl">{{ artist.subtitle }}</h2>
    </BasePageHeader>

    <section id="artist">
      <div class="artist-info">
        <div v-if="artist.location" class="artist-location">
          <h2>Venue</h2>
          <div class="w-full flex lg:flex-col justify-between items-center lg:items-start">
            <p class="flex space-x-2">
              <MapPinIcon class="h-6 w-6" />
              <span>{{ artist.location }}</span>
            </p>
            <a 
            v-if="artist.location_maps"
            class="flex items-center gap-4 group py-2 lg:mt-4 text-lg w-fit rounded-full px-4 overflow-hidden relative" :href="artist.location_maps" target="_blank">
              <p class="group-hover:underline">Find vej</p>
              <ChevronRightIcon class=" w-6" />
              <div class=" bg-gradient-to-r from-indigo-600 to-blue-600 absolute top-0 left-0 -z-10 w-[200%] h-full transition-all duration-500 group-hover:-left-1/2"></div>
            </a>
          </div>
        </div>
        <div v-if="artist.date" class="artist-date">
          <h2>Dato</h2>
          <p>
            <CalendarIcon class="h-6 w-6" />
            <span :class="(artist.cancelled) ? 'line-through' : ''">{{ artist.date ? format(artist.date, 'PPP', { locale: da } ) : artist.date }}</span>
          </p>
          <p class="bg-red-600 py-1 px-4 w-fit rounded-full" v-if="artist.cancelled">Aflyst</p>
        </div>
        <div v-if="artist.time" class="artist-time">
          <h2>Tidspunkt</h2>
          <p>
            <ClockIcon class="h-6 w-6" />
            <span :class="(artist.cancelled) ? 'line-through' : ''">{{ 'kl. ' + artist.time }}</span>
          </p>
        </div>
        <div
          v-if="
            artist.socials &&
            (artist.socials.facebook ||
              artist.socials.instagram ||
              artist.socials.website)
          "
          class="artist-socials"
        >
          <h2>Socials</h2>
          <ul>
            <li class=" hover:underline" v-if="artist.socials.website">
              <GlobeAltIcon class="h-6 w-6" /><a
                :href="artist.socials.website"
                target="_blank"
                >Hjemmeside</a
              >
            </li>
            <li class=" hover:underline" v-if="artist.socials.facebook">
              <img
                class="h-6 w-6"
                src="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/facebook.svg"
                alt="Facebook Icon"
              /><a :href="artist.socials.facebook" target="_blank">Facebook</a>
            </li>
            <li class=" hover:underline" v-if="artist.socials.instagram">
              <img
                class="h-6 w-6"
                src="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/instafram.svg"
                alt="Instagram Icon"
              /><a :href="artist.socials.instagram" target="_blank">Instagram</a>
            </li>
          </ul>
        </div>
        <div v-if="artist.genre.styles.length" class="artist-genre">
          <h2 class="flex">Genre</h2>
          <ul class="flex gap-2 flex-wrap">
            <li 
            v-for="style, key in artist.genre.styles"
            class="artist-genre-style" :key="key"><MusicalNoteIcon class="h-4 w-4" /> {{ style }}</li>
          </ul>
        </div>
      </div>
      <article class="artist-body">
<!--         <div class=" w-full h-64 overflow-hidden">
          <img :src="artist.header" class="w-full h-auto -translate-y-1/4">
        </div> -->
        <div class="artist-body-inner" v-html="artist.body"></div>
        <iframe
          v-if="artist.socials && artist.socials.spotify"
          style="border-radius: 12px"
          :src="'https://open.spotify.com/embed/artist/' + artist.socials.spotify.split('/').pop() + '?utm_source=generator' + '&theme=0'"
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
        <BaseArtist
          v-if="artists.length"
          v-for="(artist, index) in suggested"
          :key="index"
          :name="artist.name"
          :subartist="artist.subtitle"
          :artist-cover="artist.image"
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
  @apply max-w-6xl mx-auto lg:grid space-y-8 lg:space-y-0 lg:grid-cols-4 gap-4 p-4 my-8 ;
}

.artist-info {
  @apply flex flex-col space-y-4 font-body col-span-full w-full lg:col-span-1;
}

.artist-socials {
  @apply flex flex-col space-y-1;
}

.artist-socials h2 {
  @apply text-2xl;
}

.artist-socials ul {
  @apply flex flex-col space-y-1;
}

.artist-socials li {
  @apply flex items-center space-x-2;
}

.artist-date {
  @apply flex flex-col space-y-1;
}

.artist-date h2 {
  @apply text-2xl;
}

.artist-date p {
  @apply flex items-center space-x-2;
}

.artist-time {
  @apply flex flex-col space-y-1;
}

.artist-time h2 {
  @apply text-2xl;
}

.artist-time p {
  @apply flex items-center space-x-2;
}

.artist-location {
  @apply flex flex-col space-y-0 lg:space-y-1;
}

.artist-location h2 {
  @apply text-2xl;
}

.artist-location p {
  @apply flex items-center space-x-2;
}

.artist-genre {
  @apply flex flex-col space-y-2;
}

.artist-genre h2 {
  @apply text-2xl;
}

.artist-genre p {
  @apply flex items-center space-x-2;
}

.artist-genre-style {
  @apply flex justify-center items-center gap-1 bg-zinc-50/10 py-1 px-2 w-fit rounded-full;
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
  @apply grid lg:grid-cols-3 gap-16 col-span-4 px-8;
}
</style>
