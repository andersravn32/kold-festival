<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

if (!user.value){
    router.push("/");
}

</script>

<template>
  <section id="page-onboarding">
    <FormOnboarding v-if="user" />
  </section>
</template>
