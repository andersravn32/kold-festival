<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const countdown = ref({
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
});

// Method for updating countdown
const updateTime = () => {
  // get total seconds between the times
  var delta = Math.abs(props.data.countdown - new Date()) / 1000;

  // calculate (and subtract) whole days
  countdown.value.days = Math.floor(delta / 86400);
  delta -= countdown.value.days * 86400;

  // calculate (and subtract) whole hours
  countdown.value.hours = Math.floor(delta / 3600) % 24;
  delta -= countdown.value.hours * 3600;

  // calculate (and subtract) whole minutes
  countdown.value.minutes = Math.floor(delta / 60) % 60;
  delta -= countdown.value.minutes * 60;

  // what's left is seconds
  countdown.value.seconds = Math.floor(delta % 60);

  // Credit: Stackoverflow, User: Altinak - https://stackoverflow.com/users/6782/alnitak
};

// Update time onMounted and setInterval
onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
})

</script>
<template>
  <section class="block-hero gradient-divider">
    <video
      class="hero-video"
      v-if="data.bg.src"
      :src="data.bg.src"
      autoplay
      muted
      loop
    ></video>
    <BaseGradient class="hero-gradient">
      <img
        class="hero-logo"
        v-if="data.logo.src && data.logo.alt"
        :class="{ spin: data.logo.spin }"
        :src="data.logo.src"
        :alt="data.logo.alt"
      />
      <h1 class="hero-title" v-if="data.title && !data.title.html">{{ data.title }}</h1>
      <h1 class="hero-title" v-if="data.title && data.title.html" v-html="data.title.html"></h1>

      <h3 class="hero-countdown" v-if="data.countdown">
        <span>{{ countdown.days }}D</span><span>/</span
        ><span>{{ countdown.hours }}T</span><span>/</span
        ><span>{{ countdown.minutes }}M</span><span>/</span
        ><span>{{ countdown.seconds }}S</span>
      </h3>
    </BaseGradient>
  </section>
</template>

<style>
.block-hero {
  @apply min-h-screen flex flex-col items-center relative;
}

.hero-logo {
  @apply w-[12rem] lg:w-[24rem]
}

.hero-gradient {
  @apply absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center space-y-4;
}

.hero-video {
  @apply absolute w-full h-full object-cover -z-10;
}

.hero-title{
  @apply flex flex-col text-center;
}

.hero-title span:nth-of-type(1){
  @apply text-[5rem] lg:text-[8rem] leading-[0.6];
}

.hero-title span:nth-of-type(2){
  @apply text-4xl lg:text-6xl;
}

.hero-countdown {
  @apply flex items-center space-x-2 text-2xl;
}

.hero-gradient .spin {
  animation: spin 180s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
