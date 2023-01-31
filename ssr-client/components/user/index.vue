<script setup>
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/outline";
defineProps({
  user: {
    type: Object,
    required: true,
  },

  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="user">
    <UserAvatar
      :user="user"
      :profile="profile"
    />
    <div class="flex flex-col text-white w-full">
      <span class="font-bold font-header">{{ profile.firstName }}</span>
      <span class="font-body text-white/75 text-xs">{{ user.email }}</span>
    </div>
    <button class="text-white/75">
      <ArrowLeftOnRectangleIcon class="h-6 w-6" />
    </button>
  </div>
</template>

<style>
.user {
  @apply flex items-center space-x-4;
}
</style>
