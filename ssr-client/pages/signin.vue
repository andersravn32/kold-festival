<script setup>
const supabase = useSupabaseClient();

// Store form input as ref's
const email = ref("");
const password = ref("");

// Define signin method
const signin = async () => {
    console.log(email.value, password.value)
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })

    console.log(data, error)
}
</script>

<template>
  <section class="page-signin">
    <form @submit.prevent="signin">
        <h1>Log på</h1>
        <label>E-mail</label>
        <input v-model="email" type="email" placeholder="Indtast e-mail">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Indtast password">
        <button class="btn">Log på</button>
    </form>
  </section>
</template>

<style>
.page-signin{
    @apply h-screen flex justify-center items-center;
}

.page-signin form{
    @apply p-4 w-full max-w-md flex flex-col space-y-2;
}
</style>