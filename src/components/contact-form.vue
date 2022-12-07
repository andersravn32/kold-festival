<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  },
  methods: {
    onSubmit() {
      const inputAll = document.querySelectorAll(".field");
      inputAll.forEach((input) => {
        input.value = "";
      });
      console.log("Form submitted!");
    },
  },
};
</script>
<template>
  <form @submit.prevent class="container flex flex-col space-y-4 w-full">
    <div class="grid grid-cols-2 gap-4">
      <input
        class="field"
        type="text"
        v-model="firstName"
        placeholder="Fornavn"
      />
      <input
        class="field"
        type="text"
        v-model="lastName"
        placeholder="Efternavn"
      />
    </div>
    <input class="field" type="email" v-model="email" placeholder="E-mail" />
    <textarea
      class="field"
      type="text"
      v-model="message"
      placeholder="Besked"
    />
    <button
      @click="onSubmit"
      class="bg-indigo-600/50 font-header text-xl font-bold text-white px-8 py-4 hover:bg-blue-900"
    >
      Send
    </button>
  </form>
</template>

<style>
input,
textarea {
  @apply bg-transparent p-4 border-2 resize-none text-white placeholder:text-white;
}
</style>
