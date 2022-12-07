<script>
export default {
  data() {
    return {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
    }
  },
  methods: {
    submit() {
        
    }
  }
}

</script>
<template>
    <form class="container flex flex-col space-y-4 w-full">
        <div class="grid grid-cols-2 gap-4">
        <input type="text" v-model="firstName" placeholder="Fornavn"/>
        <input type="text" v-model="lastName" placeholder="Efternavn"/>
        </div>
        <input type="email" v-model="email" placeholder="E-mail"/>
        <textarea type="text" v-model="message" placeholder="Besked"/>
        <button @click="submit" class="bg-indigo-600/50 font-header text-xl font-bold text-white px-8 py-4 hover:bg-blue-900">Send</button>
    </form>
</template>

<style>
input, textarea {
    @apply bg-transparent p-4 border-2 resize-none text-white placeholder:text-white;
}

</style>