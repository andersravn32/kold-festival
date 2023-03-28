<script setup>

import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

const email = ref('')
const message = ref('')
const firstName = ref('')
const lastName = ref('')

const sending = ref(false)
const confirmed = ref(false)

const sendMail = async ()=> {

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!email.value || !message.value || !firstName.value) {
    return console.log('Values missing!')
  } else if (!email.value.match(validRegex)) {
    return console.log('Please enter a valid email!')
  }

  sending.value = true

    const data = {
    sender: email.value,
    message: message.value,
    firstName: firstName.value,
  }

  await useFetch('/api/mail', {
    method: 'post',
    body: data
  });

  email.value = ''
  message.value = ''
  firstName.value = ''
  lastName.value = ''
  sending.value = false
  confirmed.value = true
}
</script>

<template>
  <form v-if="!confirmed" id="form-contact" @submit.prevent="submit" class="container flex flex-col space-y-4">
    <div class="grid md:grid-cols-2 gap-4">
        <input v-model="firstName" class="normal" :class="{sendingEmail: sending}" type="text" placeholder="Fornavn" />
        <input v-model="lastName" class="normal" :class="{sendingEmail: sending}" type="text" placeholder="Efternavn" />
    </div>
    <input class="normal" :class="{sendingEmail: sending}" v-model="email" type="email" placeholder="E-mail adresse">
    <textarea class="normal messageBox" :class="{sendingEmail: sending}" v-model="message" placeholder="Indtast din besked"></textarea>
    <VueHcaptcha sitekey="2d41a769-885b-43e5-a2e8-e159f5bb738d"></VueHcaptcha>
    <button class="submitBtn" :class="{ 'submitBtn-loading': sending}" type="submit" @click.prevent="sendMail">
      <p :class="{'text-hidden': sending}">Send besked</p></button>
  </form>
  
  <div class="text-zinc-50 flex flex-col justify-center items-center gap-12 my-8" v-else>
    <p class=" text-center">Tak for din besked! Vi vender tilbage hurtigst muligt</p>
    <BaseButton @click="confirmed = !confirmed">Send ny besked</BaseButton>
  </div>
</template>

<style>

.messageBox {
  @apply h-44;
}

.submitBtn {
  @apply bg-indigo-500 px-6 py-2 relative font-header font-bold transition-all duration-150 text-white hover:bg-indigo-600/75;
}

.normal {
  @apply bg-midnight duration-200 transition-all
}
.sendingEmail {
  @apply bg-indigo-600/75 text-transparent
}

.text-hidden {
  @apply invisible;
}

.submitBtn-loading{
    @apply bg-indigo-600/75 cursor-not-allowed;
}

.submitBtn-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 0.6s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}

</style>