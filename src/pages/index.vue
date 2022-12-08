<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { BellAlertIcon } from "@heroicons/vue/24/solid";

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
    "http://127.0.0.1:4000/src/assets/data.json"
  ).then((res) => res.json());

  // Update artists
  artists.value = response.artists;

  // Update loading state
  loading.value = false;

  // Register gsap plugin
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const banner = gsap.timeline();

  // Enter tickets Effect
  const tickets = gsap.timeline();

  // Position animated banner center
  banner
    .from("#artist-banner", { x: "-50%" })
    .from(".extraSpan", { opacity: 1 });

  // Enterings effect tickets
  tickets
    .to(".priceBox", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "ease-out",
      stagger: 0.3,
    })
    .to(".warning", { y: 0, opacity: 1, duration: 0.5, ease: "ease-out" }, 0.8);

  // Create scrolltrigger
  ScrollTrigger.create({
    animation: banner,
    trigger: "#artist-banner",
    scrub: 1,
    start: "top 90% ",
    end: "bottom 40%",
    toggleActions: "restart none none none",
  });

  ScrollTrigger.create({
    animation: tickets,
    trigger: ".priceBox",
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play none none none",
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
        class="hero-logo h-2/3"
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
    <section class="pb-16" id="artist" v-if="artists.length">
      <div
        class="p-6 container mx-auto grid gap-16 sm:grid-cols-1 lg:grid-cols-2"
      >
        <GridArtist
          v-for="(artist, index) in artists"
          :key="index"
          :name="artist.name"
          :artist-image="artist.image"
          :artist-cover="artist.header"
          @click="router.push(`/artist/${artist.identifier}`)"
        />
      </div>
    </section>

    <!-- Tickets -->
    <section id="tickets">
      <div id="ticketBoxes">
        <div class="priceBox">
          <h3 class="text-4xl">PARTOUT</h3>
          <div
            class="text-white font-body flex flex-col justify-center items-center"
          >
            <p class="font-normal text-2xl">Student / Ung pris</p>
            <h4 class="font-bold text-6xl">150 KR.</h4>
          </div>
          <div
            class="text-white font-body flex flex-col justify-center items-center"
          >
            <p class="font-normal text-2xl">Normal pris</p>
            <h4 class="font-bold text-6xl">300 KR.</h4>
          </div>
        </div>

        <div class="priceBox">
          <h3 class="text-4xl">FREDAG</h3>
          <div
            class="text-white font-body flex flex-col justify-center items-center"
          >
            <p class="font-normal text-2xl">Student / Ung pris</p>
            <h4 class="font-bold text-6xl">175 KR.</h4>
          </div>
          <div
            class="text-white font-body flex flex-col justify-center items-center"
          >
            <p class="font-normal text-2xl">Normal pris</p>
            <h4 class="font-bold text-6xl">350 KR.</h4>
          </div>
        </div>

        <div class="priceBox">
          <h3 class="text-4xl">LØRDAG</h3>
          <div
            class="text-white font-body flex flex-col justify-center items-center"
          >
            <p class="font-normal text-2xl">Student / Ung pris</p>
            <h4 class="font-bold text-6xl">175 KR.</h4>
          </div>
          <div
            class="text-white font-body flex flex-col justify-center items-center"
          >
            <p class="font-normal text-2xl">Normal pris</p>
            <h4 class="font-bold text-6xl">350 KR.</h4>
          </div>
        </div>
        <article class="warning">
          <i><BellAlertIcon class="w-16 h-16"></BellAlertIcon></i>
          <p>
            For at opnå student / ung pris skal man være under 22 år eller have
            et gyldigt studiekort
          </p>
        </article>
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

/* tickets */

#tickets {
  @apply container mx-auto flex flex-col;
}

#ticketBoxes {
  @apply gap-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4;
}

.priceBox {
  @apply relative translate-y-8 opacity-0 flex flex-col justify-center items-center gap-8 py-8 border-2 mx-8 sm:mx-0;
}

.warning {
  @apply relative translate-y-8 opacity-0 h-full bg-blue-900 text-white flex flex-col justify-between items-center font-bold font-body p-12 text-center py-20 border-2 mx-8 sm:mx-0;
}
</style>
