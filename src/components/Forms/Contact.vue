<script setup>
import { ref } from "vue";

// Define input fields data points
const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const message = ref(null);

// Submit function
const submit = () => {

    // Reset input fields
    firstName.value = null;
    lastName.value = null;
    email.value = null;
    message.value = null;

    console.log("Form submitted");
}

</script>

<template>
  <form id="form-contact" @submit.prevent="submit" class="container flex flex-col space-y-4">
    <div class="grid md:grid-cols-2 gap-4">
        <input v-model="firstName" type="text" placeholder="Fornavn" />
        <input v-model="lastName" type="text" placeholder="Efternavn" />
    </div>

    <input v-model="email" type="email" placeholder="E-mail adresse">
    <textarea v-model="message" placeholder="Indtast din besked"></textarea>

    <button class="btn">Send besked</button>
  </form>
</template>