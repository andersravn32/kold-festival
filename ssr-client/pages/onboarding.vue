<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

// Redirect if user is not signed in
if (!user.value) {
  router.push("/");
}
</script>

<template>
  <section id="page-onboarding">
    <FormOnboarding v-if="user" />
  </section>
</template>
