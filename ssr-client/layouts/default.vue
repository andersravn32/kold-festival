<script setup>
const sidebar = useSidebar();
const account = useAccount();
</script>

<template>
  <div>
    <BaseSidebar v-if="sidebar.show.value && (account.user.value && account.profile.value)" />
    <slot />
  </div>
</template>
