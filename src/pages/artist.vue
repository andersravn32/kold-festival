<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

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
  const response = await fetch(
    "http://127.0.0.1:4000/src/assets/data.json"
  ).then((res) => res.json());

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
  <div class="page" id="page-artist">

  </div>
</template>
<style>
.page {
  @apply grid place-content-center h-screen w-full;
}
</style>
