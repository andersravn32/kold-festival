<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button :class="{ 'btn-loading': loading, 'btn-disabled': disabled }">
    <span :class="{ 'btn-hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.btn,
.button,
button {
  @apply bg-indigo-500 px-6 py-2 relative font-header font-bold transition-all duration-150 text-white hover:bg-indigo-600/75 cursor-pointer;
}

.btn-disabled{
    @apply opacity-50 cursor-not-allowed;
}

.btn-hidden {
  @apply invisible;
}

.btn-loading{
    @apply bg-indigo-600/75 cursor-not-allowed;
}

.btn-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 0.6s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
