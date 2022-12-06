<script setup>
import bg from "../assets/video/bg-video1.mp4";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Floating Banner Effect
  const banner = gsap.timeline();

  banner
  .fromTo("#floating-text", { x: "-130%" }, { x: '-105%' })
  .from('.extraSpan', { opacity: 1 })

  ScrollTrigger.create({
    animation: banner,
    trigger: "#floating-text",
    scrub: 1,
    start: "top 80% ",
    end: "bottom 60%",
    toggleActions: "restart none none none",
  });
});

// Image pop effect
const timeline = gsap.timeline({defaults: {duration: 1}})
timeline.from('#img-pop', {opacity: '0', y: '-2%', stagger: .2
        })

</script>

<template>
  <div id="page-index">
    <section id="hero">
      <video
        :src="bg"
        autoplay
        muted
        loop
        class="absolute w-full h-full object-cover z-10"
      ></video>
      <div
        class="gradient-backdrop absolute w-full h-full z-20 flex flex-col items-center justify-center"
      >
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
      </div>
    </section>

    <!-- sliding text -->
      <div class="overflow-hidden w-full">
        <div
          class="flex py-4 font-bold text-[12rem] font-header text-zinc-100 space-x-16"
          id="floating-text"
          >
          <span class="opacity-50 extraSpan">KUNSTNERE</span>
          <span class="opacity-50 extraSpan">KUNSTNERE</span>
          <span>KUNSTNERE</span>
          <span class="opacity-50 extraSpan">KUNSTNERE</span>
          <span class="opacity-50 extraSpan">KUNSTNERE</span>
        </div>
      </div>

      <!-- Artist Container -->
    <section id="artist" class="h-screen">
      <div
        class="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full"
      >
        <div class="relative flex justify-center items-center">
          <img id="img-pop" class="absolute -z-10 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 class="cardText">Ude af kontrol</h3>
        </div>
        <div class="relative flex justify-center items-center">
          <img id="img-pop" class="absolute -z-10 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 class="cardText">Ude af kontrol</h3>
        </div>
        <div class="relative flex justify-center items-center">
          <img id="img-pop" class="absolute -z-10 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 class="cardText">Ude af kontrol</h3>
        </div>
        <div class=" relative flex justify-center items-center">
          <img id="img-pop" class="absolute -z-10 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 class="cardText">Ude af kontrol</h3>
        </div>
        <div class="relative flex justify-center items-center">
          <img id="img-pop" class="absolute -z-10 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 class="cardText">Ude af kontrol</h3>
        </div>
        <div class="relative flex justify-center items-center">
          <img id="img-pop" class="absolute -z-10 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3 class="cardText">Ude af kontrol</h3>
        </div>
      </div>
    </section>
      

    <!-- 

 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<span>
  <img class='relative w-64' src="shorturl.at/aopF7" alt="" />
  <h3 class='absolute inset-0 uppercase w-32'>Ude af kontrol</h3>
</span>
  <span>
  <img class='relative w-64' src="shorturl.at/aopF7" alt="" />
  <h3 class='absolute inset-0 uppercase w-32'>Ude af kontrol</h3>
</span>
<span>
  <img class='relative w-64' src="shorturl.at/aopF7" alt="" />
  <h3 class='absolute inset-0 uppercase w-32'>Ude af kontrol</h3>
</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <img src="shorturl.at/aopF7" alt="" />
        <img src="shorturl.at/aopF7" alt="" />
        <img src="shorturl.at/aopF7" alt="" />
        <img src="shorturl.at/aopF7" alt="" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        <img src="shorturl.at/aopF7" alt="" />
        <img src="shorturl.at/aopF7" alt="" />
        <img src="shorturl.at/aopF7" alt="" />
      </div>

 -->
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

.cardText {
  @apply font-bold font-header text-4xl text-center w-3/5 uppercase text-white;
}
</style>
