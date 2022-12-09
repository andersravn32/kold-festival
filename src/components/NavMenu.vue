<script setup>
import { useRouter } from "vue-router";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import IgIcon from "../assets/img/ig.svg";
import FbIcon from "../assets/img/fb.svg";

const router = useRouter();
const routes = router.getRoutes().filter((route) => {
  if (route.name) {
    return route;
  }
});

defineEmits(["close"]);
</script>
<template>
  <div
    class=" bg-midnight fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
  >
    <button @click="$emit('close')" class="absolute top-8 right-4">
      <XMarkIcon class="h-16 w-16 text-zinc-100" />
    </button>

    <ul
      class="flex flex-col space-y-8 font-bold font-header text-zinc-100 uppercase z-100 text-4xl lg:text-8xl text-center"
    >
      <li v-for="(route, index) in routes" :key="index">
        <router-link @click="$emit('close')" :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
      <li class="flex items-center justify-center space-x-8">
        <a href="#" target="_blank"><img class="h-12" :src="IgIcon" /></a>
        <a href="#" target="_blank"><img class="h-12" :src="FbIcon" /></a>
      </li>
    </ul>
  </div>
</template>
