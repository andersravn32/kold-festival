<script setup>
definePageMeta({
  hidden: true,
})
</script>

<template>
  <section id="page-signin">
    <BaseGradient class="flex flex-col items-center justify-center">
      <FormSignin />
    </BaseGradient>
  </section>
</template>

<style>
#page-signin {
  @apply h-screen flex flex-col items-center justify-center bg-cover;
  background-image: url("https://ddcpzvjlsezychixcvnh.supabase.co/storage/v1/object/public/public/bg1.jpg");
}
</style>
