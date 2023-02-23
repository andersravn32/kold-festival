<script setup>
const sidebar = useSidebar();
</script>

<template>
  <div>
    <BaseSidebar v-if="sidebar.show.value" />
    <slot />
  </div>
</template>
