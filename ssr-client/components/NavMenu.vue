<script setup>
import { useRouter } from "vue-router";
/* import { XMarkIcon } from "@heroicons/vue/24/outline";
import IgIcon from "../assets/img/ig.svg";
import FbIcon from "../assets/img/fb.svg";
import gsap from 'gsap';
import { onMounted } from "vue"; */

// Nav order og used routes
const navOrder = ['Hjem', 'Program', 'Om os', 'FAQ', 'Partnere', 'Kontakt']

// Get router
const router = useRouter();

// Get all used routes
const routes = router.getRoutes().filter((route) => {
  let sort = navOrder.some(item => {
    return route.name == item
  })

  if (sort) {
    return route
  }
});

// Sort routes by navOrder
const navList = navOrder.map(item => {
  return routes.find(route => {
    return route.name == item;
  })
})

/* defineEmits(["close"]); */
</script>
<template>
  <div
    class=" bg-midnight fixed z-40 top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
  >
<!--     <button @click="$emit('close')" class="absolute top-8 right-4">
      <XMarkIcon class="h-16 w-16 text-zinc-100" />
    </button> -->

    <ul
      class="flex flex-col space-y-8 font-bold font-header text-zinc-100 uppercase z-100 text-4xl lg:text-8xl text-center"
    >
      <li v-for="(route, index) in navList" :key="index">
        <NuxtLink @click="$emit('close')" :to="route.path">
          {{ route.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
