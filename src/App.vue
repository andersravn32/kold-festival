<script setup>
import Navbar from './components/Navbar.vue';
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
  <Footer />
</template>