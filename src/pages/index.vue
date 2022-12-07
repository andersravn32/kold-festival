<script setup>
import bg from "../assets/video/bg-video1.mp4";
import uak from '../assets/img/ude-af-kontrol_cut.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import GridArtist from "../components/GridArtist.vue"

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const banner = gsap.timeline();

  banner
  .from("#floating-text", { x: "-50%" })
  .from('.extraSpan', { opacity: 1 })

  ScrollTrigger.create({
    animation: banner,
    trigger: "#floating-text",
    scrub: 1,
    start: "top 90% ",
    end: "bottom 40%",
    toggleActions: "restart none none none",
  });
});

</script>

<template>
  <div id="page-index">
    <section id="hero" class=" relative w-full h-full z-20 flex flex-col items-center justify-center">
      <img
          class="hero-logo h-1/2"
          src="../assets/img/logo.svg"
          alt="KOLD Icon"
        />
        <!--         <h1>
          <span
            class="text-[12rem] uppercase font-bold text-zinc-100 font-header leading-[0.7]"
          >
            Kold
          </span>
          <span class="text-8xl font-header text-zinc-100 mb-4">Festival</span>
        </h1> -->
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
      <div
        class="gradient-backdrop absolute hero-fade -z-10"
      >
      </div>
      <video
        :src="bg"
        autoplay
        muted
        loop
        class="absolute w-full h-full object-cover hero-fade -z-10"
      ></video>
    </section>

    <!-- sliding text -->
      <div class="overflow-hidden w-full">
        <div
          class="flex justify-center items-center py-4 font-bold text-[4rem] lg:text-[8rem] xl:text-[12rem] font-header text-zinc-100 space-x-8 lg:space-x-16"
          id="floating-text"
          >
          <span class="opacity-25 extraSpan">KUNSTNERE</span>
          <span class="opacity-25 extraSpan">KUNSTNERE</span>
          <span>KUNSTNERE</span>
          <span class="opacity-25 extraSpan">KUNSTNERE</span>
          <span class="opacity-25 extraSpan">KUNSTNERE</span>
        </div>
      </div>

      <!-- Artist Container -->
    <section id="artist" class="h-screen">
      <div
        class="container mx-auto grid gap-16 grid-cols-1 auto-rows-min md:grid-cols-2 lg:grid-cols-3 h-full"
      >
        <GridArtist name="Ude af Kontrol" :artist-image="uak" :artist-cover="uak"/>
      </div>
    </section>
  </div>
</template>

<style>
#hero {
  @apply h-screen w-full relative z-10 flex items-center justify-center overflow-hidden;
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
