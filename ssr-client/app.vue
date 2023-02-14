<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser()

// Init artists composable on SSR
const artists = useArtists();
await artists.reload();

</script>

<template>
  <BaseNavbar />

  <!-- Social Icons -->
  <BaseSocialTabs />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <BaseFooter />
</template>
