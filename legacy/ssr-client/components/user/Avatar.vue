<script setup>
const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="user-avatar">
    <div v-if="!profile.avatar" class="user-avatar-inner">
      <span>{{ profile.firstName[0] }}</span>
      <span>{{ profile.lastName[0] }}</span>
    </div>
    <div
      v-if="profile.avatar"
      class="user-avatar-inner"
      :style="{ 'background-image': `url(${profile.avatar})` }"
    ></div>
  </div>
</template>

<style>
.user-avatar {
  @apply h-12 w-12 flex-shrink-0;
}

.user-avatar-inner {
  @apply h-full w-full rounded-full border border-indigo-600 font-bold flex items-center justify-center text-white bg-center bg-cover;
}
</style>
