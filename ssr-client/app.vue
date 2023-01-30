<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser()
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
