<script setup>
import FormBlockCreate from "../form/block/Create.vue";
import FormArtistCreate from "../form/artist/Create.vue";
import FormArtistEdit from "../form/artist/Edit.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

// Import account from composable
const account = useAccount();
if (!account.user.value || !account.profile.value) {
  await account.update();
}

// Import sidebar data
const sidebar = useSidebar();

const handleClick = (e) => {
  if (e.target.className == "sidebar-overlay-inner") {
    return sidebar.toggle();
  }
}

// Ready state
const ready = ref(false);
onMounted(async () => {
  ready.value = true;
});
</script>

<template>
  <div class="sidebar-overlay" @click="handleClick">
    <div class="sidebar-overlay-inner">
      <aside v-if="ready" class="sidebar">
        <div class="flex items-end justify-end text-white">
          <button @click="sidebar.toggle()">
            <XMarkIcon class="h-12 w-12" />
          </button>
        </div>
        <div v-if="sidebar.getComponent()" class="sidebar-content">
          <component
            :is="sidebar.getComponent()"
            @done="sidebar.toggle()"
          />
        </div>
        <div v-if="!sidebar.getComponent()" class="sidebar-content space-y-4">
          <div>
            <h2 class="text-2xl">
              Velkommen {{ account.profile.value.firstName }}
            </h2>
            <p>Vælg venligst hvad du ønsker at administrere</p>
          </div>
          
          <BaseButton @click="sidebar.component.value = FormBlockCreate"
            >Opret nyt indhold</BaseButton
          >
          <BaseButton @click="sidebar.setComponent(FormArtistCreate)">Tilføj ny kunstner</BaseButton>
          <BaseButton @click="sidebar.setComponent(FormArtistEdit)">Rediger kunstner info</BaseButton>
          <BaseButton>Rediger kontaktformular</BaseButton>
        </div>
        <User :user="account.user.value" :profile="account.profile.value" />
      </aside>
    </div>
  </div>
</template>

<style>
.sidebar-overlay {
  @apply top-0 bottom-0 left-0 right-0 fixed bg-black/75 z-40;
}

.sidebar-overlay-inner{
  @apply h-full w-full relative;
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
