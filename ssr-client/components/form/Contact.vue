<script setup>
</script>
<template>
     <form id="form-contact" @submit.prevent="submit" class="container flex flex-col space-y-4">
    <div class="grid md:grid-cols-2 gap-4">
        <input  type="text" placeholder="Fornavn" />
        <input type="text" placeholder="Efternavn" />
    </div>
    <input type="email" placeholder="E-mail adresse">
    <textarea  placeholder="Indtast din besked"></textarea>

    <BaseButton :loading="false">Send besked</BaseButton>
  </form>
</template>