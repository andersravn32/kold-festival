<script setup>
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import PageHeader from "../components/PageHeader.vue";
import bg from "../assets/img/bg.jpg";
</script>

<template>
  <div id="page-program">
    <PageHeader :bg="bg">
      <h1 class="text-8xl uppercase leading-[0.9]">Program</h1>
      <h2 class="text-xl text-center font-body">
        Nedenfor kan du læse hele festivalens program
      </h2>
    </PageHeader>
    <section id="program" class="container mx-auto flex flex-col">
      <Tabs>
        <Tab title="Musik" class="grid grid-cols-3 gap-4">
          <div class="flex flex-col space-y-4 bg-blue-900/75 p-4">
            <h2 class="text-xl">Torsdag d. 2. Februar</h2>
            <ul class="flex flex-col space-y-2 text-zinc-100">
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Agnes Hartwich</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Astrid Engberg</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Chopper</span>
                <span>Godset</span>
                <span>kl 23:30</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col space-y-4 bg-blue-900/75 p-4">
            <h2 class="text-xl">Fredag d. 3. Februar</h2>
            <ul class="flex flex-col space-y-2 text-zinc-100">
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Agnes Hartwich</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Astrid Engberg</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Chopper</span>
                <span>Godset</span>
                <span>kl 23:30</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col space-y-4 bg-blue-900/75 p-4">
            <h2 class="text-xl">Lørdag d. 4. Februar</h2>
            <ul class="flex flex-col space-y-2 text-zinc-100">
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Agnes Hartwich</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Astrid Engberg</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Chopper</span>
                <span>Godset</span>
                <span>kl 23:30</span>
              </li>
            </ul>
          </div>
        </Tab>

        <Tab title="Talks" class="grid grid-cols-3 gap-4">
          <div class="flex flex-col space-y-4 bg-blue-900/75 p-4">
            <h2 class="text-xl">Torsdag d. 2. Februar</h2>
            <ul class="flex flex-col space-y-2 text-zinc-100">
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Selvforsynende Villahave</span>
                <span>Godset</span>
                <span>kl 13:30</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col space-y-4 bg-blue-900/75 p-4">
            <h2 class="text-xl">Fredag d. 3. Februar</h2>
            <ul class="flex flex-col space-y-2 text-zinc-100">
              <li class="grid grid-cols-4 font-header font-bold">
                <span class="col-span-2">Navn</span>
                <span>Sted</span>
                <span>Tidspunkt</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Emma Holten</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
              <li class="grid grid-cols-4 font-body">
                <span class="col-span-2">Ung Scene</span>
                <span>Pitstop</span>
                <span>kl 23:30</span>
              </li>
            </ul>
          </div>
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
  @apply container mx-auto flex flex-col p-4;
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
