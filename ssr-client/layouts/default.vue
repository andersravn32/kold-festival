<script setup>
import { UserIcon } from "@heroicons/vue/24/outline";
const sidebar = useSidebar();
const modal = useModal();
const imageSelector = useImageSelector();
const account = useAccount();

const toggleScroll = () => {
  document.querySelector("body").classList.toggle("overflow-y-hidden");
};
</script>

<template>
  <div id="layout-default">
    <Transition name="fade">
      <BaseSidebar
        v-if="sidebar.show.value && account.user.value && account.profile.value"
      />
    </Transition>

    <BaseCTA v-if="!account.user.value && !account.profile.value" />
    <BaseSocialsMobile v-if="!account.user.value && !account.profile.value" />
    <BaseSocialTabs v-if="!account.user.value && !account.profile.value" />

    <Transition name="fade">
      <BaseOverlay v-if="modal.show.value">
        <BaseModal />
      </BaseOverlay>
    </Transition>

    <Transition name="fade">
      <BaseImageSelector
        v-if="
          imageSelector.show.value &&
          account.user.value &&
          account.profile.value
        "
      />
    </Transition>
    <Transition name="fade">
      <button
        v-if="
          !sidebar.show.value && account.user.value && account.profile.value
        "
        @click="sidebar.toggle()"
        class="fixed bottom-4 right-4 p-4 bg-indigo-500 rounded-full z-20"
      >
        <UserIcon class="h-6 w-6 text-white" />
      </button>
    </Transition>

    <button
      v-if="!sidebar.show.value && account.user.value && account.profile.value"
      @click="sidebar.toggle()"
      class="fixed bottom-4 right-4 p-4 bg-indigo-500 rounded-full z-20"
    >
      <UserIcon class="h-6 w-6 text-white" />
    </button>
    <BaseNavbar @toggle-scroll="toggleScroll" v-if="!sidebar.show.value" />
    <slot />
    <BaseFooter />
  </div>
</template>
