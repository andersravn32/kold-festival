<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser()

// Init artists composable on SSR
const artists = useArtists();
await artists.reload();

const faq = useFaq();
await faq.getData();
</script>

<template>
  <BaseNavbar />

  <!-- Social Icons - desktop -->
  <BaseSocialTabs />
  <!-- Social Icons - mobile -->
  <BaseSocialsMobile />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
