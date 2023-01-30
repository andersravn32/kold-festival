<script setup>
const router = useRouter();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const profile = ref(null);

// Form input
const firstName = ref("");
const lastName = ref("");

// Loading state
const loading = ref(false);
// Fetch profile data from supabase
const { data, error } = await supabase
  .from("profiles")
  .select()
  .eq("id", user.value.id);

profile.value = data[0];

// Update profile method
const update = async () => {
  // Update loading state
  loading.value = true;

  // Update data in supabase
  const req = await supabase
    .from("profiles")
    .update({ firstName: firstName.value, lastName: lastName.value })
    .eq("id", user.value.id);

  // Update loading state
  loading.value = false;

  // If request was not successful
  if (!(req.status == 204)) {
    return;
  }

  // Redirect to index
  router.push("/");
};
</script>

<template>
  <div>
    <form id="form-onboarding" @submit.prevent="update">
      <h1>Velkommen til!</h1>
      <p>
        Indtast venligst et par basale informationer om dig selv herunder, så
        personliggør vi systemet til netop dig!
      </p>
      <div class="flex flex-col space-y-2">
        <label>Fornavn</label>
        <input
          v-model="firstName"
          type="text"
          placeholder="Indtast fornavn"
          :disabled="profile == null"
        />
      </div>
      <div class="flex flex-col space-y-2">
        <label>Efternavn</label>
        <input
          v-model="lastName"
          type="text"
          placeholder="Indtast efternavn"
          :disabled="profile == null"
        />
      </div>
      <BaseButton :loading="loading">Gem</BaseButton>
    </form>
  </div>
</template>

<style>
#form-onboarding {
  @apply flex flex-col w-full max-w-md bg-midnight text-white p-4 space-y-4;
}

#form-onboarding h1 {
  @apply font-header font-bold text-2xl;
}

#form-onboarding p {
  @apply font-body text-sm;
}

#form-onboarding label {
  @apply font-header font-bold;
}

#form-onboarding input {
  @apply bg-transparent border-2 border-white/75 py-2 px-6 text-white placeholder:text-white/75 font-body text-sm outline-none;
}
</style>
