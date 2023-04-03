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
    return alert("Please verify with hcaptcha!")
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
  <Transition name="form" mode="out-in" class="container">
  <form v-if="!response" id="form-contact" @submit.prevent="submit">

    <div class="grid md:grid-cols-2 gap-4">
        <input v-model="formData.firstName" type="text" placeholder="Fornavn" />
        <input v-model="formData.lastName" type="text" placeholder="Efternavn" />
    </div>
    
    <input v-model="formData.email" type="email" placeholder="E-mail adresse">
    <textarea class="messageBox" v-model="formData.message" placeholder="Indtast din besked"></textarea>

    <VueHcaptcha
      sitekey="2d41a769-885b-43e5-a2e8-e159f5bb738d"
      @verify="(e) => (formData.captcha = e)"
    ></VueHcaptcha>

    <button class="submitBtn" :class="{ 'submitBtn-loading': loading}" type="submit" @click.prevent="send">
      <p :class="{'text-hidden': loading}">Send besked</p>
    </button>
  </form>

  <div class="text-zinc-50 flex flex-col justify-center items-center gap-12 my-8 max-w-2xl mx-auto" v-else>
    <p class="text-center">{{ response.msg }}</p>
    <BaseButton @click="response = null">Send ny besked</BaseButton>
  </div>

</Transition>
</template>

<style>

.form-enter-active,
.form-leave-active {
  transition: all 0.5s ease;
}
.form-enter-from,
.form-leave-to {
  opacity: 0;
}


#form-contact {
  @apply flex flex-col space-y-4 w-full max-w-2xl mx-auto my-4 px-8;
}

#form-contact .input {
  @apply flex flex-col space-y-2;
}

.messageBox {
  @apply h-44;
}

.submitBtn {
  @apply bg-indigo-500 px-6 py-2 relative font-header font-bold transition-all duration-150 text-white hover:bg-indigo-600/75;
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
