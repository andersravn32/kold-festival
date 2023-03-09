<template>
    <div class="overlay">
        <div class="relative h-full w-full flex items-center justify-center">
            <slot/>
        </div>
    </div>
</template>

<style>
.overlay{
    @apply fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50;
}
</style>