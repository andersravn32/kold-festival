<script setup>

// Form input
const firstName = ref("");
const lastName = ref("");

const update = () => {

}
</script>

<template>
  <form id="form-onboarding" @submit.prevent="update">
    <label>Fornavn</label>
    <input type="text" placeholder="Indtast fornavn">
    <label>Efternavn</label>
    <input type="text" placeholder="Indtast efternavn">
    <BaseButton> Gem</BaseButton>
  </form>
</template>

<style>
#form-onboarding {
  @apply flex flex-col w-full max-w-sm;
}
</style>
