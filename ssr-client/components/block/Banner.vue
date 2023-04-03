<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const props = defineProps({
    data: {
        type: Object,
        default: null
    }
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline();

    timeline
        .from(".block-banner-inner", { x: "-50%" })
        .from(".block-banner-inner .opacity-50", { opacity: 1 });

    ScrollTrigger.create({
        animation: timeline,
        trigger: ".block-banner-inner",
        scrub: 1,
        start: "top 90% ",
        end: "bottom 40%",
        toggleActions: "restart none reset none",
    });
})
</script>

<template>
    <section class="block-banner">
        <div class="block-banner-inner">
            <span class="opacity-50">{{ data.word }}</span>
            <span class="opacity-50">{{ data.word }}</span>
            <span>{{ data.word }}</span>
            <span class="opacity-50">{{ data.word }}</span>
            <span class="opacity-50">{{ data.word }}</span>
        </div>
    </section>
</template>

<style>
.block-banner {
    @apply overflow-hidden w-full;
}

.block-banner-inner {
    @apply flex justify-center items-center py-4 font-bold text-4xl sm:text-6xl lg:text-8xl font-header text-zinc-100 space-x-8 uppercase text-center;
}
</style>