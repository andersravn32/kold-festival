<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser()

// Init artists composable on SSR
const artists = useArtists();
await artists.reload();

</script>

<template>
  <BaseNavbar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <BaseFooter />
</template>
