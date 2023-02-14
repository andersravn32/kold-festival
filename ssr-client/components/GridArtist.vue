
<template>
  <div class="artist">
    <div>
    <h3 class="artist-name">{{name}}</h3>
    <h4 v-if="subartist" class="sub-name">{{ subartist }}</h4>
    </div>
    <div
      class="absolute -z-10 h-full w-full gradient-backdrop transition-all duration-150 ease-in-out"
    ></div>
    <nuxt-img format="webp" quality="80" width="500"
      id="img-pop"
      class="absolute -z-20 h-full w-full object-cover"
      :src="String(artistCover)"
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


.artist:hover .gradient-backdrop {
  @apply backdrop-blur-[0px]
}

.artist:hover .artist-image  {
  @apply -bottom-0;
}
</style>
