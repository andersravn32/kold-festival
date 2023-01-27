<script setup>
import Navbar from "./components/Navbar.vue";
import CTA from "./components/CTA.vue";
import Footer from "./components/Footer.vue";
import SocialTabs from "./components/SocialTabs.vue";

// Controls scroll behavior
const toggleScroll = () => {
  document.querySelector('body').classList.toggle('overflow-y-hidden');
};

</script>

<template>
  <Navbar @toggleScroll="toggleScroll"/>
  <SocialTabs />
  <CTA />
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"/>
    </Transition>
  </router-view>
  <Footer />
</template>
