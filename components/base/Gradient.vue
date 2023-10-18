<template>
  <div class="gradient">
    <slot />
  </div>
</template>

<style>
.gradient {
  @apply h-full w-full bg-gradient-to-b bg-blue-600/50 to-indigo-600/50 backdrop-blur-sm;
}
</style>
