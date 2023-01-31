<template>
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
        src="/img/logo.svg"
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
       <!--  <span>{{ heroTime.days }}D</span><span>/</span
        ><span>{{ heroTime.hours }}T</span><span>/</span
        ><span>{{ heroTime.minutes }}M</span><span>/</span
        ><span>{{ heroTime.seconds }}S</span> -->
      </h3>
    </section>
</template>