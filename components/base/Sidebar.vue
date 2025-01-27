<script setup>
import FormBlockCreate from "../form/block/Create.vue";
import FormArtistCreate from "../form/artist/Create.vue";
import FormArtistEdit from "../form/artist/Edit.vue";
import FormMainButton from "../form/general/data/MainButton.vue"
import FormGeneralEdit from "../form/general/Edit.vue"
import FormBlockDataPartners from '../form/block/data/Partners.vue'
import { XMarkIcon, ArrowLeftIcon } from "@heroicons/vue/24/outline";

// Import account from composable
/* const account = useAccount();
if (!account.user.value || !account.profile.value) {
  await account.update();
} */

// Import sidebar data
const sidebar = useSidebar();

const handleClick = (e) => {
  if (e.target.className == "sidebar-overlay-inner") {
    return sidebar.toggle();
  }
};

const reload = () => {
  return location.reload();
}

// Ready state
const ready = ref(false);
onMounted(async () => {
  ready.value = true;
});
</script>

<template>
  <div class="sidebar-overlay" :class="{ 'open': sidebar.show }" @mousedown="handleClick">
    <div class="sidebar-overlay-inner overflow-scroll">
      <aside v-if="ready" class="sidebar">
        <div
          class="flex items-end text-white"
          :class="{
            'justify-between': sidebar.getComponent(),
            'justify-end': !sidebar.getComponent(),
          }"
        >
          <button
            v-if="sidebar.getComponent()"
            @click="sidebar.setComponent(null)"
          >
            <ArrowLeftIcon class="h-12 w-12" />
          </button>
          <button @click="sidebar.toggle()">
            <XMarkIcon class="h-12 w-12" />
          </button>
        </div>
        <div v-if="sidebar.getComponent()" class="sidebar-content">
          <component :is="sidebar.getComponent()" @done="reload" />
        </div>
        <div v-if="!sidebar.getComponent()" class="sidebar-content space-y-4">
          <div>
            <h2 class="text-2xl">
              Velkommen
            </h2>
            <p>Vælg venligst hvad du ønsker at administrere</p>
          </div>
          <p>Generelt</p>
          <BaseButton @click="sidebar.component.value = FormBlockCreate"
            >Opret nyt indhold</BaseButton
          >
          <BaseButton @click="sidebar.setComponent(FormMainButton)"
            >Rediger køb knap</BaseButton
          >
          <p>Festivals indhold</p>
          <BaseButton @click="sidebar.setComponent(FormArtistCreate)"
            >Tilføj ny kunstner</BaseButton
          >
          <BaseButton @click="sidebar.setComponent(FormArtistEdit)"
            >Rediger kunstner info</BaseButton
          >
          
        </div>
       <!--  <User :user="account.user.value" :profile="account.profile.value" /> -->
      </aside>
    </div>
  </div>
</template>

<style>
.sidebar-overlay {
  @apply top-0 bottom-0 left-0 right-0 fixed bg-black/75 z-40;
}

.sidebar-overlay::-webkit-scrollbar {
  @apply w-2;
}

.sidebar-overlay::-webkit-scrollbar-track {
  @apply bg-gradient-to-t bg-midnight/50 to-indigo-600/50;
}

.sidebar-overlay::-webkit-scrollbar-thumb {
  @apply bg-indigo-500;
}

.sidebar-overlay-inner {
  @apply h-full w-full relative pointer-events-auto;
}

.sidebar {
  @apply absolute top-0 bottom-0 right-0 bg-midnight p-8 w-full max-w-lg flex flex-col justify-between space-y-8 translate-x-0;
}

.sidebar-content {
  @apply h-full overflow-scroll flex flex-col text-white;
}

.sidebar-content::-webkit-scrollbar {
  @apply hidden;
}
</style>
