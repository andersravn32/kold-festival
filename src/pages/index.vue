<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { InformationCircleIcon } from "@heroicons/vue/24/solid";

import GridArtist from "../components/GridArtist.vue";
import PricePanel from "../components/PricePanel.vue";
import AboutSection from "../components/AboutSection.vue";

import { artists } from "../assets/data.json";
import bg from "../assets/video/bg-video1.mp4";

// import router from vue-router
const router = useRouter();

const festivalTime = 1675332000000;

const heroTime = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

const artistsData = ref(
  artists.filter((artist) => {
    return artist.type == "concert";
  })
);

const updateTime = () => {
  // get total seconds between the times
  var delta = Math.abs(festivalTime - new Date()) / 1000;

  // calculate (and subtract) whole days
  heroTime.value.days = Math.floor(delta / 86400);
  delta -= heroTime.value.days * 86400;

  // calculate (and subtract) whole hours
  heroTime.value.hours = Math.floor(delta / 3600) % 24;
  delta -= heroTime.value.hours * 3600;

  // calculate (and subtract) whole minutes
  heroTime.value.minutes = Math.floor(delta / 60) % 60;
  delta -= heroTime.value.minutes * 60;

  // what's left is seconds
  heroTime.value.seconds = Math.floor(delta % 60);

  // Credit: Stackoverflow, User: Altinak - https://stackoverflow.com/users/6782/alnitak
};

setInterval(updateTime, 1000);

// Load gsap when page has mounted
onMounted(async () => {

  // Register gsap plugin
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const banner = gsap.timeline();

  // Enter tickets Effect
  const tickets = gsap.timeline();

  // Floating Banner Effect 2
  const talks = gsap.timeline();

  // Position animated banner center
  banner
    .from("#artist-banner", { x: "-50%" })
    .from(".extraSpan", { opacity: 1 });

  // Enterings effect tickets
  tickets.to(".price-panel", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "ease-out",
    stagger: 0.3,
  });

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
    trigger: "#tickets",
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play none none none",
  });

  updateTime();
});


</script>

<template>
  <div id="page-index">
    <section
      id="hero"
      class="relative w-full h-full z-20 flex flex-col items-center justify-center p-4 gradient-divider"
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
        class="hero-logo h-80 md:h-96 lg:h-[512px]"
        src="../assets/img/logo.svg"
        alt="KOLD Icon"
      />
      <h1 class="flex flex-col items-center justify-center">
        <span
          class="text-8xl lg:text-[12rem] uppercase font-bold text-zinc-100 leading-[0.6]"
          >Kold</span
        ><span class="text-4xl lg:text-6xl">Festival</span>
      </h1>
      <h3
        class="flex items-center font-header space-x-2 text-zinc-100 lg:text-2xl"
      >
        <span>{{ heroTime.days }}D</span><span>/</span
        ><span>{{ heroTime.hours }}T</span><span>/</span
        ><span>{{ heroTime.minutes }}M</span><span>/</span
        ><span>{{ heroTime.seconds }}S</span>
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

    <section class="pb-16" id="artist" v-if="artists.length">
      <div
        class="p-4 container mx-auto grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <GridArtist
          v-for="(artist, index) in artistsData"
          :key="index"
          :name="artist.name"
          :artist-cover="artist.header"
          @click="router.push(`/artist/${artist.identifier}`)"
        />
      </div>
    </section>

    <!-- Tickets -->
    <section id="tickets">
      <PricePanel
        class="price-panel"
        title="Partout"
        :price="300"
        :studentPrice="150"
      />
      <PricePanel
        class="price-panel"
        title="Fredag"
        :price="175"
        :studentPrice="100"
      />
      <PricePanel
        class="price-panel"
        title="Lørdag"
        subtitle="(OBS: Gælder ikke Ude af Kontrol)"
        :price="175"
        :studentPrice="100"
      />
      <div
        class="price-panel notice flex p-4 flex-col justify-center items-center bg-blue-900/75 border-2 border-zinc-100"
      >
        <InformationCircleIcon class="h-32 w-32" />
        <h3>Vær opmærksom på..</h3>
        <p class="font-body text-center">
          For at opnå student / ung pris skal man være under 25 år eller have et
          gyldigt studiekort
        </p>
      </div>
    </section>

    <!-- About Section -->
    <AboutSection />

  </div>
</template>

<style>
/* Hero styling */
#hero {
  @apply py-32 lg:py-4 lg:min-h-screen space-y-4 w-full relative z-10 flex items-center justify-center overflow-hidden;
}

.hero-logo {
  animation: hero-logo 180s infinite linear;
}

/* Tickets styling */
#tickets {
  @apply container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 text-zinc-100 md:mb-16;
}

/* Animations */

@keyframes hero-logo {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
