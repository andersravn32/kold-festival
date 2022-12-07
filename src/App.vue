<script setup>
import Navbar from "./components/Navbar.vue";
import CTA from "./components/CTA.vue";
import Footer from "./components/Footer.vue";

// Controls scroll behavior
const toggleScroll = () => {
  document.querySelector('body').classList.toggle('overflow-hidden');
};

</script>

<template>
  <Navbar @toggleScroll="toggleScroll"/>
  <CTA />
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"/>
    </Transition>
  </router-view>
  <Footer />
</template>
