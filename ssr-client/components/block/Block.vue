<script setup>
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
const emit = defineEmits(['edit', 'remove'])
const account = useAccount();

const hover = ref(false);

const mouseenter = (e) => {
    if (!(account.profile.value && account.user.value)) {
        return;
    }
    hover.value = true;
}

const mouseleave = (e) => {
    hover.value = false;
}
</script>

<template>
    <div class="block-content p-0 relative" @mouseenter="mouseenter" @mouseleave="mouseleave"
        :class="{ 'border-2 border-indigo-500': hover }">
        <div v-if="hover"
        class=" absolute w-full h-full flex justify-end items-start"
        >
        <div 
        class="sticky w-fit top-1/2 -translate-y-1/2 bg-indigo-500 z-[99] flex flex-col text-xs text-white font-body">
            <span class="edit-selector" @click="emit('edit'); hover = false;">
                <PencilIcon class="w-4 h-4" />
                <span>Rediger</span>
            </span>
            <span class="delete-selector" @click="emit('remove'); hover = false;">
                <TrashIcon class="w-4 h-4" />
                <span>Slet</span>
            </span>
        </div>
        </div>
        <slot />
    </div>
</template>

<style>

.edit-selector {
    @apply flex items-center space-x-2 cursor-pointer w-full p-2;
    @apply hover:bg-indigo-300;
}

.delete-selector {
    @apply flex items-center space-x-2 cursor-pointer w-full p-2;
    @apply hover:bg-red-400;
}

</style>