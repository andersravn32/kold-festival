<script setup>
const account = useAccount();
if (!account.profile.value || !account.user.value) {
  await account.update();
}

// Init artists composable on SSR
const artists = useArtists();
await artists.reload();

/* onMounted(() => {
  let externalScript = document.createElement("script");
  externalScript.setAttribute(
    "src",
    "https://consent.cookiebot.com/uc.js?cbid=40b80dd7-9d04-4fbd-84b7-1836c89950af%27"
  );
  document.head.appendChild(externalScript);
}); */
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
