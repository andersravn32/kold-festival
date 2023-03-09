<script setup>
import { UserIcon } from "@heroicons/vue/24/outline";
const sidebar = useSidebar();
const modal = useModal();
const account = useAccount();
</script>

<template>
  <div>
    <BaseSidebar
      v-if="sidebar.show.value && account.user.value && account.profile.value"
    />

    <BaseOverlay v-if="modal.show.value">
      <BaseModal />
    </BaseOverlay>

    <button
      v-if="!sidebar.show.value && account.user.value && account.profile.value"
      @click="sidebar.show.value = true"
      class="fixed bottom-4 right-4 p-4 bg-indigo-500 rounded-full z-20"
    >
      <UserIcon class="h-6 w-6 text-white" />
    </button>
    <slot />
  </div>
</template>
