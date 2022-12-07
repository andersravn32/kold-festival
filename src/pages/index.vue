<script setup>
import bg from "../assets/video/bg-video1.mp4";
import uak from '../assets/img/ude-af-kontrol_cut.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

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
        <div class="artistGridBox">
          <h3 class="cardText">Ude af kontrol</h3>
          <div class=" overflow-hidden h-full w-full absolute flex justify-center items-end">
          <img :src="uak" class="artistMiniature">
          </div>
          <div class=" absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"></div>
          <img id="img-pop" class="absolute -z-20 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div class="artistGridBox">
          <h3 class="cardText">Ude af kontrol</h3>
          <div class=" overflow-hidden h-full w-full absolute flex justify-center items-end">
          <img :src="uak" class="artistMiniature">
          </div>
          <div class=" absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"></div>
          <img id="img-pop" class="absolute -z-20 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div class="artistGridBox">
          <h3 class="cardText">Ude af kontrol</h3>
          <div class=" overflow-hidden h-full w-full absolute flex justify-center items-end">
          <img :src="uak" class="artistMiniature">
          </div>
          <div class=" absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"></div>
          <img id="img-pop" class="absolute -z-20 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div class="artistGridBox">
          <h3 class="cardText">Ude af kontrol</h3>
          <div class=" overflow-hidden h-full w-full absolute flex justify-center items-end">
          <img :src="uak" class="artistMiniature">
          </div>
          <div class=" absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"></div>
          <img id="img-pop" class="absolute -z-20 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div class="artistGridBox">
          <h3 class="cardText">Ude af kontrol</h3>
          <div class=" overflow-hidden h-full w-full absolute flex justify-center items-end">
          <img :src="uak" class="artistMiniature">
          </div>
          <div class=" absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"></div>
          <img id="img-pop" class="absolute -z-20 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div class="artistGridBox">
          <h3 class="cardText">Ude af kontrol</h3>
          <div class=" overflow-hidden h-full w-full absolute flex justify-center items-end">
          <img :src="uak" class="artistMiniature">
          </div>
          <div class=" absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"></div>
          <img id="img-pop" class="absolute -z-20 h-full w-full object-cover" src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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

.artistGridBox {
  @apply relative flex justify-start items-center lg:justify-center lg:items-start h-[200px] lg:h-[300px] 2xl:h-[400px] transition-all duration-150 ease-in-out hover:shadow-xl cursor-pointer;

  @apply transition-all duration-150 ease-out before:content-[''] before:bg-indigo-600/50 before:h-full before:w-full before:absolute before:-z-30 before:-translate-x-3 before:-translate-y-3 hover:before:-translate-y-4 hover:before:-translate-x-4;

  @apply transition-all duration-150 ease-out after:content-[''] after:bg-blue-600/50 after:h-full after:w-full after:absolute after:-z-30 after:translate-x-2 after:translate-y-2 hover:after:translate-y-3 hover:after:translate-x-3;
}

.artistMiniature {
  @apply w-2/5 md:w-2/4 lg:w-3/5 2xl:w-3/4 relative -bottom-2 -right-36 sm:-right-44 md:-right-24 lg:right-0 transition-all duration-150 ease-out;
}

.artistGridBox:hover {
  transform: scale(1.02);
}

.artistGridBox:hover .gradient-backdrop {
  backdrop-filter: blur(1px);
}

.artistGridBox:hover .artistMiniature {
  @apply -bottom-0;
}

.cardText {
  @apply font-bold font-header text-4xl 2xl:text-6xl text-left lg:text-center w-3/5 uppercase text-white py-12 px-4 lg:w-full;
}
</style>
