<script setup>
import bg from "../assets/video/bg-video.mp4";
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
      <div class="gradient-backdrop absolute w-full h-full z-20"></div>
      <img
        class="hero-logo absolute h-full z-30"
        src="../assets/img/logo.svg"
        alt="KOLD Icon"
      />
      <div class="absolute h-full w-full z-40 flex items-center justify-center">
        <div class="flex flex-col items-center">
          <span class="text-[12rem] uppercase font-bold text-zinc-100 font-header leading-[0.7]">
            Kold
          </span>
          <span class="text-8xl font-header text-zinc-100 mb-4">Festival</span>
          <h3 class="flex items-center text-4xl font-header space-x-8 text-zinc-100">
            <span>24D</span><span>/</span><span>12T</span><span>/</span
            ><span>02M</span><span>/</span
            ><span>33S</span>
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#hero {
  @apply h-screen w-full relative z-10 flex items-center justify-center overflow-hidden;
}

.hero-logo {
  @apply opacity-5;
  animation: hero-logo 120s infinite linear;
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
