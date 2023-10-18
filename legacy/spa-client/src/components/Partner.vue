<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },

  logo: {
    type: String,
  },

  link: {
    type: String,
  },
});
</script>

<template>
    <a :href="link" target="_blank" class="partner">
        <img
                class="w-24 md:w-32 object-cover py-8"
                :src="logo"
                />
        <p class="partner-name hidden md:block">{{ name }}</p>
        <div
            class="absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"
        ></div>
    </a>
</template>

<style>
.partner {
  @apply h-[150px] md:min-h-[300px] relative grid place-content-center w-full transition-all duration-150 ease-in-out cursor-pointer hover:scale-[1.02];
  @apply hover:before:-translate-y-4 hover:before:-translate-x-4;
  @apply hover:after:translate-y-4 hover:after:translate-x-4;
}

.partner::before{
    @apply transition-all duration-150 content-[''] bg-indigo-600 h-full w-full absolute -z-30 -translate-x-3 -translate-y-3;
}

.partner::after{
    @apply transition-all duration-150 content-[''] bg-blue-600 h-full w-full absolute -z-30 translate-x-3 translate-y-3;
}

.partner-name {
  @apply absolute bottom-0 left-0 right-0 font-bold font-header text-xl text-center uppercase text-white z-40 p-8;
}

</style>