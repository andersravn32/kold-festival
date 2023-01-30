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
  if (!email.value.length) {
    return;
  }

  // Update loading state
  loading.value = true;

  // Perform signin request
  const req = await supabase.auth.signInWithOtp({
    email: email.value,
  });

  // Handle errors
  if (req.error) {
    return req.error;
  }

  // Update loading state
  loading.value = false;
};
</script>

<template>
  <div>
    <form id="form-signin" @submit.prevent="signin">
      <div>
        <h1>Personale login</h1>
        <p>
          Velkommen til KOLD Festivals personale login, indtast venligst din
          e-mail nedenfor.
        </p>
      </div>
      <input v-model="email" type="email" placeholder="Indtast din e-mail" />
      <BaseButton :loading="loading">Log på </BaseButton>
    </form>
  </div>
</template>

<style>
#form-signin {
  @apply flex flex-col w-full max-w-sm;
}

#form-signin {
  @apply flex flex-col w-full max-w-md bg-midnight text-white p-4 space-y-4;
}

#form-signin h1 {
  @apply font-header font-bold text-2xl;
}

#form-signin p {
  @apply font-body text-sm;
}

#form-signin label {
  @apply font-header font-bold;
}

#form-signin input {
  @apply bg-transparent border-2 border-white/75 py-2 px-6 text-white placeholder:text-white/75 font-body text-sm outline-none;
}
</style>
