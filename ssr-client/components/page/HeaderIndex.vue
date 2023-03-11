<script setup>
const festivalTime = 1675332000000;

const heroTime = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

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
</script>

<template>
     <section id="hero">
      <div class="gradient-backdrop absolute hero-fade -z-10"></div>
      <video
        src="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bg-video.mp4"
        autoplay
        muted
        loop
      ></video>

      <img
        class="hero_logo"
        src="https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/logo.svg"
        alt="KOLD Icon"
      />
      <h1 class="hero_header">
        <span>Kold</span>
        <span>Festival</span>
      </h1>
      <h3 class="hero_timer">
        <span>{{ heroTime.days }}D</span><span>/</span
        ><span>{{ heroTime.hours }}T</span><span>/</span
        ><span>{{ heroTime.minutes }}M</span><span>/</span
        ><span>{{ heroTime.seconds }}S</span>
      </h3>
    </section>
</template>


<style>
/* Hero styling */
#hero {
     @apply relative w-full h-full z-20 flex flex-col items-center justify-center p-4 gradient-divider;
}
#hero video {
     @apply absolute w-full h-full object-cover -z-20
}
.hero_logo{
     @apply  h-80 md:h-96 lg:h-[452px];
     animation: hero-logo 180s infinite linear;
}
.hero_header {
     @apply  flex flex-col items-center justify-center z-20;
}
.hero_header span:nth-child(1){
     @apply  text-8xl sm:text-9xl xl:text-[10rem] uppercase font-bold text-zinc-100 leading-[0.6] ;
}
.hero_header span:nth-child(2){
     @apply text-4xl lg:text-6xl ;
}
.hero_timer {
     @apply flex items-center font-header space-x-2 text-zinc-100 lg:text-2xl z-20;
}

/* Animations */

/* @keyframes hero-logo {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
} */

</style>