<script setup>
import { UserIcon } from "@heroicons/vue/24/outline";

const account = useAccount();
const sidebar = useSidebar();
const imageSelector = useImageSelector();
const modal = useModal();
const router = useRouter();

if (!account.profile.value || !account.user.value) {
  await account.update();
}

/* onMounted(() => {
  let externalScript = document.createElement("script");
  externalScript.setAttribute(
    "src",
    "https://consent.cookiebot.com/uc.js?cbid=40b80dd7-9d04-4fbd-84b7-1836c89950af%27"
  );
  document.head.appendChild(externalScript);
}); */

</script>

<template>
  <div v-if="router.currentRoute.value.name == 'auth-signin'">
    <!-- Modal component and overlay -->
    <Transition name="fade">
      <BaseOverlay v-if="modal.show.value">
        <BaseModal />
      </BaseOverlay>
    </Transition>
    <NuxtPage />
  </div>
  <div v-if="router.currentRoute.value.name != 'auth-signin'">
    <!-- Sidebar -->
    <BaseSidebar
      v-if="sidebar.show.value && account.user.value && account.profile.value"
    />

    <!-- Sidebar toggle button -->
    <button
      v-if="!sidebar.show.value && account.user.value && account.profile.value"
      @click="sidebar.toggle()"
      class="fixed bottom-4 right-4 p-4 bg-indigo-500 rounded-full z-20"
    >
      <UserIcon class="h-6 w-6 text-white" />
    </button>

    <!-- Modal component and overlay -->
    <Transition name="fade">
      <BaseOverlay v-if="modal.show.value">
        <BaseModal />
      </BaseOverlay>
    </Transition>

    <!-- Image selector overlay -->
    <Transition name="fade">
      <BaseImageSelector
        v-if="
          imageSelector.show.value &&
          account.user.value &&
          account.profile.value
        "
      />
    </Transition>
    <BaseNavbar v-if="!sidebar.show.value" />
    <BaseCTA />
    <div v-if="!account.user.value && !account.profile.value">
      <BaseSocialsMobile />
      <BaseSocialTabs />
    </div>
    <NuxtPage />
    <BaseFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>
