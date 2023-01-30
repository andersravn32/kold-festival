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
  <form id="form-onboarding" @submit.prevent="update">
    <h1>Velkommen til!</h1>
    <p>Indtast venligst et par basale informationer om dig selv herunder, så personliggør vi systemet til netop dig!</p>
    <label>Fornavn</label>
    <input
      v-model="firstName"
      type="text"
      placeholder="Indtast fornavn"
      :disabled="profile == null"
    />
    <label>Efternavn</label>
    <input
      v-model="lastName"
      type="text"
      placeholder="Indtast efternavn"
      :disabled="profile == null"
    />
    <BaseButton :loading="loading"> Gem</BaseButton>
  </form>
</template>

<style>
#form-onboarding {
  @apply flex flex-col w-full max-w-md;
}
</style>
