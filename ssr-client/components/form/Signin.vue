<script setup>
// Import supabase client
const supabase = useSupabaseClient();

// Loading state
const loading = ref(false);

// Email input
const email = ref("");

// Signin method, using OTP
const signin = async () => {

    // Ensure that email has input
    if (!email.value.length){
        return;
    }

    // Update loading state
    loading.value = true;

    // Perform signin request
    const req = await supabase.auth.signInWithOtp({
        email: email.value
    })

    // Handle errors
    if (req.error){
        return req.error;
    }

    // Update loading state
    loading.value = false;
};
</script>

<template>
  <form id="form-signin" @submit.prevent="signin">
    <input v-model="email" type="email" placeholder="Indtast din e-mail" />
    <BaseButton :loading="loading">Log på </BaseButton>
  </form>
</template>

<style>
#form-signin {
  @apply flex flex-col w-full max-w-sm;
}
</style>
