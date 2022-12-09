<script setup>
import Accordion from "../components/Accordion.vue";
import PageHeader from "../components/PageHeader.vue";
import bg from "../assets/img/hero-bg.jpg";
</script>

<template>
  <div id="page-faq">
    <PageHeader :bg="bg">
      <h1 class="text-6xl lg:text-8xl uppercase leading-[0.9]">F.A.Q</h1>
      <h2 class="lg:text-xl text-center font-body">
        Her vil du finde svarene på de fleste af dine spørgsmål
      </h2></PageHeader
    >
    <section id="faq">
      <Accordion title="Lorem ipsum" :opened="true">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a
          tempore impedit odit nisi culpa repellat cupiditate magni esse
          facilis. Nesciunt perferendis laboriosam eius repellat molestiae
          voluptatibus reprehenderit! Rerum, accusamus!
        </p>
      </Accordion>
      <Accordion title="Lorem ipsum - The sequal">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a
          tempore impedit odit nisi culpa repellat cupiditate magni esse
          facilis. Nesciunt perferendis laboriosam eius repellat molestiae
          voluptatibus reprehenderit! Rerum, accusamus!
        </p>
      </Accordion>
      <Accordion title="Lorem ipsum - The Third &copy;">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a
          tempore impedit odit nisi culpa repellat cupiditate magni esse
          facilis. Nesciunt perferendis laboriosam eius repellat molestiae
          voluptatibus reprehenderit! Rerum, accusamus!
        </p>
      </Accordion>
    </section>
  </div>
</template>
<style>
#page-faq {
  @apply min-h-screen w-full bg-cover;
}

#faq {
  @apply container max-w-4xl mx-auto flex flex-col space-y-4 p-4;
}

#faq .accordion {
  @apply bg-blue-900/75 p-4 flex flex-col;
}

#faq .accordion-title {
  @apply flex items-center justify-between text-zinc-100 text-2xl font-bold font-header;
}

#faq .accordion-content {
  @apply text-zinc-100 border-t-2 border-zinc-100/50 mt-2 pt-2;
}
</style>
