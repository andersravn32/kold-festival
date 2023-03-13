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
    <div class="block-content" @mouseenter="mouseenter" @mouseleave="mouseleave"
        :class="{ 'border-2 border-indigo-500': hover }">
        <div v-if="hover"
            class="absolute top-1/2 -translate-y-1/2 right-0 bg-indigo-500 z-[99] p-2 flex flex-col space-y-4 text-xs text-white font-body">
            <span class="flex items-center space-x-2 cursor-pointer" @click="emit('edit'); hover = false;">
                <PencilIcon class="w-4 h-4" />
                <span>Rediger</span>
            </span>
            <span class="flex items-center space-x-2 cursor-pointer" @click="emit('remove'); hover = false;">
                <TrashIcon class="w-4 h-4" />
                <span>Slet</span>
            </span>
        </div>
        <slot />
    </div>
</template>

<style>
.block-content {
    @apply relative;
}
</style>