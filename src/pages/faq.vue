<script setup>
import Accordion from "../components/Accordion.vue"
import bg from "../assets/img/hero-bg.jpg";
</script>

<template>
    <div id="page-faq" :style="{ 'background-image': `url(${bg})` }">
        <section id="faq" class="gradient-backdrop">
            <h1 class="uppercase font-bold font-header text-zinc-100 text-8xl text-center">F.A.Q</h1>
            <h2 class="text-zinc-100 text-xl text-center font-body">Her vil du finde svarene på de fleste af dine spørgsmål</h2>
            <Accordion :opened="true" title="hello borld">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aspernatur tempore veritatis cumque soluta magnam corrupti, dolores deleniti reiciendis aliquam, in eligendi, esse consequatur! Esse repudiandae magni ratione facere enim!</p>
            </Accordion>
        </section>
    </div>
</template>
<style>
#page-faq {
    @apply min-h-screen w-full bg-cover;
}

#faq {
    @apply p-4 pt-[128px] h-screen flex flex-col space-y-4;
}

#faq .accordion {
    @apply bg-blue-900/75 p-4 flex flex-col;
}

#faq .accordion-title {
    @apply flex items-center justify-between text-zinc-100 text-2xl font-bold font-header;
}
</style>