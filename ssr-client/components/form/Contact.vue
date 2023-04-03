<script setup>
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

const supabase = useSupabaseClient();

const formData = ref({
  message: null,
  firstName: null,
  receivers: [],
  captcha: null,
});

const loading = ref(false);
const response = ref(null);

const send = async () => {
  // Loading check
  if (loading.value) {
    return;
  }

  // Captcha check
  if (!formData.value.captcha) {
    return;
  }

  // Email check
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Ensure all values are present
  if (
    !formData.value.email ||
    !formData.value.message ||
    !formData.value.firstName
  ) {
    return alert("Udfyld venligst alle felter");
  }

  // Ensure validity of email
  if (!formData.value.email.match(validRegex)) {
    return alert("Indtast en valid email adresse");
  }

  // Update loading state
  loading.value = true;

  // Fetch receiving email addresses from supabase
  const receiverRequest = await supabase.from("mails").select("email");

  // Set receivers
  formData.value.receivers = receiverRequest.data;

  // Send request to backend API
  const { data } = await useFetch("/api/mail", {
    method: "POST",
    body: formData.value,
  });

  // Set response
  response.value = data.value;

  // Update loading state
  loading.value = false;

  // Reset form data
  formData.value = {
    sender: null,
    message: null,
    firstName: null,
    receivers: [],
    captcha: null,
  };
};
</script>

<template>
  <form v-if="!response" id="form-contact" @submit.prevent="send">
    <div class="grid grid-cols-2 gap-4">
      <div class="input">
        <label>Fornavn:</label>
        <input
          type="text"
          v-model="formData.firstName"
          placeholder="Indtast fornavn"
        />
      </div>
      <div class="input">
        <label>Efternavn:</label>
        <input
          type="text"
          v-model="formData.lastName"
          placeholder="Indtast efternavn"
        />
      </div>
    </div>
    <div class="input">
      <label>Email:</label>
      <input
        type="email"
        v-model="formData.email"
        placeholder="Indtast email"
      />
    </div>
    <div class="input">
      <label>Forespørgsel:</label>
      <textarea
        v-model="formData.message"
        class="h-32 resize-none"
        placeholder="Skriv din forespørsel"
      ></textarea>
    </div>
    <VueHcaptcha
      sitekey="2d41a769-885b-43e5-a2e8-e159f5bb738d"
      @verify="(e) => (formData.captcha = e)"
    ></VueHcaptcha>
    <BaseButton :loading="loading">Send forespørgsel</BaseButton>
  </form>

  <div
    v-if="response"
    class="text-zinc-50 flex flex-col justify-center items-center gap-12 my-8"
  >
    <p class="text-center">
      {{ response.msg }}
    </p>
    <BaseButton @click="response = null">Send ny besked</BaseButton>
  </div>
</template>

<style>
#form-contact {
  @apply flex flex-col space-y-4 w-full max-w-2xl mx-auto my-4 px-8;
}

#form-contact .input {
  @apply flex flex-col space-y-2;
}
</style>
