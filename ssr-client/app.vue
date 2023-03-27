<script setup>
const account = useAccount();
if (!account.profile.value || !account.user.value) {
  await account.update();
}

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

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}

</style>
