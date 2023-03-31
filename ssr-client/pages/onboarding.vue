<script setup>
const user = useSupabaseUser();

definePageMeta({
  name: "Onboarding",
  editable: false,
  hidden: true,
});
</script>

<template>
  <section id="page-onboarding">
    <BaseGradient class="flex items-center justify-center">
      <FormOnboarding v-if="user" />
    </BaseGradient>
  </section>
</template>

<style>
#page-onboarding {
  @apply h-screen flex flex-col items-center justify-center bg-cover;
  background-image: url("https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bg1.jpg");
}
</style>
