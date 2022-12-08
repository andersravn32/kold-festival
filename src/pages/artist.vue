<script setup>
import { onMounted, ref } from "vue";
import PageHeader from "../components/PageHeader.vue";
import { useRouter } from "vue-router";
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
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
    <section id="artist-info">
      <div id="artist-socials" class="col-span-1 p-4">
        <h2 class="text-xl">Socials</h2>
        <ul
          class="flex flex-col justify-start items-start"
        >
          <li v-if="artist.some.instagram">
            <a :href="artist.some.instagram" target="_blank"
              ><img class="h-8" :src="IgIcon" /><span>Instagram</span></a
            >
          </li>
          <li v-if="artist.some.facebook">
            <a :href="artist.some.facebook" target="_blank"
              ><img class="h-8" :src="FbIcon" alt="" /><span>Facebook</span></a
            >
          </li>
          <li v-if="artist.some.website">
            <a :href="artist.some.website" target="_blank"
              ><GlobeAltIcon class="h-8 w-8" /><span>Hjemmeside</span></a
            >
          </li>
        </ul>
      </div>
      <div id="artist-body" class="col-span-2 p-4 flex flex-col space-y-4" v-html="artist.body">
      </div>
    </section>
  </div>
</template>

<style>
#artist-info {
  @apply container mx-auto grid grid-cols-3;
}

#artist-socials{
  @apply flex flex-col space-y-4;
}

#artist-socials ul{
  @apply flex flex-col space-y-2;
}

#artist-socials ul li a{
  @apply flex items-center space-x-4 font-header font-bold text-zinc-100 transition-all duration-150 uppercase hover:opacity-75;
}
</style>
