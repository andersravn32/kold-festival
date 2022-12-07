<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// Import router through useRouter composable
const router = useRouter();

// Define loading state
const loading = ref(false);

// Define artists array
const artist = ref([]);

onMounted(async () => {
  // Update loading state
  loading.value = true;

  // Fetch artist data
  const response = await fetch(
    "http://127.0.0.1:5173/src/assets/data.json"
  ).then((res) => res.json());

  // Filter artists data to locate artist by identifier
  artist.value = response.artists.filter((artist) => {
    return artist.identifier == router.currentRoute.value.params.identifier;
  })[0];

  // If no artist was found, return to index
  if (!artist.value) {
    return router.push("/");
  }
});
</script>

<template>
  <div id="page-artist"></div>
</template>
