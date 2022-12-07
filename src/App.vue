<script setup>
import Navbar from './components/Navbar.vue';
import CTA from "./components/CTA.vue";
import Footer from "./components/Footer.vue";
import { ref } from 'vue'

const preventScroll = ref(false);

const changeScroll = () => {
  preventScroll = !preventScroll;
}

</script>

<template>
  <div :class="(preventScroll) ? 'overflow-hidden' : 'overflow-auto'" @blockScroll="changeScroll">
  <Navbar />
  <CTA />
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
  <Footer />
  </div>
</template>