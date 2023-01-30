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

<style>
#page-onboarding{
    @apply h-screen flex flex-col items-center justify-center;
}
</style>