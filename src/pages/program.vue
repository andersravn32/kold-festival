<script setup>
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import bg from "../assets/img/bg.jpg";
</script>

<template>
  <div id="page-program" :style="{ 'background-image': `url(${bg})` }">
    <section id="program" class="gradient-backdrop">
      <h1
        class="uppercase font-bold font-header text-zinc-100 text-8xl text-center"
      >
        Program
      </h1>

      <h2 class="text-2xl text-zinc-100 bold font-body">Filtrér</h2>
      <Tabs>
        <Tab title="Musik" class="grid grid-cols-4 gap-4">
          <div class="bg-blue-900/75 p-4">
            <h2
              class="font-header text-zinc-100 font-bold text-2xl text-center"
            >
              Torsdag d. 2. Februar
            </h2>
            <ul class="text-sm text-zinc-100 divide-y-2 divide-blue-900">
              <li class="grid grid-cols-4 font-header font-bold py-2">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li class="grid grid-cols-4 font-body text-zinc-100/75 py-2">
                <span class="col-span-2">Ude af Kontrol</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body text-zinc-100/75 py-2">
                <span class="col-span-2">Ude af Kontrol</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body text-zinc-100/75 py-2">
                <span class="col-span-2">Ude af Kontrol</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
            </ul>
          </div>
        </Tab>
        <Tab title="Talks">
          <h1>Talks</h1>
        </Tab>
      </Tabs>
    </section>
  </div>
</template>

<style>
#page-program {
  @apply min-h-screen w-full bg-cover;
}

#program {
  @apply p-4 pt-[128px] h-screen flex flex-col space-y-4;
}

#program .tabs-titles {
  @apply flex items-center space-x-4;
}

#program .tab-title {
  @apply p-2 px-6 text-zinc-100 font-bold font-header border-4 border-indigo-500 bg-blue-900/75 cursor-pointer transition-all duration-150 mb-4;
}

#program .tab-active {
  @apply bg-indigo-500;
}
</style>
