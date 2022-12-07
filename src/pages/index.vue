<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import GridArtist from "../components/GridArtist.vue";

import bg from "../assets/video/bg-video1.mp4";

// import router from vue-router
const router = useRouter();

// Handles data loading
const loading = ref(false);

const artists = ref([]);

// Load gsap when page has mounted
onMounted(async () => {
  // Update loading state
  loading.value = true;

  // Fetch artist data
  const response = await fetch(
    "http://127.0.0.1:5173/src/assets/data.json"
  ).then((res) => res.json());

  // Update artists
  artists.value = response.artists;

  // Update loading state
  loading.value = false;

  // Register gsap plugin
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const banner = gsap.timeline();

  // Position animated banner center
  banner
    .from("#artist-banner", { x: "-50%" })
    .from(".extraSpan", { opacity: 1 });

  // Create scrolltrigger
  ScrollTrigger.create({
    animation: banner,
    trigger: "#artist-banner",
    scrub: 1,
    start: "top 90% ",
    end: "bottom 40%",
    toggleActions: "restart none none none",
  });
});
</script>

<template>
  <div id="page-index">
    <section
      id="hero"
      class="relative w-full h-full z-20 flex flex-col items-center justify-center p-4"
    >
      <div class="gradient-backdrop absolute hero-fade -z-10"></div>
      <video
        :src="bg"
        autoplay
        muted
        loop
        class="absolute w-full h-full object-cover hero-fade -z-20"
      ></video>

      <img
        class="hero-logo h-1/2"
        src="../assets/img/logo.svg"
        alt="KOLD Icon"
      />
      <h1
        class="flex flex-col items-center justify-center text-zinc-100 font-header"
      >
        <span
          class="text-[12rem] uppercase font-bold text-zinc-100 leading-[0.6]"
          >Kold</span
        ><span class="text-8xl">Festival</span>
      </h1>
      <h3
        class="flex items-center text-4xl font-header space-x-8 text-zinc-100"
      >
        <span>24D</span><span>/</span><span>12T</span><span>/</span
        ><span>02M</span><span>/</span><span>33S</span>
      </h3>
    </section>

    <!-- sliding text -->
    <div class="overflow-hidden w-full">
      <div
        class="flex justify-center items-center py-4 font-bold text-[4rem] lg:text-[8rem] xl:text-[12rem] font-header text-zinc-100 space-x-8 lg:space-x-16"
        id="artist-banner"
      >
        <span class="opacity-25 extraSpan">KUNSTNERE</span>
        <span class="opacity-25 extraSpan">KUNSTNERE</span>
        <span>KUNSTNERE</span>
        <span class="opacity-25 extraSpan">KUNSTNERE</span>
        <span class="opacity-25 extraSpan">KUNSTNERE</span>
      </div>
    </div>

    <!-- Artist Container -->
    <section id="artist" v-if="artists.length">
      <div
        class="p-6 container mx-auto grid gap-16 sm:grid-cols-1 lg:grid-cols-2"
      >
        <GridArtist
          v-for="(artist, index) in artists"
          :key="index"
          :name="artist.name"
          :artist-image="artist.image"
          :artist-cover="artist.header"
        />
      </div>
    </section>
  </div>
</template>

<style>
#hero {
  @apply w-full relative z-10 flex items-center justify-center overflow-hidden;
}

.hero-logo {
  animation: hero-logo 180s infinite linear;
}

@keyframes hero-logo {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
