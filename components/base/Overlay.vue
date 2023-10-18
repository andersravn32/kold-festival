<script setup>
const modal = useModal();

const handleClick = (e) => {
  if (e.target.className == "overlay-inner") {
    return modal.toggle();
  }
};
</script>

<template>
  <div class="overlay" @click="handleClick">
    <div class="overlay-inner">
      <slot />
    </div>
  </div>
</template>

<style>
.overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50;
}

.overlay-inner {
  @apply relative h-full w-full flex items-center justify-center;
}
</style>
