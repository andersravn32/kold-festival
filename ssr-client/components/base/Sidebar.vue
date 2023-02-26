<script setup>
import FormBlockCreate from "../form/block/Create.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

// Import account from composable
const account = useAccount();
if (!account.user.value || !account.profile.value) {
  await account.update();
}

// Import sidebar data
const sidebar = useSidebar();

// Ready state
const ready = ref(false);
onMounted(async () => {
  ready.value = true;
});
</script>

<template>
  <div class="sidebar-overlay">
    <div class="h-full w-full relative">
      <aside v-if="ready" class="sidebar">
        <div class="flex items-end justify-end text-white">
          <button @click="sidebar.show.value = false">
            <XMarkIcon class="h-12 w-12" />
          </button>
        </div>
        <div v-if="sidebar.component.value" class="sidebar-content">
          <component
            :is="sidebar.component.value"
            @done="sidebar.show.value = false"
          />
        </div>
        <div v-if="!sidebar.component.value" class="sidebar-content space-y-4">
          <div>
            <h2 class="text-2xl">
              Velkommen {{ account.profile.value.firstName }}
            </h2>
            <p>Vælg venligst hvad du ønsker at administrere</p>
          </div>
      
          <BaseButton @click="sidebar.component.value = FormBlockCreate"
            >Opret nyt indhold</BaseButton
          >
          <BaseButton>Tilføj ny kunstner</BaseButton>
          <BaseButton>Rediger kunstner info</BaseButton>
          <BaseButton>Rediger kontaktformular</BaseButton>
        </div>
        <User :user="account.user.value" :profile="account.profile.value" />
      </aside>
    </div>
  </div>
</template>

<style>
.sidebar-overlay {
  @apply top-0 bottom-0 left-0 right-0 fixed bg-black/75 z-50;
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
