<script setup>
import Accordion from "../components/Accordion.vue";
import bg from "../assets/img/hero-bg.jpg";
</script>

<template>
  <div id="page-faq" :style="{ 'background-image': `url(${bg})` }">
    <section id="faq" class="gradient-backdrop">
      <div class="container max-w-4xl mx-auto flex flex-col space-y-4">
        <h1
          class="uppercase font-bold font-header text-zinc-100 text-8xl text-center"
        >
          F.A.Q
        </h1>
        <h2 class="text-zinc-100 text-xl text-center font-body">
          Her vil du finde svarene på de fleste af dine spørgsmål
        </h2>
        <Accordion :opened="true" title="hello borld">
          <p class="text-zinc-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            accusantium alias vel dolores minima facilis, est doloribus
            quisquam. Earum, sed in. Cumque provident voluptatum, voluptates
            illum hic omnis porro at!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis accusantium alias vel dolores minima
            facilis, est doloribus quisquam. Earum, sed in. Cumque provident
            voluptatum, voluptates illum hic omnis porro at!Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Blanditiis accusantium alias
            vel dolores minima facilis, est doloribus quisquam. Earum, sed in.
            Cumque provident voluptatum, voluptates illum hic omnis porro
            at!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis accusantium alias vel dolores minima facilis, est
            doloribus quisquam. Earum, sed in. Cumque provident voluptatum,
            voluptates illum hic omnis porro at!
          </p>
        </Accordion>
        <Accordion title="hello borld - the sequal">
          <p class="text-zinc-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            accusantium alias vel dolores minima facilis, est doloribus
            quisquam. Earum, sed in. Cumque provident voluptatum, voluptates
            illum hic omnis porro at!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis accusantium alias vel dolores minima
            facilis, est doloribus quisquam. Earum, sed in. Cumque provident
            voluptatum, voluptates illum hic omnis porro at!Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Blanditiis accusantium alias
            vel dolores minima facilis, est doloribus quisquam. Earum, sed in.
            Cumque provident voluptatum, voluptates illum hic omnis porro
            at!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis accusantium alias vel dolores minima facilis, est
            doloribus quisquam. Earum, sed in. Cumque provident voluptatum,
            voluptates illum hic omnis porro at!
          </p>
        </Accordion>
      </div>
    </section>
  </div>
</template>
<style>
#page-faq {
  @apply min-h-screen w-full bg-cover;
}

#faq {
  @apply p-4 pt-[128px] h-screen;
}

#faq .accordion {
  @apply bg-blue-900/75 p-4 flex flex-col;
}

#faq .accordion-title {
  @apply flex items-center justify-between text-zinc-100 text-2xl font-bold font-header;
}

#faq .accordion-content{
    @apply border-t-2 border-zinc-100/50 mt-2 pt-2; 
}
</style>
