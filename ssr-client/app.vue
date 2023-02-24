<script setup>
const account = useAccount();
if (!account.profile.value || !account.user.value){
  await account.update();
}

// Init artists composable on SSR
const artists = useArtists();
await artists.reload();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
