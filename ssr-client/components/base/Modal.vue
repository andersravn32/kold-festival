<template>
    <button class="text-zinc-50 z-50 text-center" @click="IsOpen = true">Open Modal</button>
    <Teleport to="#modal">
        <Transition name="modal">
        <div class="bgModal" v-if="IsOpen">
            <div class="modalContent">
                {{ TextContent }}
                <BaseButton @click="IsOpen = false">Close</BaseButton>
            </div>
        </div>
        </Transition>
    </Teleport>
</template>

<script setup>
defineProps({
  IsOpen: {
    type: Boolean,
    default: false,
  },
  TextContent: {
    type: String,
    default: "This is a modal"
  }
});
</script>

<style scoped>

.bgModal {
    @apply fixed inset-0 h-full w-full bg-[rgba(0,0,0,0.5)] grid place-content-center z-[10000];
}

.modalContent {
    @apply relative shadow-lg bg-zinc-50 py-6 px-8 text-center flex flex-col justify-center items-center gap-8 text-2xl font-header;
}

.modal-enter-active,
.modal-leave-active {
    @apply transition-all duration-150 ease-linear;
}

.modal-enter-from,
.modal-leave-to {
    @apply opacity-0 translate-y-8;
}

</style>