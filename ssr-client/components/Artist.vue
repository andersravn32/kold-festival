
<template>
  <div class="artist">
    <div>
    <h3 class="artist-name" :class="(cancelled) ? 'line-through' : ''">{{name}}</h3>
    <h4 v-if="subartist" class="sub-name" :class="(cancelled) ? 'line-through' : ''">{{ subartist }}</h4>
    </div>

    <!-- Cancelled -->
    <div v-if="cancelled"
      class="absolute -z-10 h-full w-full gradient-cancelled transition-all duration-150 ease-in-out overflow-hidden"
    >
      <span class="cancelled-text">AFLYST</span>
    </div>

    <div v-else
      class="absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"
    ></div>

    <nuxt-img preset="compress"
      id="img-pop"
      class="absolute -z-20 h-full w-full object-cover"
      :src="artistCover"
      alt=""
    />
  </div>
</template>

<script setup>

const { name, subartist, artistCover  } = defineProps({
  name: {
    type: String,
    required: true,
  },
  subartist: {
    type: String,
  },
  artistCover: {
    type: String,
    required: true,
    default:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  cancelled: {
    type: Boolean
  }
});
</script>



<style>
.artist {
  @apply lg:min-h-[300px] relative flex justify-center items-center w-full transition-all duration-150 ease-in-out cursor-pointer hover:scale-[1.02];
  @apply hover:before:-translate-y-4 hover:before:-translate-x-4;
  @apply hover:after:translate-y-4 hover:after:translate-x-4;
}

.artist::before{
    @apply transition-all duration-150 content-[''] bg-indigo-600 h-full w-full absolute -z-30 -translate-x-3 -translate-y-3;
}

.artist::after{
    @apply transition-all duration-150 content-[''] bg-blue-600 h-full w-full absolute -z-30 translate-x-3 translate-y-3;
}

.artist-name {
  @apply font-bold font-header text-2xl md:text-4xl lg:text-5xl text-center uppercase text-white z-40 p-8;
}

.sub-name {
  @apply font-bold font-header text-2xl md:text-4xl lg:text-4xl text-center uppercase text-white z-40 px-8 pb-8;
}

.artist-image{
 @apply overflow-hidden h-full w-full absolute flex justify-center items-end -bottom-2 transition-all duration-150;
}

.cancelled-text {
  @apply font-header absolute translate-x-1/2 right-12 top-6 rotate-45 text-center bg-red-600 text-zinc-50 text-sm md:text-2xl py-2 w-[1000px] mx-auto mb-4 md:mb-8;
}

.artist:hover .gradient-backdrop {
  @apply backdrop-blur-[0px]
}

.artist:hover .gradient-cancelled {
  @apply backdrop-blur-[2px]
}

.artist:hover .artist-image  {
  @apply -bottom-0;
}
</style>
