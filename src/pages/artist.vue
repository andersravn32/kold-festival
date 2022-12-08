<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// Import router through useRouter composable
const router = useRouter();

// Define loading state
const loading = ref(false);

// Define artists array
let artist = ref([]);

onMounted(async () => {
  // Update loading state
  loading.value = true;

  // Fetch artist data
  const response = await fetch(
    "http://127.0.0.1:4000/src/assets/data.json"
  ).then((res) => res.json());

  // Filter artists data to locate artist by identifier
  artist.value = response.artists.filter((artist) => {
    return artist.identifier == router.currentRoute.value.params.identifier;
  })[0];

  // If no artist was found, return to index
  if (!artist.value) {
    return router.push("/");
  }

  console.log(artist.value)
})

</script>

<template>
  <div class="page" id="page-artist">
    <p class="text-white"></p>
    <section class="hero flex flex-col justify-center items-center relative overflow-hidden">
            <div class="z-40">
                <div class="flex flex-col items-center justify-center">

                </div>
            </div>
            <div class="gradient-backdrop absolute w-full z-20 hero-fade"></div>
<!--             <div class="w-full h-full bg-cover bg-center absolute origin-bottom hero-fade"
                :style="{ 'background-image': `url(${})` }"></div> -->
        </section>





  </div>
</template>
<style>
.page {
  @apply grid place-content-center h-screen w-full;
}


</style>